export const letterboxdProfile = 'https://letterboxd.com/domhpdx/'
export const letterboxdFeedPath = '/feeds/letterboxd.xml'

const namespace = 'https://letterboxd.com'
const posterPattern = /<img\b[^>]*?\ssrc\s*=\s*["'](https:\/\/a\.ltrbxd\.com\/resized\/film-poster\/[\d/]+\/[\w-]+\.jpg(?:\?v=[\da-f]+)?)["']/i

function filmKey({ title, year }) {
  return `${title.normalize('NFKC').replaceAll('’', "'").toLowerCase()}|${year ?? ''}`
}

export function parseLetterboxdFeed(xml) {
  const document = new DOMParser().parseFromString(xml, 'application/xml')
  if (document.documentElement.localName !== 'rss' || document.querySelector('parsererror')) {
    throw new Error('Expected a Letterboxd RSS feed.')
  }

  return Array.from(document.querySelectorAll('channel > item')).flatMap((item) => {
    const value = (field) => item.getElementsByTagNameNS(namespace, field)[0]?.textContent.trim()
    const title = value('filmTitle')
    const watchedOn = value('watchedDate')
    if (!title || !/^\d{4}-\d{2}-\d{2}$/.test(watchedOn ?? '')) return []

    const year = Number(value('filmYear'))
    const rating = Number(value('memberRating'))
    const link = item.querySelector('link')?.textContent.trim()
    return [{
      title,
      year: Number.isInteger(year) && year > 0 ? year : null,
      rating: rating > 0 && rating <= 5 ? rating : null,
      url: link?.startsWith(letterboxdProfile) ? link : null,
      posterUrl: item.querySelector('description')?.textContent.match(posterPattern)?.[1] ?? null,
      watchedOn,
      ratedOn: null,
    }]
  })
}

export function mergeFilmActivity(archive, recent) {
  const films = new Map(archive.map((film) => [filmKey(film), film]))
  for (const entry of recent) {
    const key = filmKey(entry)
    const current = films.get(key)
    if (current?.watchedOn && current.watchedOn >= entry.watchedOn) {
      if (!current.posterUrl && entry.posterUrl) films.set(key, { ...current, posterUrl: entry.posterUrl })
      continue
    }

    const ratedOn = current?.ratedOn ?? null
    const keepExportedRating = current?.rating != null && ratedOn && ratedOn >= entry.watchedOn
    films.set(key, {
      ...entry,
      ratedOn,
      rating: keepExportedRating ? current.rating : (entry.rating ?? current?.rating ?? null),
      url: entry.url ?? current?.url ?? null,
      posterUrl: entry.posterUrl ?? current?.posterUrl ?? null,
    })
  }
  return [...films.values()]
}

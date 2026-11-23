import { useEffect, useState } from 'react'
import odyssey from '../assets/interests/odyssey.jpg'
import projectHailMary from '../assets/interests/project-hail-mary.jpg'
import trialOfTheChicago7 from '../assets/interests/trial-of-the-chicago-7.jpg'
import bicycleThieves from '../assets/interests/bicycle-thieves.jpg'
import spiderManBrandNewDay from '../assets/interests/spider-man-brand-new-day.jpg'
import InterestHighlights from '../components/InterestHighlights'
import library from '../data/interestLibrary.json'
import {
  letterboxdFeedPath,
  letterboxdProfile,
  mergeFilmActivity,
  parseLetterboxdFeed,
} from '../data/letterboxd'

const pageSize = 8
const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' })
const rankingPosters = {
  'The Odyssey|2026': odyssey,
  'Project Hail Mary|2026': projectHailMary,
  'The Trial of the Chicago 7|2020': trialOfTheChicago7,
  'Bicycle Thieves|1948': bicycleThieves,
  'Spider-Man: Brand New Day|2026': spiderManBrandNewDay,
}

function entryDate({ watchedOn, ratedOn, finishedOn }) {
  return watchedOn || finishedOn || ratedOn || ''
}

function displayDate(value) {
  return dateFormat.format(new Date(`${value}T00:00:00Z`))
}

function compareRecency(first, second) {
  return entryDate(second).localeCompare(entryDate(first)) || first.title.localeCompare(second.title)
}

function compareRatings(first, second) {
  return (second.rating ?? -1) - (first.rating ?? -1) || compareRecency(first, second)
}

function EntryRating({ rating }) {
  if (rating == null) return null

  return (
    <span className="interest-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
      <span aria-hidden="true">★ {rating}</span>
    </span>
  )
}

function InterestEntry({ entry }) {
  const date = entryDate(entry)

  return (
    <li>
      <div className="interest-entry-main">
        <p className="interest-entry-title">
          {entry.url ? <a href={entry.url}>{entry.title}</a> : entry.title}
          {entry.year && <span className="interest-entry-year">{entry.year}</span>}
        </p>
        {(entry.author || date) && (
          <p className="interest-entry-meta">
            {entry.author && <span>{entry.author}</span>}
            {date && (
              <time dateTime={date}>
                {entry.watchedOn ? 'Watched' : entry.finishedOn ? 'Finished' : 'Rated'} {displayDate(date)}
              </time>
            )}
          </p>
        )}
      </div>
      <EntryRating rating={entry.rating} />
    </li>
  )
}

function RankedFilm({ film, rank }) {
  const poster = rankingPosters[`${film.title}|${film.year}`] ?? film.posterUrl

  return (
    <li className="interest-ranking-row">
      <span className="interest-rank" aria-hidden="true">{String(rank).padStart(2, '0')}</span>
      <span className="interest-ranking-poster" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="14" height="12" rx="1" />
          <path d="M7 4v12m6-12v12M3 8h4m-4 4h4m6-4h4m-4 4h4" />
        </svg>
        {poster && (
          <img
            key={poster}
            src={poster}
            alt=""
            width="40"
            height="60"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(event) => { event.currentTarget.hidden = true }}
          />
        )}
      </span>
      <p className="interest-ranking-film">
        {film.url ? <a href={film.url}>{film.title}</a> : film.title}
      </p>
      <EntryRating rating={film.rating} />
    </li>
  )
}

function AnnualFilmRanking({ films }) {
  const year = new Date().getFullYear()
  const ranked = films
    .filter((film) => film.rating != null && film.watchedOn?.startsWith(`${year}-`))
    .sort(compareRatings)
    .slice(0, 5)

  return (
    <section className="interest-ranking" aria-labelledby="interest-ranking-title">
      <div className="interest-ranking-intro">
        <p className="eyebrow">Year in film</p>
        <h2 id="interest-ranking-title">Top 5 films of {year}</h2>
      </div>
      {ranked.length ? (
        <ol className="interest-ranking-list" role="list">
          {ranked.map((film, index) => (
            <RankedFilm key={`${film.title}-${film.year}`} film={film} rank={index + 1} />
          ))}
        </ol>
      ) : <p className="interest-ranking-empty">No rated watches logged yet this year.</p>}
    </section>
  )
}

function InterestShelf({ id, title, entries, sort, source }) {
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const sorted = [...entries].sort(sort === 'rating' ? compareRatings : compareRecency)

  return (
    <section className="interest-shelf" aria-labelledby={`${id}-title`}>
      <header className="interest-shelf-header">
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{sorted.length} logged</p>
        </div>
        {source}
      </header>

      {sorted.length ? (
        <ul className="interest-entries">
          {sorted.slice(0, visibleCount).map((entry, index) => (
            <InterestEntry key={`${entry.title}-${entry.year ?? entry.author}-${index}`} entry={entry} />
          ))}
        </ul>
      ) : <p className="interest-empty">No matching {id}.</p>}

      {visibleCount < sorted.length && (
        <button className="interest-more" type="button" onClick={() => setVisibleCount((count) => count + pageSize)}>
          Show more {id}
        </button>
      )}
    </section>
  )
}

export default function InterestsPage() {
  const [films, setFilms] = useState(library.films)
  const [sort, setSort] = useState('rating')

  useEffect(() => {
    const controller = new AbortController()
    async function refreshFilms() {
      try {
        const response = await fetch(letterboxdFeedPath, { signal: controller.signal })
        if (!response.ok) return
        const recent = parseLetterboxdFeed(await response.text())
        if (!controller.signal.aborted && recent.length) setFilms(mergeFilmActivity(library.films, recent))
      } catch {
        // The imported library remains available when the public feed is unreachable.
      }
    }
    refreshFilms()
    return () => controller.abort()
  }, [])

  return (
    <main className="site-shell page-shell interest-page">
      <section className="interest-intro" aria-labelledby="interests-title">
        <div>
          <p className="eyebrow">Interests</p>
          <h1 id="interests-title">Off the clock.</h1>
        </div>
        <p className="interest-lead">What I’ve been watching and reading, with my ratings from Letterboxd and StoryGraph.</p>
      </section>

      <InterestHighlights films={films} books={library.books} />

      <AnnualFilmRanking films={films} />

      <section id="interest-library" className="interest-library" aria-label="Full film and book log" tabIndex={-1}>
        <div className="interest-toolbar">
          <label htmlFor="interest-sort">Sort by</label>
          <select id="interest-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="rating">Highest rated</option>
            <option value="recent">Most recent</option>
          </select>
        </div>

        <div className="interest-shelves">
          <InterestShelf
            key={`films-${sort}`}
            id="films"
            title="Films"
            entries={films}
            sort={sort}
            source={<a className="interest-source" href={letterboxdProfile}>Letterboxd <span aria-hidden="true">↗</span></a>}
          />
          <InterestShelf
            key={`books-${sort}`}
            id="books"
            title="Books"
            entries={library.books}
            sort={sort}
            source={
              <p className="interest-source">
                StoryGraph
                <time dateTime={library.booksImportedOn}>Imported {displayDate(library.booksImportedOn)}</time>
              </p>
            }
          />
        </div>
      </section>
    </main>
  )
}

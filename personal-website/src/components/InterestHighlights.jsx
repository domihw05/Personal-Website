import { useId } from 'react'
import odyssey from '../assets/interests/odyssey.jpg'
import interstellar from '../assets/interests/interstellar.jpg'
import greenMile from '../assets/interests/green-mile.jpg'
import ghostwriter from '../assets/interests/ghostwriter.jpg'
import flickerInTheDark from '../assets/interests/flicker-in-the-dark.jpg'
import lastDevil from '../assets/interests/last-devil.jpg'

const filmArt = [
  { title: 'The Odyssey', edition: 2026, image: odyssey },
  { title: 'Interstellar', edition: 2014, image: interstellar },
  { title: 'The Green Mile', edition: 1999, image: greenMile },
]

const bookArt = [
  { title: 'The Ghostwriter', edition: 'Julie Clark', image: ghostwriter, url: 'https://www.sourcebooks.com/the-ghostwriter.html' },
  { title: 'A Flicker in the Dark', edition: 'Stacy Willingham', image: flickerInTheDark, url: 'https://us.macmillan.com/books/9781250803825/aflickerinthedark/' },
  { title: 'The Last Devil to Die', edition: 'Richard Osman', image: lastDevil, url: 'https://www.penguin.co.uk/books/443603/the-last-devil-to-die-by-osman-richard/9780241992401' },
]

const starOffsets = [0, 17, 34, 51, 68]

function ArtworkRating({ rating }) {
  const id = useId()
  const outline = `${id}-star`
  const fill = `${id}-fill`
  const whole = Math.floor(rating)
  const fraction = rating - whole
  const filledWidth = whole * 17 + (fraction ? 2 + fraction * 12 : 0)

  return (
    <span className="interest-artwork-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
      <svg viewBox="0 0 84 16" aria-hidden="true" focusable="false">
        <defs>
          <path id={outline} d="M8 1.7 9.9 5.7 14 6.3 11 9.3 11.7 13.6 8 11.6 4.3 13.6 5 9.3 2 6.3 6.1 5.7Z" />
          <clipPath id={fill}><rect width={filledWidth} height="16" /></clipPath>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
          {starOffsets.map((x) => <use key={x} href={`#${outline}`} x={x} />)}
        </g>
        <g fill="currentColor" clipPath={`url(#${fill})`}>
          {starOffsets.map((x) => <use key={x} href={`#${outline}`} x={x} />)}
        </g>
      </svg>
      <span aria-hidden="true">{rating}</span>
    </span>
  )
}

function matchArtwork(artwork, entries) {
  return artwork.flatMap((item) => {
    const match = entries.find(({ title, author, year }) =>
      title === item.title && (year ?? author) === item.edition,
    )
    return match ? [{ ...item, url: match.url ?? item.url, rating: match.rating }] : []
  })
}

function ArtworkGroup({ title, items }) {
  if (!items.length) return null

  return (
    <div className="interest-artwork-group">
      <h3>{title}</h3>
      <ul className="interest-artwork-list">
        {items.map(({ title, edition, image, url, rating }) => {
          const content = (
            <>
              <span className="interest-artwork-frame">
                <img src={image} alt="" decoding="async" />
              </span>
              <span className="interest-artwork-title">{title}</span>
              <span className="interest-artwork-edition">{edition}</span>
            </>
          )
          return (
            <li key={title}>
              {url ? (
                <a className="interest-artwork-piece" href={url} aria-label={`${title}, ${edition}`}>{content}</a>
              ) : <div className="interest-artwork-piece">{content}</div>}
              {rating != null && <ArtworkRating rating={rating} />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function InterestHighlights({ films, books }) {
  const featuredFilms = matchArtwork(filmArt, films)
  const featuredBooks = matchArtwork(bookArt, books)
  if (!featuredFilms.length && !featuredBooks.length) return null

  return (
    <section className="interest-highlights" aria-labelledby="interest-highlights-title">
      <header className="interest-highlights-header">
        <h2 id="interest-highlights-title">Top picks</h2>
        <a href="#interest-library" className="interest-jump">Browse the full log <span aria-hidden="true">↓</span></a>
      </header>
      <div className="interest-highlights-grid">
        <ArtworkGroup title="Films" items={featuredFilms} />
        <ArtworkGroup title="Books" items={featuredBooks} />
      </div>
    </section>
  )
}

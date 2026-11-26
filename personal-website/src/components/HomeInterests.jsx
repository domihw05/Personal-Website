import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { homeInterests } from '../data/siteContent'

export default function HomeInterests() {
  const journalRef = useRef(null)

  useEffect(() => {
    const journal = journalRef.current
    const photos = [...journal.querySelectorAll('.home-photo-frame')]
    const motion = window.matchMedia(
      '(prefers-reduced-motion: no-preference) and (min-width: 861px)',
    )
    let pendingFrame = null

    function positionPhotos() {
      pendingFrame = null
      const viewportHeight = window.innerHeight
      const bounds = journal.getBoundingClientRect()
      if (bounds.bottom <= 0 || bounds.top >= viewportHeight) return

      const offsets = photos.map((photo) => {
        const { top, height } = photo.getBoundingClientRect()
        const progress = (viewportHeight - top) / (viewportHeight + height)
        const bounded = Math.max(0, Math.min(progress, 1))
        return Math.round((bounded * 2 - 1) * 18)
      })
      photos.forEach((photo, index) => {
        photo.style.setProperty('--journal-offset', `${offsets[index]}px`)
      })
    }

    function schedulePosition() {
      pendingFrame ??= window.requestAnimationFrame(positionPhotos)
    }

    function syncMotion() {
      window.removeEventListener('scroll', schedulePosition)
      window.removeEventListener('resize', schedulePosition)
      window.cancelAnimationFrame(pendingFrame)
      pendingFrame = null
      if (motion.matches) {
        window.addEventListener('scroll', schedulePosition, { passive: true })
        window.addEventListener('resize', schedulePosition)
        schedulePosition()
      }
    }

    motion.addEventListener('change', syncMotion)
    syncMotion()

    return () => {
      window.cancelAnimationFrame(pendingFrame)
      window.removeEventListener('scroll', schedulePosition)
      window.removeEventListener('resize', schedulePosition)
      motion.removeEventListener('change', syncMotion)
    }
  }, [])

  return (
    <section className="home-journal" id="off-the-clock" aria-labelledby="journal-title" ref={journalRef}>
      <header className="journal-heading">
        <h2 id="journal-title">Off the clock.</h2>
        <Link to="/interests" className="journal-library-link">View my film and reading log <span aria-hidden="true">→</span></Link>
      </header>

      <div className="journal-chapters">
        {homeInterests.map((interest) => (
          <article className="journal-chapter home-spread" key={interest.title}>
            <div className="journal-copy">
              <h3>{interest.title}</h3>
              {interest.entries && (
                <ul>
                  {interest.entries.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              )}
              {interest.teams && (
                <ul className="journal-teams" role="list">
                  {interest.teams.map(({ name, logo, detail, darkBadge }) => (
                    <li key={name}>
                      <span className={darkBadge ? 'journal-team-mark journal-team-mark-dark' : 'journal-team-mark'}>
                        <img src={logo} alt="" width="32" height="32" loading="lazy" decoding="async" />
                      </span>
                      <span>{name}{detail && <small>{detail}</small>}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <figure className="home-photo">
              <div className="home-photo-frame journal-photo">
                <img src={interest.image} alt={interest.imageAlt} loading="lazy" decoding="async" />
              </div>
              {interest.photoCredit && <figcaption>{interest.photoCredit}</figcaption>}
            </figure>
          </article>
        ))}
      </div>
    </section>
  )
}

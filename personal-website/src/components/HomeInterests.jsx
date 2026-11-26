import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { homeLibrary, sportsInterests } from '../data/siteContent'
import { travelStats } from '../data/travelPlaces'
import TeamList from './TeamList'

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
        <Link to="/interests" className="journal-library-link">Explore my interests <span aria-hidden="true">→</span></Link>
      </header>

      <div className="journal-chapters">
        <article className="journal-chapter home-spread">
          <h3>{homeLibrary.title}</h3>
          <figure className="home-photo">
            <div className="home-photo-frame journal-photo">
              <img src={homeLibrary.image} alt={homeLibrary.imageAlt} loading="lazy" decoding="async" />
            </div>
          </figure>
        </article>
        <article className="journal-chapter home-spread">
          <h3>Travel</h3>
          <div className="home-travel-summary">
            <ul className="home-travel-stats" role="list" aria-label="Travel stats">
              {travelStats.map(({ label, count }) => (
                <li key={label}><strong>{count}</strong> {label}</li>
              ))}
            </ul>
            <Link className="home-travel-link" to="/interests#travel">View the travel map <span aria-hidden="true">→</span></Link>
          </div>
        </article>
        <article className="journal-chapter home-spread">
          <h3>{sportsInterests.title}</h3>
          <div className="home-sports-preview">
            <TeamList teams={sportsInterests.teams} />
            <Link className="home-travel-link" to="/interests#sports">Explore sports <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      </div>
    </section>
  )
}

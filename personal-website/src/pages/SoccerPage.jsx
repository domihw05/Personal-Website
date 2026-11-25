import { useEffect, useRef, useState } from 'react'
import bowdoinHero from '../assets/soccer-matches/bowdoin/EH_08177.jpg'
import SoccerJourney from '../components/SoccerJourney'
import { soccerAwards, soccerGallery } from '../data/siteContent'

const galleryIntervalMs = 5000
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function SoccerPhotoGallery() {
  const viewport = useRef(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia(reducedMotionQuery).matches,
  )
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState(false)
  const activeGalleryImage = soccerGallery[activeGalleryIndex]
  const photoCount = soccerGallery.length

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.25), { threshold: 0.25 })
    observer.observe(viewport.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const preference = window.matchMedia(reducedMotionQuery)
    const pauseForReducedMotion = (event) => {
      if (event.matches) setAutoplay(false)
    }
    preference.addEventListener('change', pauseForReducedMotion)
    return () => preference.removeEventListener('change', pauseForReducedMotion)
  }, [])

  useEffect(() => {
    if (!inView) return
    for (const offset of [-1, 1]) {
      const image = new Image()
      image.src = soccerGallery[(activeGalleryIndex + offset + photoCount) % photoCount].image
    }
  }, [activeGalleryIndex, inView, photoCount])

  useEffect(() => {
    if (!autoplay || !inView || hovered) return
    let timer
    const syncTimer = () => {
      window.clearInterval(timer)
      if (document.visibilityState !== 'visible') return
      timer = window.setInterval(() => {
        setActiveGalleryIndex(current => (current + 1) % photoCount)
      }, galleryIntervalMs)
    }
    syncTimer()
    document.addEventListener('visibilitychange', syncTimer)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', syncTimer)
    }
  }, [autoplay, inView, hovered, photoCount])

  function showPhoto(offset) {
    setAutoplay(false)
    setActiveGalleryIndex(current => (current + offset + photoCount) % photoCount)
  }

  return (
    <section className="section-grid soccer-gallery-section" aria-labelledby="soccer-gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Photos</p>
        <h2 id="soccer-gallery-title">Moments from the field.</h2>
      </div>

      <div className="soccer-gallery-carousel" ref={viewport}>
        <div
          className="image-frame soccer-gallery-frame"
          onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
          onPointerLeave={() => setHovered(false)}
        >
          <img src={activeGalleryImage.image} alt={activeGalleryImage.imageAlt} loading="lazy" decoding="async" />
        </div>
        <div className="soccer-gallery-controls" role="group" aria-label="Soccer photo controls">
          <button className="soccer-gallery-playback" type="button" onClick={() => setAutoplay(value => !value)}>
            {autoplay ? 'Pause slideshow' : 'Play slideshow'}
          </button>
          <span className="soccer-gallery-status" aria-live={autoplay ? 'off' : 'polite'}>
            {activeGalleryIndex + 1} / {photoCount}
          </span>
          <div className="soccer-gallery-arrows">
            <button type="button" onFocus={() => setAutoplay(false)} onClick={() => showPhoto(-1)} aria-label="Show previous soccer photo">←</button>
            <button type="button" onFocus={() => setAutoplay(false)} onClick={() => showPhoto(1)} aria-label="Show next soccer photo">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SoccerPage() {
  return (
    <main className="site-shell page-shell">
      <section className="soccer-panel" aria-labelledby="soccer-title">
        <div className="about-copy">
          <p className="eyebrow">Carnegie Mellon · No. 8</p>
          <h1 className="page-title" id="soccer-title">My soccer career</h1>
          <p className="page-intro">
            I’ve played in the ECNL and USL League Two and captained Carnegie Mellon for three seasons.
            Here’s a look at my time with the Tartans, from my career goals to our first NCAA Final Four run.
          </p>
        </div>

        <figure className="soccer-hero-photo">
          <div className="image-frame soccer-image-frame">
            <img
              src={bowdoinHero}
              alt="Dominic Hoar-Weiler running under the floodlights with the Carnegie Mellon captain’s armband"
              width="1600"
              height="1066"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption>NCAA Elite Eight vs. Bowdoin · November 2026</figcaption>
        </figure>
      </section>

      <SoccerJourney />

      <section className="section-grid soccer-awards-section">
        <div className="section-heading">
          <p className="eyebrow">Awards</p>
          <h2>Recognition across athletics and academics.</h2>
          <p className="page-intro soccer-awards-intro">
            A snapshot of honors that reflect both team contribution and classroom consistency.
          </p>
        </div>

        <div className="card-grid soccer-awards-grid">
          {soccerAwards.map((award) => (
            <article className="info-card soccer-award-card" key={award.title}>
              <div className="soccer-award-header">
                <div className="soccer-award-logo">
                  {award.logo ? (
                    <img
                      src={award.logo}
                      alt={award.logoAlt || ''}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span>Logo</span>
                  )}
                </div>
                <div className="soccer-award-copy">
                  <p className="card-kicker soccer-award-kicker">{award.years}</p>
                  <h3>{award.title}</h3>
                </div>
              </div>
              <p>{award.description}</p>
              {award.sources?.length > 0 && (
                <div className="soccer-award-sources">
                  {award.sources.map(({ url, label }) => (
                    <a className="section-link" href={url} key={url}>{label}</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <SoccerPhotoGallery />
    </main>
  )
}

export default SoccerPage

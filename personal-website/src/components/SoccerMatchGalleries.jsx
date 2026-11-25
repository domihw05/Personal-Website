import { useEffect, useId, useRef, useState } from 'react'

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

const photos = import.meta.glob('../assets/soccer-matches/*/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const galleries = [
  {
    id: 'lynchburg',
    opponent: 'Lynchburg',
    intervalMs: 5000,
    frames: [
      ['IMG_6884', 'The ball travels across the goalmouth as No. 8 descends.'],
      ['IMG_6885', 'Teammates hug No. 8 near the sideline as Lynchburg’s keeper walks past.'],
      ['IMG_6876', 'No. 8 clenches both fists as teammates rush in to celebrate.'],
      ['IMG_6883', 'No. 8 carries the ball past the purple Scranton sideline banner.'],
      ['IMG_6879', 'No. 8 strikes the ball near the touchline.'],
      ['IMG_6881', 'No. 8 runs toward the ball with the referee in the foreground.'],
      ['IMG_6875', 'No. 8 points across the field.'],
      ['IMG_6878', 'No. 5 and No. 8 clasp hands near the sideline.'],
      ['80e334d2-2a09-4f42-a0eb-b5c2d2340509', 'The Tartans pose together in the sun after the Sweet 16 win.'],
      ['IMG_6882', 'No. 8 rises for a header in front of the Lynchburg goal.'],
    ],
  },
  {
    id: 'bowdoin',
    opponent: 'Bowdoin',
    intervalMs: 6200,
    frames: [
      ['EH_08066', 'No. 8 leaps beside the corner flag as teammates run over.', 'center 42%'],
      ['NCAAelite8_msoccer26_1920', 'The Tartans hold their Final Four ticket beneath the 4–1 scoreboard.'],
      ['EH_07171', 'No. 8 exchanges a fist bump with a Bowdoin player.'],
      ['EH_08177', 'No. 8 runs across the pitch wearing the captain’s armband.'],
      ['EH_08112', 'Teammates swarm No. 8 along the fence.'],
      ['EH_08198', 'Two Tartans clasp hands under the floodlights.'],
      ['EH_08214', 'No. 8 raises an arm on the pitch.'],
      ['EH_08473', 'Tartans leap and embrace under the lights.'],
      ['EH_08879', 'The team crowds in to cheer after the match.'],
      ['EH_08916', 'The Tartans celebrate together behind the Ticket Punched sign.'],
    ],
  },
]

function photoUrl(gallery, file) {
  return photos[`../assets/soccer-matches/${gallery}/${file}.jpg`]
}

function MatchGallery({ gallery, match, openGallery, setOpenGallery }) {
  const dialog = useRef(null)
  const opener = useRef(null)
  const titleId = useId()
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [playing, setPlaying] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia(reducedMotionQuery).matches,
  )
  const { id, opponent, frames, intervalMs } = gallery
  const [file, description, position] = frames[index]
  const isOpen = openGallery === id
  const canAdvance = playing && (isOpen || (!openGallery && inView && !hovered && !focused))
  const playbackLabel = playing ? 'Pause slideshow' : 'Play slideshow'

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.4), { threshold: 0.4 })
    observer.observe(opener.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const preference = window.matchMedia(reducedMotionQuery)
    const pauseForReducedMotion = event => { if (event.matches) setPlaying(false) }
    preference.addEventListener('change', pauseForReducedMotion)
    return () => preference.removeEventListener('change', pauseForReducedMotion)
  }, [])

  useEffect(() => {
    if (!canAdvance) return
    const [nextFile] = frames[(index + 1) % frames.length]
    let timer
    const syncTimer = () => {
      window.clearTimeout(timer)
      if (document.visibilityState !== 'visible') return
      const nextImage = new Image()
      nextImage.src = photoUrl(id, isOpen ? nextFile : `${nextFile}-cover`)
      timer = window.setTimeout(() => setIndex(current => (current + 1) % frames.length), intervalMs)
    }
    syncTimer()
    document.addEventListener('visibilitychange', syncTimer)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', syncTimer)
    }
  }, [canAdvance, frames, id, index, intervalMs, isOpen])

  function step(offset) {
    setPlaying(false)
    setIndex(current => (current + offset + frames.length) % frames.length)
  }

  return (
    <div className="soccer-match-gallery">
      <button
        ref={opener}
        type="button"
        className="soccer-match-card"
        aria-haspopup="dialog"
        aria-label={`${opponent} match gallery, ${frames.length} photos`}
        onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onClick={() => {
          dialog.current.showModal()
          setOpenGallery(id)
        }}
      >
        <img
          src={photoUrl(id, `${file}-cover`)}
          alt={description}
          style={position ? { objectPosition: position } : undefined}
          loading="lazy"
          decoding="async"
        />
        <span className="soccer-match-card-label">
          <span>
            <span className="soccer-bracket-round">{match.round} · {match.result}</span>
            <span className="soccer-match-name">vs. {opponent}</span>
          </span>
          <span className="soccer-match-count">{frames.length} photos <span aria-hidden="true">↗</span></span>
        </span>
      </button>
      <button
        type="button"
        className="soccer-match-playback"
        aria-label={`${playbackLabel} for ${opponent}`}
        onClick={() => setPlaying(value => !value)}
      >
        {playbackLabel}
      </button>

      <dialog
        ref={dialog}
        className="soccer-match-dialog"
        aria-labelledby={titleId}
        onClose={() => {
          setOpenGallery(null)
          opener.current?.focus()
        }}
        onKeyDown={event => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
          event.preventDefault()
          step(event.key === 'ArrowLeft' ? -1 : 1)
        }}
      >
        <header className="soccer-match-dialog-bar">
          <h4 id={titleId}>{match.round} · vs. {opponent}</h4>
          <form method="dialog"><button type="submit">Close</button></form>
        </header>
        <figure>
          {isOpen && <img src={photoUrl(id, file)} alt={description} decoding="async" />}
          <figcaption className="soccer-match-dialog-bar">
            <span aria-live={playing ? 'off' : 'polite'}><span className="soccer-match-number">{index + 1} / {frames.length}</span> {description}</span>
            <span className="soccer-match-controls">
              <button type="button" aria-label={playbackLabel} onClick={() => setPlaying(value => !value)}>{playing ? 'Pause' : 'Play'}</button>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo">←</button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo">→</button>
            </span>
          </figcaption>
        </figure>
      </dialog>
    </div>
  )
}

export default function SoccerMatchGalleries({ matches }) {
  const [openGallery, setOpenGallery] = useState(null)
  return (
    <section className="soccer-match-galleries" aria-labelledby="soccer-match-galleries-title">
      <h3 id="soccer-match-galleries-title">Tournament photos</h3>
      <div className="soccer-match-grid">
        {galleries.map(gallery => {
          const match = matches.find(({ opponent }) => opponent === gallery.opponent)
          return match ? (
            <MatchGallery key={gallery.id} gallery={gallery} match={match} openGallery={openGallery} setOpenGallery={setOpenGallery} />
          ) : null
        })}
      </div>
    </section>
  )
}

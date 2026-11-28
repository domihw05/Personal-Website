import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { experiences, getExperienceId, linkedInProfile } from '../data/siteContent'
import './ExperiencePage.css'

const stops = {
  Aramark: { scene: 'concessions', mapLabel: 'Hospitality on campus', landmarks: ['Concessions', 'Mobile ordering'] },
  'CMU Cognitive Neuroscience Lab (CAOs)': { scene: 'lab', mapLabel: 'Cognitive neuroscience lab', landmarks: ['fMRI', 'Machine learning', 'Language'] },
  'Aramark Headquarters': { scene: 'hq', mapLabel: 'Aramark headquarters', landmarks: ['Sage', 'Snowflake', 'Workflow automation'] },
  Meta: { scene: 'meta', mapLabel: 'Meta campus', landmarks: ['Facebook', 'Instagram', 'Muse'] },
}

const stations = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder)

function MetaLandmarks() {
  return (
    <>
      <path className="map-side" d="m124 85 31-22h143l-32 22v68l32-22V63H155l-31 22" />
      <path className="map-face" d="M124 85h142v68H124z" />
      <path className="map-line" d="M135 131h120m-109-13v35m99-35v35m-68-15h37v15M273 91l18-12m-18 23 18-12m-18 23 18-12m-18 23 18-12m-18 23 18-12" />
      <path className="map-branch" d="M194 154v14H89v22m105-22h121v22m-121-22v28" />
      <circle className="map-token" cx="89" cy="201" r="23" />
      <circle className="map-token" cx="194" cy="214" r="23" />
      <circle className="map-token" cx="315" cy="201" r="23" />
      <circle cx="89" cy="201" r="15" fill="#0866ff" />
      <path fill="#fff" d="M92 216v-12h4l.6-4.6H92v-3c0-1.3.4-2.2 2.4-2.2H97v-4a28 28 0 0 0-3.7-.2c-3.5 0-5.8 2.1-5.8 6.1v3.3h-4v4.6h4v12z" />
      <g fill="none" stroke="#a12d65" strokeWidth="2.2">
        <rect x="181" y="201" width="26" height="26" rx="7" />
        <circle cx="194" cy="214" r="5.8" />
        <circle cx="201.6" cy="206.5" r="1.1" fill="#a12d65" stroke="none" />
      </g>
      <text className="map-muse" x="315" y="205">MUSE</text>
    </>
  )
}

function ConcessionsLandmarks() {
  return (
    <>
      <path className="map-side" d="m236 88 38-25v105l-38 27z" />
      <path className="map-face" d="M81 89h155v106H81z" />
      <path className="map-roof" d="m66 90 43-34h177l-43 34z" />
      <path className="map-line" d="M88 90l44-34m-19 34 44-34m-19 34 44-34m-19 34 44-34m-19 34 44-34m-19 34 44-34" />
      <path className="map-side" d="M92 130h133v38H92z" />
      <path className="map-line" d="M89 170h140m-122-7 4-15h12l4 15zm3-14-4-5m30 19h29m-27-4c1-10 23-10 25 0zm40 4 3-14h17l3 14m-16-10v6m5-6v6m5-6v6" />
      <path className="map-branch" d="M274 166h39v-15" />
      <rect className="map-token" x="298" y="100" width="33" height="57" rx="6" />
      <path className="map-line" d="M309 107h11m-14 12h17m-17 7h12m-12 7h15m-10 16h7" />
      <path className="map-line" d="M244 104l22-15m-22 28 22-15m-22 28 22-15m-22 28 22-15m-22 28 22-15M75 199h164l41-29" />
    </>
  )
}

function LabLandmarks() {
  return (
    <>
      <path className="map-face" d="M67 166h250v28H67z" />
      <path className="map-side" d="m317 166 25-25v27l-25 26z" />
      <path className="map-roof" d="m67 166 25-25h250l-25 25z" />
      <path className="map-branch" d="M142 107h-20V66H89m49 61v15m106-36h28V67h41m-61 54h30v16h31m-118 13v-16" />
      <g className="map-line">
        <path d="M195 53c-9-16-28-12-35 1-14 0-23 10-23 23-11 7-12 24-3 33 0 14 13 24 26 22 10 13 28 11 35-2 9 13 27 14 35 2 15 1 27-10 27-24 9-10 6-25-5-33-1-13-10-22-23-23-8-13-25-14-34 1z" />
        <path d="M195 53v77m-35-76c-5 8-4 17 2 23m-25 0c7-2 13 1 16 8m-19 25c7 4 13 3 19-2m7 24c-4-10 1-16 8-20m62 20c7-9 3-19-5-24m27-33c-8-1-12 5-15 11m-8-34c4 8 1 18-5 23m-53 10c11-2 14 6 12 13m37-13c-9 0-15 6-13 14" />
      </g>
      <circle className="map-token" cx="88" cy="66" r="5" />
      <circle className="map-token" cx="314" cy="67" r="5" />
      <circle className="map-token" cx="314" cy="137" r="5" />
      <text className="map-svg-label" x="89" y="51">fMRI</text>
      <text className="map-svg-label" x="314" y="52">ML</text>
      <text className="map-svg-label" x="314" y="122">WORDS</text>
    </>
  )
}

function HeadquartersLandmarks() {
  return (
    <>
      <path className="map-side" d="m230 65 34-22v121l-34 25z" />
      <path className="map-roof" d="m132 65 34-22h98l-34 22z" />
      <path className="map-face" d="M132 65h98v124h-98z" />
      <path className="map-line" d="M143 75h76m-76 38h76m-76 13h76m-76 13h76m-76 13h76m27-93v96m-7-92v96m14-105v95m-83 16h25v23" />
      <path className="map-branch" d="M132 164H93v-24m172 10h41v-35m0 35 24 24" />
      <rect className="map-token" x="67" y="106" width="52" height="32" rx="4" />
      <text className="map-svg-label" x="93" y="126">SAGE</text>
      <circle className="map-token" cx="306" cy="99" r="16" />
      <circle className="map-token" cx="332" cy="176" r="16" />
      <path className="map-line" d="M306 89v20m-9-15 18 10m-18 0 18-10m11 83 4 4 8-9" />
    </>
  )
}

const sceneArt = { concessions: ConcessionsLandmarks, lab: LabLandmarks, hq: HeadquartersLandmarks, meta: MetaLandmarks }
const signs = { concessions: [121, 96], lab: [156, 171], hq: [143, 82], meta: [157, 94] }
const insets = {
  concessions: 'm51 197 50-29h178l49 31-48 20H97z',
  lab: 'm42 190 55-33h239l28 23-54 36H85z',
  hq: 'm91 184 64-37h123l39 29-77 34H137z',
  meta: 'm94 152 58-35h141l31 25-53 22H120z',
}

function MapScene({ stop, image, imageAlt }) {
  const Art = sceneArt[stop.scene]
  const [x, y] = signs[stop.scene]

  return (
    <figure className="career-scene" data-scene={stop.scene}>
      <svg className="career-map-art" viewBox="0 0 400 245" role="img" aria-label={`${imageAlt}; ${stop.landmarks.join(', ')}`}>
        <path className="map-inset" d={insets[stop.scene]} />
        <Art />
        <rect className="map-sign" x={x} y={y} width="76" height="20" rx="3" />
        <image href={image} x={x + 5} y={y + 2} width="66" height="16" />
      </svg>
      <figcaption>
        <span>{stop.mapLabel}</span>
        <small>{stop.landmarks.join(' · ')}</small>
      </figcaption>
    </figure>
  )
}

function RouteSegment({ index }) {
  const curve = index % 2
    ? 'M50 0 C50 18 56 21 56 32 S50 42 50 50 44 58 44 69 50 82 50 100'
    : 'M50 0 C50 18 44 21 44 32 S50 42 50 50 56 58 56 69 50 82 50 100'

  return (
    <svg className="career-route-segment" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path className="career-route-bed" d={curve} vectorEffect="non-scaling-stroke" />
      <path className="career-route-dashes" d={curve} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function ExperienceStop({ station, index }) {
  const id = getExperienceId(station)
  const { title, category, period, image, imageAlt, highlights, photo } = station
  const stop = stops[category]

  return (
    <li className={`career-stop${photo ? ' career-stop-with-photo' : ''}`} id={id}>
      <RouteSegment index={index} />
      <span className="career-pin" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="career-stop-scene">
        {stop && <MapScene stop={stop} image={image} imageAlt={imageAlt} />}
      </div>
      {photo && (
        <figure className="career-photo" data-format={photo.width > photo.height ? 'landscape' : 'portrait'}>
          <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      )}
      <article className="career-stop-details" aria-labelledby={`${id}-title`}>
        <p className="career-stop-kicker"><span className="career-mobile-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} / </span>{period} <span aria-hidden="true">/</span> {category}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <ul className="career-highlights">
          {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
        </ul>
      </article>
    </li>
  )
}

function ExperiencePage() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const stop = document.getElementById(hash.slice(1))
    if (!stop?.classList.contains('career-stop')) return
    const frame = window.requestAnimationFrame(() => stop.scrollIntoView({ block: 'start' }))
    return () => window.cancelAnimationFrame(frame)
  }, [hash, key])

  return (
    <main className="site-shell page-shell experience-page">
      <header className="experience-header">
        <div>
          <p className="eyebrow">2024–2026</p>
          <h1 className="page-title">Experience</h1>
          <p className="page-intro">Four stops, from Aramark to Meta.</p>
        </div>
        <a className="experience-profile-link" href={linkedInProfile}>
          View LinkedIn profile <span aria-hidden="true">↗</span>
        </a>
      </header>
      <section className="career-map" aria-labelledby="career-map-heading">
        <header className="career-map-heading">
          <h2 id="career-map-heading">The career trail</h2>
          <span>Scroll to follow <span aria-hidden="true">↓</span></span>
        </header>
        <ol className="career-stops" role="list">
          {stations.map((station, index) => <ExperienceStop key={station.title} station={station} index={index} />)}
        </ol>
        <div className="career-map-end" aria-hidden="true"><span /></div>
      </section>
    </main>
  )
}

export default ExperiencePage

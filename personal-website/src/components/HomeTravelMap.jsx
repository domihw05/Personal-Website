import { useRef, useState } from 'react'
import worldMap from '../assets/hobbies/travel/world.svg'
import northAmericaMap from '../assets/hobbies/travel/north-america.svg'
import europeMap from '../assets/hobbies/travel/europe.svg'
import { travelRegions, visitedCountries } from '../data/travelPlaces'
import { height, mapPoint, nearestMarker, width } from '../data/travelProjection'

const basemaps = { World: worldMap, 'North America': northAmericaMap, Europe: europeMap }
const places = travelRegions.flatMap(region => region.places)
const offsets = {
  'Vancouver, BC, Canada': [-13, -4],
  'Seattle, WA': [10, 1],
  'Vancouver, WA': [14, -5],
  'Portland, OR': [-14, 4],
  'Denver, CO': [-9, -4],
  'Colorado Springs, CO': [9, 4],
  'Chicago, IL': [-5, 0],
  'South Bend, IN': [5, 0],
  'Madrid, Spain': [8, -7],
  'Toledo, Spain': [-8, 7],
}

const markersByView = Object.fromEntries(Object.keys(basemaps).map(view => [
  view,
  (view === 'World' ? places : travelRegions.find(region => region.name === view).places)
    .map(([name, lon, lat, , starred]) => {
      const [x, y] = mapPoint(view, lon, lat)
      const [dx, dy] = view === 'World' ? [0, 0] : offsets[name] ?? [0, 0]
      return { name, starred, x, y, dx, dy }
    }),
]))

const position = ({ x, y, dx, dy }) => ({
  left: `${(x + dx) / width * 100}%`,
  top: `${(y + dy) / height * 100}%`,
})

// Keep the overview legible without hiding the locations on the map.
const worldRegions = [
  { name: 'North America', x: 165, y: 191, dx: 0, dy: -66 },
  { name: 'Europe', x: 380, y: 176, dx: 38, dy: -58 },
].map(region => ({
  ...region,
  count: travelRegions.find(({ name }) => name === region.name).places.length,
}))

export default function HomeTravelMap() {
  const [view, setView] = useState('World')
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [focused, setFocused] = useState(null)
  const viewButtons = useRef({})
  const stage = useRef(null)
  const markers = markersByView[view]
  const active = markers.find(({ name }) => name === (hovered ?? focused ?? selected))

  function showView(option, place = null) {
    setView(option)
    setSelected(place)
    setHovered(null)
    setFocused(null)
  }

  function markerAtPointer(event) {
    return nearestMarker(markers, stage.current.getBoundingClientRect(), event.clientX, event.clientY)
  }

  return (
    <article className="journal-chapter journal-travel">
      <header className="travel-heading">
        <h3>Places I’ve visited</h3>
        <p className="travel-count">
          <span><strong>{visitedCountries.length}</strong> countries</span>
          <span aria-hidden="true">·</span>
          <span><strong>{places.length}</strong> destinations</span>
        </p>
      </header>
      <figure className="travel-map">
        <div className="travel-toolbar">
          <div className="travel-map-controls" role="group" aria-label="Travel map view">
            {Object.keys(basemaps).map(option => (
              <button type="button" key={option} ref={node => { viewButtons.current[option] = node }} aria-pressed={view === option} onClick={() => showView(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div
          className="travel-map-stage" data-view={view} ref={stage}
          onPointerMove={event => {
            if (event.pointerType === 'touch') return
            setHovered(event.target.closest('.travel-region') ? null : markerAtPointer(event)?.name ?? null)
          }}
          onPointerLeave={() => setHovered(null)}
          onKeyDown={event => { if (event.key === 'Escape') showView(view) }}
        >
          <img className="travel-map-base" src={basemaps[view]} width={width} height={height} alt="" decoding="async" loading="lazy" />
          <svg className="travel-map-leaders" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
            {(view === 'World' ? worldRegions : markers.filter(({ dx, dy }) => dx || dy)).map(({ name, x, y, dx, dy }) => (
              <line key={name} x1={x} y1={y} x2={x + dx} y2={y + dy} />
            ))}
          </svg>
          {view === 'World' && worldRegions.map(region => (
            <button className="travel-region" key={region.name} type="button" style={position(region)}
              aria-label={`Explore ${region.name}, ${region.count} destinations`}
              onClick={() => {
                viewButtons.current[region.name]?.focus({ preventScroll: true })
                showView(region.name)
              }}>
              <span>{region.name}</span><span aria-hidden="true">{region.count}</span>
            </button>
          ))}
          <div role="group" aria-label={`Destinations in ${view}`}>
            {markers.map(marker => (
              <button
                key={marker.name}
                className="travel-marker"
                type="button"
                data-starred={marker.starred || undefined}
                data-active={active?.name === marker.name || undefined}
                style={position(marker)}
                aria-label={marker.starred ? `${marker.name} (starred)` : marker.name}
                aria-pressed={selected === marker.name}
                onFocus={event => { if (event.currentTarget.matches(':focus-visible')) setFocused(marker.name) }}
                onBlur={() => setFocused(null)}
                onClick={event => {
                  const name = (event.detail > 0 ? markerAtPointer(event)?.name : null) ?? marker.name
                  setSelected(current => current === name ? null : name)
                }}
              >
                {marker.starred ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 1.8 3.1 6.3 7 .99-5.06 4.93 1.2 6.97L12 17.7l-6.24 3.29 1.2-6.97L1.9 9.09l7-.99z" /></svg>
                ) : <span className="travel-marker-dot" aria-hidden="true" />}
                {active?.name === marker.name && (
                  <span className="travel-tooltip" data-align={marker.x > width * 0.73 ? 'right' : marker.x < width * 0.27 ? 'left' : 'center'} data-below={marker.y < height * 0.18} aria-hidden="true">
                    {marker.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <figcaption>
          <span aria-live="polite">{selected ?? 'Hover or tap a pin to see the city.'}</span>
          <span className="travel-legend"><span aria-hidden="true">★</span> Starred places</span>
          <a href="https://www.naturalearthdata.com/about/terms-of-use/">Natural Earth</a>
        </figcaption>
      </figure>
      <details className="travel-places">
        <summary>Browse destinations</summary>
        <div className="travel-place-groups">
          {travelRegions.map(({ name, mapView = name, places }) => (
            <div key={name}>
              <h4>{name}</h4>
              <ul role="list">
                {[...places].sort(([a], [b]) => a.localeCompare(b)).map(([place, , , , starred]) => (
                  <li key={place}>
                    <button type="button" aria-pressed={selected === place} onClick={() => showView(mapView, selected === place ? null : place)}>
                      {starred && <span className="travel-list-star" aria-hidden="true">★ </span>}{place}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </article>
  )
}

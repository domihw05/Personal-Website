export const width = 720
export const height = 400

export const views = {
  World: [-180, -58, 180, 82],
  'North America': [-129, 17, -62, 53],
  Europe: [-13, 33, 32, 57],
}

const mercator = latitude => Math.asinh(Math.tan(Math.PI * Math.max(-85, Math.min(85, latitude)) / 180))

export function mapPoint(view, longitude, latitude) {
  const [west, south, east, north] = views[view]
  return [
    width * (longitude - west) / (east - west),
    height * (mercator(north) - mercator(latitude)) / (mercator(north) - mercator(south)),
  ]
}

// Pick in screen pixels so overlapping hit boxes don't mask nearby cities.
export function nearestMarker(markers, rect, clientX, clientY) {
  let closest
  let closestDistance = 11 ** 2
  for (const marker of markers) {
    const x = rect.left + (marker.x + marker.dx) / width * rect.width
    const y = rect.top + (marker.y + marker.dy) / height * rect.height
    const distance = (x - clientX) ** 2 + (y - clientY) ** 2
    if (distance < closestDistance) {
      closest = marker
      closestDistance = distance
    }
  }
  return closest
}

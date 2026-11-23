export const bracketResultsUrl = 'https://magicnumbermath.com/ncaa-d3-mens-soccer/'

// Four eight-match quadrants. Results run top to bottom in each round;
// P marks the shootout winner and O marks a match decided in overtime.
const cmuQuadrant = {
  teams: [
    'Connecticut Col.', 'UMass Boston', 'Carnegie Mellon', 'Salem State',
    'Lynchburg', 'Covenant', 'Kenyon', 'Ohio Northern',
    'Bowdoin', 'Thomas (ME)', 'St. Lawrence', 'Neumann',
    'Wesleyan (CT)', 'SUNY Geneseo', 'Scranton', 'Manhattanville',
  ],
  results: [
    ['0–2', '2–0', '2–1', '2–3', '3–1', '2–1', '4–0', '4–2'],
    ['1–4', '0P–0', '1–0', '0–1'],
    ['1–0', '1–0'],
    ['4–1'],
  ],
}

const cortlandQuadrant = {
  teams: [
    'Middlebury', 'St. Joseph’s (ME)', 'Hobart', 'Wheaton (MA)',
    'Montclair State', 'Southern Virginia', 'Cortland', 'Chris. Newport',
    'Hamilton', 'Allegheny', 'Denison', 'Plattsburgh State',
    'Rowan', 'Marymount (VA)', 'Wash. & Lee', 'Colorado College',
  ],
  results: [
    ['2–1', '2–2P', '1–0', '0P–0', '2–1', '1–0', '4–0', '5–2'],
    ['1–0', '1–2', '0–0P', '1–0'],
    ['2–3O', '3–2'],
    ['2–0'],
  ],
}

const amherstQuadrant = {
  teams: [
    'Williams', 'John Jay', 'Johns Hopkins', 'Roger Williams',
    'Southwestern (TX)', 'Hardin-Simmons', 'Trinity (TX)', 'La Verne',
    'Amherst', 'Stevens', 'Messiah', 'Vassar',
    'Case Western', 'Penn St.–Behrend', 'Hope', 'Transylvania',
  ],
  results: [
    ['6–0', '2–1', '4–1', '3–1', '5–1', '3–2', '2–0', '1–2'],
    ['2O–1', '1–1P', '5O–4', '2–0'],
    ['3–2', '0P–0'],
    ['0–1'],
  ],
}

const stOlafQuadrant = {
  teams: [
    'Tufts', 'Penn St.–Abington', 'Babson', 'SUNY Oneonta',
    'Saint John’s (MN)', 'MSOE', 'North Park', 'Whitman',
    'St. Olaf', 'Grinnell', 'Wis.–Superior', 'Loras',
    'UChicago', 'Webster', 'Calvin', 'Wis.–Eau Claire',
  ],
  results: [
    ['1–0', '3–2', '0–1O', '5–0', '2–1', '1–2', '4–1', '4–2'],
    ['1–0', '1–3', '3–0', '0–2'],
    ['1–0', '2–1'],
    ['1–2'],
  ],
}

function buildMatch(names, result) {
  const scores = result?.split('–') ?? []
  const [first, second] = scores.map((score) => Number.parseInt(score, 10))
  const winner = !result ? null : first === second ? Number(scores[1].endsWith('P')) : Number(second > first)

  return {
    names,
    winner,
    scores: scores.map((score) => score.replace('P', ' PK').replace('O', ' OT')),
  }
}

function buildQuadrant({ teams, results }) {
  let advancing = teams
  return results.map((round) => {
    const matches = round.map((score, index) => buildMatch(advancing.slice(index * 2, index * 2 + 2), score))
    advancing = matches.map((match) => match.names[match.winner])
    return matches
  })
}

// Put CMU’s quadrant first in this view without changing any match pairings.
const quadrants = [cmuQuadrant, cortlandQuadrant, amherstQuadrant, stOlafQuadrant].map(buildQuadrant)
const rounds = Array.from({ length: 4 }, (_, index) => quadrants.flatMap((quadrant) => quadrant[index]))
const semifinalists = rounds[3].map((match) => match.names[match.winner])

export const bracketRounds = [
  ...rounds,
  [buildMatch(semifinalists.slice(0, 2)), buildMatch(semifinalists.slice(2))],
  [buildMatch(['Winner, semifinal 2', 'Winner, semifinal 1'])],
]

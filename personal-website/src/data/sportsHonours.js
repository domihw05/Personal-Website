function record(scope, sources, competitions) {
  const seasons = new Map()
  for (const [title, years] of competitions) {
    for (const year of years) {
      if (!seasons.has(year)) seasons.set(year, [])
      seasons.get(year).push(title)
    }
  }

  return {
    scope,
    sources,
    timeline: [...seasons].sort(([a], [b]) => a - b),
    count: [...seasons.values()].reduce((sum, titles) => sum + titles.length, 0),
  }
}

export const sportsHonours = {
  bears: record('Super Bowl wins', [
    ['Chicago Bears history', 'https://www.chicagobears.com/history/'],
  ], [
    ['Super Bowl XX', [1985]],
  ]),
  notreDame: record('Football · university-recognized consensus national titles', [
    ['Notre Dame Athletics', 'https://fightingirish.com/news/2026/09/24/national-championship-analysis'],
  ], [
    ['National Championship', [1924, 1929, 1930, 1943, 1946, 1947, 1949, 1966, 1973, 1977, 1988]],
  ]),
  timbers: record('MLS Cup and MLS is Back Tournament', [
    ['Portland Timbers history', 'https://www.timbers.com/club/timbers-soccer-history'],
    ['MLS is Back final', 'https://www.timbers.com/news/mls-back-tournament-final-match-recap-portland-timbers-2-orlando-city-sc-1'],
  ], [
    ['MLS Cup', [2015]],
    ['MLS is Back Tournament', [2020]],
  ]),
  thorns: record('NWSL championships', [
    ['Portland Thorns title history', 'https://www.thorns.com/news/thorns-fc-re-sign-international-goal-scoring-legend-christine-sinclair-one-year'],
  ], [
    ['NWSL Championship', [2013, 2017, 2022]],
  ]),
  bayern: record('Men’s first team · European Cup and UEFA Champions League', [
    ['FC Bayern honours', 'https://fcbayern.com/de/club/erfolge'],
  ], [
    ['European Cup', [1974, 1975, 1976]],
    ['UEFA Champions League', [2001, 2013, 2020]],
  ]),
  reds: record('World Series titles', [
    ['Cincinnati Reds postseason records', 'https://www.mlb.com/reds/history/postseason-results'],
  ], [
    ['World Series', [1919, 1940, 1975, 1976, 1990]],
  ]),
  blazers: record('NBA championships', [
    ['NBA team records', 'https://www.nba.com/team/1610612757/trail-blazers'],
  ], [
    ['NBA Championship', [1977]],
  ]),
}

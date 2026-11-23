import salemStateLogo from '../assets/soccer-opponents/salem-state.png'
import umassBostonLogo from '../assets/soccer-opponents/umass-boston.png'
import lynchburgLogo from '../assets/soccer-opponents/lynchburg.png'
import bowdoinLogo from '../assets/soccer-opponents/bowdoin.png'
import cortlandLogo from '../assets/soccer-opponents/cortland.png'
import nyuLogo from '../assets/soccer-opponents/nyu.png'
import uchicagoLogo from '../assets/soccer-opponents/uchicago.png'
import brandeisLogo from '../assets/soccer-opponents/brandeis.png'
import rochesterLogo from '../assets/soccer-opponents/rochester.png'
import bethanyLogo from '../assets/soccer-opponents/bethany.png'
import washingtonJeffersonLogo from '../assets/soccer-opponents/washington-jefferson.png'

export const ncaaBracketUrl = 'https://www.ncaa.com/brackets/soccer-men/d3/2026'
export const cmuPlayerUrl = 'https://athletics.cmu.edu/sports/msoc/2026-27/bios/hoar-weiler_dominic_pjay'
export const coachesPollUrl = 'https://unitedsoccercoaches.org/rankings/college-rankings/ncaa-diii-men/'
export const npiRankingsUrl = 'https://stats.ncaa.org/selection_rankings/nitty_gritties/55029'
export const cmuScheduleUrls = {
  2023: 'https://athletics.cmu.edu/sports/msoc/2023-24/schedule',
  2025: 'https://athletics.cmu.edu/sports/msoc/2025-26/schedule',
  2026: 'https://athletics.cmu.edu/sports/msoc/2026-27/schedule',
}

export const ncaaRun = [
  {
    round: 'First round',
    date: '2026-11-14',
    opponent: 'Salem State',
    logo: salemStateLogo,
    npi: 37,
    coaches: null,
    result: 'W 2–0',
    source: 'https://uaasports.info/news/2026/11/15/mens-soccer-james-ashby-and-idan-garten-score-as-no-25-tartans-defeat-salem-state-2-0-in-ncaa-first-round.aspx',
  },
  {
    round: 'Second round',
    date: '2026-11-15',
    opponent: 'UMass Boston',
    logo: umassBostonLogo,
    npi: 102,
    coaches: null,
    result: 'W 4–1',
    source: 'https://uaasports.info/news/2026/11/15/carnegie-mellon-mens-soccer-defeats-umass-boston-4-1-advance-to-ncaa-third-round.aspx',
  },
  {
    round: 'Sweet 16',
    date: '2026-11-21',
    opponent: 'Lynchburg',
    logo: lynchburgLogo,
    npi: 12,
    coaches: 7,
    result: 'W 1–0',
    note: '81′ · Winning header',
    source: 'https://athletics.cmu.edu/sports/msoc/2026-27/releases/20261121o9uglz',
    coverage: 'https://uaasports.info/news/2026/11/21/late-winner-takes-carnegie-mellon-mens-soccer-to-elite-eight.aspx',
  },
  {
    round: 'Elite Eight',
    date: '2026-11-22',
    opponent: 'Bowdoin',
    logo: bowdoinLogo,
    npi: 5,
    coaches: 16,
    result: 'W 4–1',
    note: '74′ · Header off a corner',
    source: 'https://athletics.cmu.edu/sports/msoc/2026-27/releases/20261122rn5sqx',
    coverage: 'https://uaasports.info/news/2026/11/23/mens-soccer-tristan-gonzalez-brace-sends-no-25-carnegie-mellon-past-no-16-bowdoin-and-into-final-four.aspx',
  },
  {
    round: 'National semifinal',
    date: '2026-12-04',
    opponent: 'Cortland',
    logo: cortlandLogo,
    npi: 17,
    coaches: 18,
    kickoff: '6:30 p.m. ET',
    location: 'Historic Crew Stadium, Columbus',
    source: 'https://www.cortlandreddragons.com/news/2026/11/22/mens-soccer-18-cortland-advances-to-ncaa-semifinals-with-2-0-win-over-19-denison.aspx',
  },
]

export const goalMatches = [
  {
    date: '2026-11-22', opponent: 'Bowdoin', logo: bowdoinLogo, scheduleRank: 16, result: 'W 4–1', goals: ['73:41'],
    source: 'https://athletics.bowdoin.edu/boxscore.aspx?id=14489&path=msoc',
  },
  {
    date: '2026-11-21', opponent: 'Lynchburg', logo: lynchburgLogo, scheduleRank: 7, result: 'W 1–0', goals: ['80:31'],
    source: 'https://lynchburgsports.com/news/2026/11/21/mens-soccer-concludes-season-in-ncaa-round-of-16-against-carnegie-mellon.aspx',
  },
  {
    date: '2026-10-23', opponent: 'NYU', logo: nyuLogo, result: 'W 1–0', goals: ['50:04'],
    source: 'https://gonyuathletics.com/sports/mens-soccer/stats/2026/carnegie-mellon-university/boxscore/14679',
  },
  {
    date: '2026-10-10', opponent: 'UChicago', logo: uchicagoLogo, scheduleRank: 3, result: 'W 4–1', goals: ['55:53'],
    source: 'https://athletics.uchicago.edu/sports/mens-soccer/stats/2026/carnegie-mellon/boxscore/11822',
  },
  {
    date: '2025-10-26', opponent: 'Brandeis', logo: brandeisLogo, scheduleRank: 5, result: 'W 1–0', goals: ['81:51'],
    source: 'https://brandeisjudges.com/sports/mens-soccer/stats/2025/carnegie-mellon/boxscore/14525',
  },
  {
    date: '2023-10-07', opponent: 'Rochester', logo: rochesterLogo, result: 'T 2–2', goals: ['86:58'],
    source: 'https://uofrathletics.com/news/2023/10/7/mens-soccer-jackets-tie-carnegie-mellon-2-2.aspx',
  },
  {
    date: '2023-09-16', opponent: 'Bethany', logo: bethanyLogo, result: 'W 4–1', goals: ['14:41'],
    source: 'https://bethanybison.com/news/2023/9/16/9_16_2023_1457.aspx',
  },
  {
    date: '2023-09-13', opponent: 'Washington & Jefferson', logo: washingtonJeffersonLogo, result: 'W 3–0', goals: ['74:52'],
    source: 'https://gopresidents.com/sports/mens-soccer/stats/2023/carnegie-mellon/boxscore/13967',
  },
]

import SoccerFullBracket from './SoccerFullBracket'
import { cmuPlayerUrl, cmuScheduleUrls, coachesPollUrl, goalMatches, ncaaBracketUrl, ncaaRun, npiRankingsUrl } from '../data/soccerJourney'

const matchDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

function MatchDate({ date }) {
  return <time dateTime={date}>{matchDate.format(new Date(`${date}T00:00:00Z`))}</time>
}

function TournamentRun() {
  return (
    <section className="soccer-tournament" aria-labelledby="soccer-tournament-title">
      <header className="soccer-journey-heading">
        <div className="section-heading">
          <p className="eyebrow">2026 NCAA Division III championship</p>
          <h2 id="soccer-tournament-title">Road to the Final Four.</h2>
        </div>
        <p className="soccer-journey-lead">
          We reached the first national semifinal in Carnegie Mellon men’s soccer history. I headed in the late winner against Lynchburg, then scored again the next day against Bowdoin to help send us to Columbus.
        </p>
      </header>

      <ol className="soccer-bracket" role="list" aria-label="Carnegie Mellon’s path through the NCAA bracket">
        {ncaaRun.map(({ round, date, opponent, logo, npi, coaches, result, kickoff, location, note, source, coverage }) => (
          <li key={round} className={result ? undefined : 'soccer-bracket-next'}>
            <p className="soccer-bracket-round">{round}</p>
            <h3>
              <a href={source}>
                <img className="soccer-opponent-logo" src={logo} alt="" width="40" height="40" loading="lazy" decoding="async" />
                <span>{opponent}</span>
              </a>
            </h3>
            <dl className="soccer-opponent-ranks">
              <div><dt>NPI</dt><dd>{npi == null ? '—' : `#${npi}`}</dd></div>
              <div><dt>Coaches</dt><dd>{coaches == null ? 'NR' : `#${coaches}`}</dd></div>
            </dl>
            <p className="soccer-bracket-result">{result ?? kickoff}</p>
            <p className="soccer-bracket-date"><MatchDate date={date} />{location && <> · {location}</>}</p>
            {note && (
              <p className="soccer-bracket-note">
                {coverage ? <a href={coverage} aria-label={`${note}. ${opponent} recap from the UAA.`}>{note} <span aria-hidden="true">↗</span></a> : note}
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="soccer-bracket-footer">
        <a className="section-link" href={ncaaBracketUrl}>Full NCAA bracket <span aria-hidden="true">↗</span></a>
        <p>Bracket snapshot · Nov 23, 2026</p>
      </div>

      <p className="soccer-rank-sources">
        Pre-tournament national ranks: <a href={npiRankingsUrl}>NCAA NPI, Nov 8</a> · <a href={coachesPollUrl}>United Soccer Coaches, Nov 10</a>. NR = outside the coaches’ Top 25{ncaaRun.some(({ npi }) => npi == null) ? '; — = NPI rank not verified' : ''}.
      </p>

      <SoccerFullBracket />
    </section>
  )
}

const goalsBySeason = goalMatches.reduce((seasons, match) => {
  const season = match.date.slice(0, 4)
  const matches = (seasons[season] ??= [])
  matches.push(match)
  return seasons
}, {})
const goalSeasons = Object.keys(goalsBySeason).sort((first, second) => second - first)

function ScoringLog() {
  return (
    <section className="soccer-goals" aria-labelledby="soccer-goals-title">
      <header className="soccer-journey-heading">
        <div className="section-heading">
          <p className="eyebrow">Carnegie Mellon · Match archive</p>
          <h2 id="soccer-goals-title">My goals at CMU.</h2>
        </div>
        <div className="soccer-journey-lead">
          <p>Goals verified in official match reports. Opponent rankings are shown when listed on CMU’s schedule for that match.</p>
          <a className="section-link" href={cmuPlayerUrl}>CMU player profile <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <table className="soccer-goal-table" aria-labelledby="soccer-goals-title">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Opponent</th>
            <th scope="col">CMU result</th>
            <th scope="col">Goal time</th>
          </tr>
        </thead>
        {goalSeasons.map((season) => (
          <tbody key={season}>
            <tr className="soccer-goal-season">
              <th scope="rowgroup" colSpan={4}>
                {cmuScheduleUrls[season]
                  ? <a href={cmuScheduleUrls[season]} aria-label={`${season} CMU men’s soccer schedule`}>{season}</a>
                  : season}
              </th>
            </tr>
            {goalsBySeason[season].map(({ date, opponent, logo, scheduleRank, result, goals, source }) => (
              <tr key={date}>
                <td><MatchDate date={date} /></td>
                <th scope="row">
                  <a className="soccer-goal-opponent" href={source}>
                    <img src={logo} alt="" width="24" height="24" loading="lazy" decoding="async" />
                    <span>{scheduleRank ? `No. ${scheduleRank} ` : ''}{opponent}</span>
                  </a>
                </th>
                <td>{result}</td>
                <td>{goals.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </section>
  )
}

export default function SoccerJourney() {
  return <><TournamentRun /><ScoringLog /></>
}

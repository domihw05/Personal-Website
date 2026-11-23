import { bracketResultsUrl, bracketRounds } from '../data/ncaaSoccerBracket'
import { ncaaBracketUrl } from '../data/soccerJourney'

const labels = ['First round', 'Second round', 'Sweet 16', 'Elite Eight', 'National semifinals', 'Championship']
const columns = 194
const matchWidth = 165
const matchHeight = 36
const rowHeight = 43
const inset = 16
const top = 58
const diagramWidth = inset * 2 + columns * (bracketRounds.length - 1) + matchWidth
const diagramHeight = top + rowHeight * (bracketRounds[0].length - 1) + matchHeight / 2 + inset
const tartans = 'Carnegie Mellon'

function matchPoint(round, index) {
  const group = 2 ** round
  return {
    x: inset + columns * round,
    y: top + rowHeight * (index * group + (group - 1) / 2),
  }
}

function BracketDiagram() {
  const connectors = bracketRounds.slice(0, -1).flatMap((matches, round) => matches.map((match, index) => {
    const start = matchPoint(round, index)
    const finish = matchPoint(round + 1, Math.floor(index / 2))
    const bend = (start.x + matchWidth + finish.x) / 2
    const slot = finish.y + (index % 2 ? 8 : -8)

    return {
      key: `${round}-${index}`,
      path: `M ${start.x + matchWidth} ${start.y} H ${bend} V ${slot} H ${finish.x}`,
      highlighted: match.names[match.winner] === tartans,
    }
  }))

  return (
    <svg className="soccer-bracket-graphic" viewBox={`0 0 ${diagramWidth} ${diagramHeight}`} width={diagramWidth} height={diagramHeight} role="img" aria-labelledby="soccer-bracket-graphic-title soccer-bracket-graphic-desc">
      <title id="soccer-bracket-graphic-title">2026 Division III men’s soccer tournament bracket</title>
      <desc id="soccer-bracket-graphic-desc">The complete 64-team field. Carnegie Mellon’s highlighted path runs through Salem State, UMass Boston, Lynchburg, and Bowdoin, then to the National Semifinal against Cortland. Amherst and St. Olaf meet in the other semifinal. Neither semifinal has been played in this snapshot.</desc>
      {labels.map((label, round) => (
        <text key={label} className="soccer-bracket-graphic-round" x={matchPoint(round, 0).x} y="25">{label}</text>
      ))}
      {connectors.map(({ key, path, highlighted }) => (
        <path key={key} className={highlighted ? 'soccer-bracket-connector cmu-path' : 'soccer-bracket-connector'} d={path} />
      ))}
      {bracketRounds.map((round, roundIndex) => round.map((match, index) => {
        const { x, y } = matchPoint(roundIndex, index)
        const featured = match.names.includes(tartans)
        return (
          <g key={`${roundIndex}-${index}`} className={featured ? 'soccer-bracket-match cmu-match' : 'soccer-bracket-match'} transform={`translate(${x} ${y - matchHeight / 2})`}>
            <rect width={matchWidth} height={matchHeight} rx="2" />
            {match.names.map((name, slot) => (
              <g key={name} className={name === tartans ? 'cmu-team' : slot === match.winner ? 'bracket-winner' : undefined}>
                <text x="8" y={14 + slot * 16}>{name}</text>
                <text x={matchWidth - 8} y={14 + slot * 16} textAnchor="end">{match.scores[slot] ?? '–'}</text>
              </g>
            ))}
          </g>
        )
      }))}
    </svg>
  )
}

export default function SoccerFullBracket() {
  return (
    <details className="soccer-full-bracket" open>
      <summary>Full 64-team bracket</summary>
      <div className="soccer-full-bracket-key">
        <p><span aria-hidden="true" /> Carnegie Mellon’s path</p>
        <p>Scroll to explore · PK: penalties · OT: overtime</p>
      </div>
      <div className="soccer-full-bracket-scroll" tabIndex={0} role="region" aria-label="Scrollable full NCAA tournament bracket">
        <BracketDiagram />
      </div>
      <p className="soccer-full-bracket-source">Sources: <a href={ncaaBracketUrl}>NCAA bracket</a> · <a href={bracketResultsUrl}>Match-by-match results</a></p>
    </details>
  )
}

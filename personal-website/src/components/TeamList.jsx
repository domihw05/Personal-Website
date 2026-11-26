export default function TeamList({ teams }) {
  return (
    <ul className="interest-teams" role="list">
      {teams.map(({ name, logo, detail, shield }) => (
        <li key={name}>
          <span className={shield ? 'journal-team-mark journal-team-mark-shield' : 'journal-team-mark'}>
            <img src={logo} alt="" width="32" height="32" loading="lazy" decoding="async" />
          </span>
          <span>{name}{detail && <small>{detail}</small>}</span>
        </li>
      ))}
    </ul>
  )
}

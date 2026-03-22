function ExperienceCard({ experience }) {
  return (
    <article className="info-card">
      <p className="card-kicker">{experience.category}</p>
      <h3>{experience.title}</h3>
      <p>{experience.description}</p>
    </article>
  )
}

export default ExperienceCard

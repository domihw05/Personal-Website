import { Link } from 'react-router-dom'

function ExperienceCard({
  experience,
  id,
  linkTo,
}) {
  const card = (
    <article className="info-card timeline-card" id={id}>
      <div className="timeline-side">
        <span>{experience.period}</span>
      </div>

      <div className="timeline-content">
        <p className="card-kicker">{experience.category}</p>
        <h3>{experience.title}</h3>
      </div>

      <p>{experience.highlights[0]}</p>

      {experience.image ? (
        <div className="timeline-logo-wrap">
          <img
            src={experience.image}
            alt={experience.imageAlt || ''}
            className="timeline-logo"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

    </article>
  )

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className="timeline-card-link"
        aria-label={`View ${experience.title} on the Experience page`}
      >
        {card}
      </Link>
    )
  }

  return card
}

export default ExperienceCard

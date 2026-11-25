import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { experiences, getExperienceId, linkedInProfile } from '../data/siteContent'

const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)

function ExperienceEntry({ experience }) {
  const { title, image, category, period, highlights, photo } = experience
  const id = getExperienceId(experience)

  return (
    <article className="experience-entry" id={id} aria-labelledby={`${id}-title`}>
      <header className="experience-entry-header">
        {image && <img className="experience-entry-logo" src={image} alt="" width="48" height="48" decoding="async" />}
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="experience-entry-company">{category}</p>
          <p className="experience-entry-period">{period}</p>
        </div>
      </header>
      <div className={`experience-entry-body${photo ? ' has-photo' : ''}`}>
        <ul className="experience-highlights">
          {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
        </ul>
        {photo && (
          <figure className="experience-photo">
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        )}
      </div>
    </article>
  )
}

function ExperiencePage() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) {
      return
    }

    const target = document.getElementById(location.hash.slice(1))

    if (target) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <main className="site-shell page-shell experience-page">
      <header className="experience-header">
        <div>
          <p className="eyebrow">Dominic Hoar-Weiler</p>
          <h1 className="page-title">Experience</h1>
          <p className="page-intro">Software engineering, data science, and machine learning research.</p>
        </div>
        <a className="experience-profile-link" href={linkedInProfile}>
          View LinkedIn profile <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="experience-work-history" aria-label="Work history">
        {sortedExperiences.map(experience => <ExperienceEntry key={experience.title} experience={experience} />)}
      </section>
    </main>
  )
}

export default ExperiencePage

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'
import { experiences, getExperienceId } from '../data/siteContent'

function ExperiencePage() {
  const location = useLocation()
  const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const target = document.getElementById(location.hash.slice(1))

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <main className="site-shell page-shell">
      <section className="section-grid page-header">
        <p className="eyebrow">Where I&apos;ve worked</p>
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          Roles across data science, machine learning research, and software
          engineering.
        </p>
      </section>

      <section className="section-grid">
        <div className="experience-timeline">
          {sortedExperiences.map((experience) => (
            <ExperienceCard
              experience={experience}
              id={getExperienceId(experience)}
              key={experience.title}
              showAttachmentPreview
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage

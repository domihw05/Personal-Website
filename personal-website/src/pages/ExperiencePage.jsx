import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/siteContent'

function ExperiencePage() {
  return (
    <main className="site-shell page-shell">
      <section className="section-grid page-header">
        <p className="eyebrow">Experience</p>
        <h1 className="page-title">Internships, research, and applied work.</h1>
        <p className="page-intro">
          Roles across data science, machine learning research, software
          engineering, and internal tooling with an emphasis on practical impact.
        </p>
      </section>

      <section className="section-grid">
        <div className="card-grid">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.title} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage

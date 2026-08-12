import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <main className="site-shell page-shell">
      <section className="section-grid page-header">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title">Things I&apos;ve built.</h1>
        <p className="page-intro">
          Sports analytics, machine learning, and software projects built to
          answer real questions and make complex ideas easier to use.
        </p>
      </section>

      <section className="section-grid">
        <div className="projects-list">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} variant="feature" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage

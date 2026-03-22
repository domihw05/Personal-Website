import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <main className="site-shell page-shell">
      <section className="section-grid page-header">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Project portfolio and technical work.</h1>
        <p className="page-intro">
          A closer look at the analytics and engineering projects I have built,
          including sports-focused work, data modeling, and public-facing
          content.
        </p>
      </section>

      <section className="section-grid">
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage

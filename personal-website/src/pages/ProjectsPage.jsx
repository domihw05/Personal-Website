import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <main className="site-shell page-shell">
      <section className="section-grid page-header">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Project Portfolio</h1>
        <p className="page-intro">
          A closer look at the projects I've built,
          including sports data analysis, data modeling,
          and software development.
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

function ProjectCard({ project }) {
  return (
    <article className="info-card" key={project.title}>
      <p className="card-kicker">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-preview"
        />
      )}

      <div className="project-links">
        {project.githubURL && (
          <a href={project.githubURL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Project Link
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

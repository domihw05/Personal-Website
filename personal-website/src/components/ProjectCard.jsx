function ProjectCard({ project, variant = 'card' }) {
  if (variant === 'carousel') {
    return (
      <article className="project-carousel-card" key={project.title}>
        <div className="project-carousel-copy">
          <p className="card-kicker">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-links project-carousel-links">
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
        </div>

        {project.image && (
          <div className="project-carousel-visual">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-carousel-image"
            />
          </div>
        )}
      </article>
    )
  }

  if (variant === 'feature') {
    return (
      <article className="project-feature" key={project.title}>
        <div className="project-feature-copy">
          <p className="card-kicker">{project.category}</p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="project-links project-feature-links">
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
        </div>

        {project.image && (
          <div className="project-feature-visual">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-feature-image"
            />
          </div>
        )}
      </article>
    )
  }

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

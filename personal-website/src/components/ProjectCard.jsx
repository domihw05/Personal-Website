const repoContactHref =
  'mailto:dhoarwei@andrew.cmu.edu?subject=Repo%20access%20request'

function ProjectSkills({ skills = [] }) {
  if (!skills.length) {
    return null
  }

  return (
    <ul className="project-skills" aria-label="Skills and technologies">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project, className = '' }) {
  const linkClassName = ['project-links', className].filter(Boolean).join(' ')

  return (
    <div className={linkClassName}>
      {project.githubURL && (
        <a href={project.githubURL} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
      {!project.githubURL && project.contactForRepo && (
        <a href={repoContactHref}>Contact Me for Repository</a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          Project Link
        </a>
      )}
    </div>
  )
}

function ProjectCard({ project, variant = 'card', useSummary = false }) {
  const projectDescription =
    useSummary && project.summary ? project.summary : project.description
  const imageFitClassName =
    project.imageFit === 'contain' ? 'project-image-contain' : ''

  if (variant === 'carousel') {
    return (
      <article className="project-carousel-card" key={project.title}>
        <div className="project-carousel-copy">
          <p className="card-kicker">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{projectDescription}</p>
          <ProjectSkills skills={project.skills} />

          <ProjectLinks project={project} className="project-carousel-links" />
        </div>

        {project.image && (
          <div className="project-carousel-visual">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className={['project-carousel-image', imageFitClassName]
                .filter(Boolean)
                .join(' ')}
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
          <p>{projectDescription}</p>
          <ProjectSkills skills={project.skills} />

          <ProjectLinks project={project} className="project-feature-links" />
        </div>

        {project.image && (
          <div className="project-feature-visual">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className={['project-feature-image', imageFitClassName]
                .filter(Boolean)
                .join(' ')}
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
      <p>{projectDescription}</p>
      <ProjectSkills skills={project.skills} />

      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className={['project-preview', imageFitClassName]
            .filter(Boolean)
            .join(' ')}
        />
      )}

      <ProjectLinks project={project} />
    </article>
  )
}

export default ProjectCard

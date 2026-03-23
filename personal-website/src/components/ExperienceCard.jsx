function ExperienceCard({ experience, showAttachmentPreview = false }) {
  const canPreviewAttachment =
    showAttachmentPreview &&
    experience.attachment &&
    /\.(png|jpe?g|gif|webp|svg)$/i.test(experience.attachment)

  return (
    <article className="info-card timeline-card">
      <div className="timeline-side">
        <span>{experience.period}</span>
      </div>

      <div className="timeline-content">
        <p className="card-kicker">{experience.category}</p>
        <h3>{experience.title}</h3>
      </div>

      <p>{experience.description}</p>

      {experience.image ? (
        <div className="timeline-logo-wrap">
          <img
            src={experience.image}
            alt={experience.imageAlt || ''}
            className="timeline-logo"
          />
        </div>
      ) : null}

      {canPreviewAttachment ? (
        <img
          src={experience.attachment}
          alt={experience.attachmentLabel || `${experience.title} attachment`}
          className="timeline-attachment-preview"
        />
      ) : null}
    </article>
  )
}

export default ExperienceCard

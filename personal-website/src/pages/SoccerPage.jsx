import { useState } from 'react'
import { heroImg, soccerAwards, soccerGallery, soccerHighlights } from '../data/siteContent'

function SoccerPage() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const activeGalleryImage = soccerGallery[activeGalleryIndex]

  function showPreviousPhoto() {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? soccerGallery.length - 1 : currentIndex - 1,
    )
  }

  function showNextPhoto() {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === soccerGallery.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <main className="site-shell page-shell">
      <section className="soccer-panel">
        <div className="about-copy">
          <p className="eyebrow">Soccer</p>
          <h1 className="page-title">My Soccer Journey</h1>
          <p className="page-intro">
            Soccer has shaped how I lead, how I handle pressure, and how I work
            within high-performing teams. It is a major part of my identity and
            how I approach both technical and collaborative work.
          </p>

          <div className="strengths-panel soccer-points">
            <p className="strengths-title">What soccer adds to my work</p>
            <ul>
              {soccerHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="image-frame soccer-image-frame">
          <img src={heroImg} alt="Dominic Hoar-Weiler in a varsity soccer match" />
        </div>
      </section>

      <section className="section-grid soccer-awards-section">
        <div className="section-heading">
          <p className="eyebrow">Awards</p>
          <h2>Recognition across athletics and academics.</h2>
          <p className="page-intro soccer-awards-intro">
            A snapshot of honors that reflect both team contribution and classroom consistency.
          </p>
        </div>

        <div className="card-grid soccer-awards-grid">
          {soccerAwards.map((award) => (
            <article className="info-card soccer-award-card" key={award.title}>
              <div className="soccer-award-header">
                <div className="soccer-award-logo">
                  {award.logo ? <img src={award.logo} alt={award.logoAlt || ''} /> : <span>Logo</span>}
                </div>
                <div className="soccer-award-copy">
                  <p className="card-kicker soccer-award-kicker">Accolade</p>
                  <h3>{award.title}</h3>
                </div>
              </div>
              <p>{award.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid soccer-gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Photos</p>
          <h2>Moments from the field.</h2>
          <p className="page-intro soccer-gallery-intro">
            Some snippets from my soccer journey.
          </p>
        </div>

        <div className="soccer-gallery-carousel">
          <div className="project-carousel-controls soccer-gallery-controls" aria-label="Soccer photo controls">
            <button
              type="button"
              className="project-carousel-button"
              onClick={showPreviousPhoto}
              aria-label="Show previous soccer photo"
            >
              ←
            </button>
            <span className="project-carousel-status">
              {activeGalleryIndex + 1} / {soccerGallery.length}
            </span>
            <button
              type="button"
              className="project-carousel-button"
              onClick={showNextPhoto}
              aria-label="Show next soccer photo"
            >
              →
            </button>
          </div>

          <div className="image-frame soccer-gallery-frame">
            <img src={activeGalleryImage.image} alt={activeGalleryImage.imageAlt} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SoccerPage

import { heroImg, nyu_soccer, soccerAwards, soccerHighlights, soccercmu } from '../data/siteContent'

function SoccerPage() {
  return (
    <main className="site-shell page-shell">
      <section className="soccer-panel">
        <div className="about-copy">
          <p className="eyebrow">Soccer</p>
          <h1 className="page-title">Leadership, discipline, and team-first habits.</h1>
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
                <h3>{award.title}</h3>
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
          <p className="page-intro soccer-awards-intro">
            Some snippets from my soccer journey.
          </p>
        </div>

        <div className="soccer-gallery-grid">
          <div className="image-frame soccer-gallery-frame">
            <img src={soccercmu} alt="Dominic Hoar-Weiler playing for Carnegie Mellon men's soccer" />
          </div>
          <div className="image-frame soccer-gallery-frame">
            <img src={nyu_soccer} alt="Dominic Hoar-Weiler in a match against NYU" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SoccerPage

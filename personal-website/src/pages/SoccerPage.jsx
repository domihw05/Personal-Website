import { heroImg, soccerHighlights } from '../data/siteContent'

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
    </main>
  )
}

export default SoccerPage

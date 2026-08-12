import { Link } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import {
  experiences,
  featuredProjects,
  getExperienceId,
  heroImg,
  homeInterests,
  strengths,
} from '../data/siteContent'

function HomePage() {
  const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)

  return (
    <main className="site-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="hero-status">
            <p className="eyebrow">Student-athlete</p>
          </div>
          <h1>Dominic Hoar-Weiler</h1>
          <p className="hero-lead">
            I build software and data tools across machine learning, sports
            analytics, and product teams.
          </p>

          <div className="hero-actions">
            <Link to="/experience" className="secondary-link">
              See experience
            </Link>
            <Link to="/projects" className="secondary-link">
              Explore all projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame hero-image-frame">
            <img
              src={heroImg}
              alt="Dominic Hoar-Weiler playing soccer"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-visual-note">
            Carnegie Mellon University / Varsity soccer
          </div>
        </div>
      </section>

      <section className="section-grid" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <Link to="/projects" className="section-link">
            View all projects
          </Link>
        </div>

        <div className="projects-list home-projects-list">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
              variant="feature"
              useSummary
            />
          ))}
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Recent roles.</h2>
          </div>
          <Link to="/experience" className="section-link">
            Full experience
          </Link>
        </div>

        <div className="experience-timeline">
          {sortedExperiences.slice(0, 3).map((experience) => (
            <ExperienceCard
              experience={experience}
              key={experience.title}
              linkTo={`/experience#${getExperienceId(experience)}`}
            />
          ))}
        </div>
      </section>

      <section className="about-panel" id="about">
        <div className="about-copy">
          <p className="eyebrow">A little more context</p>
          <h2>I like hard problems and high standards.</h2>
          <p>
            I study Statistics and Machine Learning at Carnegie Mellon with a
            minor in Computer Science, and I captain the varsity men&apos;s soccer
            team. My work sits where analytical rigor, production software, and
            team performance overlap.
          </p>

          <div className="section-actions">
            <Link to="/soccer" className="section-link">
              More on soccer and leadership
            </Link>
          </div>
        </div>

        <div className="strengths-panel">
          <p className="strengths-title">Core strengths</p>
          <ul>
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-grid home-hobbies-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Away from the keyboard</p>
            <h2>What keeps me curious.</h2>
          </div>
        </div>

        <div className="home-hobbies-list">
          {homeInterests.map((interest) => (
            <article className="home-hobby" key={interest.title}>
              <div className="home-hobby-image">
                <img
                  src={interest.image}
                  alt={interest.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="home-hobby-copy">
                <p className="card-kicker">{interest.title}</p>
                <p>{interest.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s talk.</h2>
        </div>

        <a href="mailto:dhoarwei@andrew.cmu.edu" className="primary-link">
          dhoarwei@andrew.cmu.edu
        </a>
      </section>
    </main>
  )
}

export default HomePage

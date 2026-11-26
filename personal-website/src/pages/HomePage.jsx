import { Link } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'
import HomeHero from '../components/HomeHero'
import HomeInterests from '../components/HomeInterests'
import ProjectCard from '../components/ProjectCard'
import {
  experiences,
  featuredProjects,
  getExperienceId,
  heroImg,
  strengths,
} from '../data/siteContent'

function HomePage() {
  const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)

  return (
    <main className="site-shell home-shell">
      <HomeHero />

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
              headingLevel={3}
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

      <section className="about-panel home-spread" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 id="about-title">A bit about me</h2>
          <p>
            I study Statistics and Machine Learning at Carnegie Mellon with a
            minor in Computer Science, and I captain the varsity men&apos;s soccer
            team.
          </p>

          <div className="section-actions">
            <Link to="/soccer" className="section-link">
              More on soccer and leadership
            </Link>
          </div>

          <div className="strengths-panel about-strengths">
            <p className="strengths-title">Core strengths</p>
            <ul>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="home-photo home-match-photo">
          <div className="home-photo-frame">
            <img
              src={heroImg}
              alt="Dominic Hoar-Weiler playing soccer for Carnegie Mellon"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>Carnegie Mellon men&apos;s soccer</figcaption>
        </figure>
      </section>

      <HomeInterests />

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

import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import {
  experiences,
  featuredProjects,
  heroImg,
  homeInterests,
  strengths,
} from '../data/siteContent'

function HomePage() {
  const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const activeProject = featuredProjects[activeProjectIndex]

  function showPreviousProject() {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1,
    )
  }

  function showNextProject() {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <main className="site-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="hero-status">
            <p className="eyebrow">Personal Website</p>
          </div>
          <h1>Dominic Hoar-Weiler</h1>
          <p className="hero-lead">
            Student-athlete building at the intersection of machine learning,
            software engineering, and sports analytics.
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
            <img src={heroImg} alt="Dominic Hoar-Weiler playing soccer" />
          </div>
          <div className="hero-visual-note">
            Carnegie Mellon University
          </div>
        </div>
      </section>

      <section className="section-grid" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Featured Projects.</h2>
          </div>
          <div className="projects-home-actions">
            <div className="project-carousel-controls" aria-label="Featured project controls">
              <button
                type="button"
                className="project-carousel-button"
                onClick={showPreviousProject}
                aria-label="Show previous featured project"
              >
                ←
              </button>
              <span className="project-carousel-status">
                {activeProjectIndex + 1} / {featuredProjects.length}
              </span>
              <button
                type="button"
                className="project-carousel-button"
                onClick={showNextProject}
                aria-label="Show next featured project"
              >
                →
              </button>
            </div>
            <Link to="/projects" className="section-link">
              View all projects
            </Link>
          </div>
        </div>

        <div className="project-carousel">
          <ProjectCard
            project={activeProject}
            key={activeProject.title}
            variant="carousel"
          />
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Internships and Jobs.</h2>
          </div>
          <Link to="/experience" className="section-link">
            Full experience
          </Link>
        </div>

        <div className="experience-timeline experience-timeline-compact">
          {sortedExperiences.slice(0, 3).map((experience) => (
            <ExperienceCard experience={experience} key={experience.title} />
          ))}
        </div>
      </section>

      <section className="about-panel" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>How I approach work.</h2>
          <p>
            I am a student-athlete at Carnegie Mellon University, serving as the
            team captain of the Varsity Men&apos;s Soccer team. I am pursuing a
            major in Statistics and Machine Learning with a minor in Computer
            Science. My passion lies in programming and uncovering data-driven
            insights that help shape decisions and drive innovation.
          </p>
          <p>
            With a strong interest in Data Science, Software Engineering, and
            Sports Analytics, I am eager to apply my analytical skills and
            technical expertise to real-world challenges. I am actively seeking
            opportunities that allow me to leverage my problem-solving
            abilities and leadership experience to make meaningful
            contributions in these fields.
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

      <section className="section-grid home-interests-section">
        <div className="section-heading">
          <p className="eyebrow">Interests</p>
          <h2>Passions and Hobbies.</h2>
        </div>

        <div className="home-interests-grid">
          {homeInterests.map((interest) => (
            <article className="interest-tile" key={interest.title}>
              <img src={interest.image} alt={interest.imageAlt} />
              <div className="interest-caption">
                <p className="interest-title">{interest.title}</p>
                <p>{interest.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>Interested in building something serious?</h2>
        </div>

        <a href="mailto:dominic.hoarweiler@gmail.com" className="primary-link">
          dominic.hoarweiler@gmail.com
        </a>
      </section>
    </main>
  )
}

export default HomePage

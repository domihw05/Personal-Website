import { Link } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import {
  experiences,
  featuredProjects,
  heroImg,
  strengths,
} from '../data/siteContent'

function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Personal Website</p>
          <h1>Dominic Hoar-Weiler</h1>
          <p className="hero-text">
            Student-athlete at Carnegie Mellon University, pursuing a major in
            Statistics and Machine Learning with a minor in Computer Science.
            Passionate about programming and uncovering data-driven insights.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-link">
              View selected work
            </a>
            <Link to="/projects" className="secondary-link">
              Explore all projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src={heroImg}
              alt="Dominic Hoar-Weiler playing soccer"
            />
          </div>
        </div>
      </section>

      <section className="section-grid" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Featured Projects.</h2>
          </div>
          <Link to="/projects" className="section-link">
            View all projects
          </Link>
        </div>

        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Internships, Jobs and Research Experience.</h2>
          </div>
          <Link to="/experience" className="section-link">
            Full experience
          </Link>
        </div>

        <div className="card-grid">
          {experiences.slice(0, 3).map((experience) => (
            <ExperienceCard experience={experience} key={experience.title} />
          ))}
        </div>
      </section>

      <section className="about-panel" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>My Story</h2>
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

      <section className="contact-banner" id="contact">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>Let&apos;s Connect</h2>
        </div>

        <a href="mailto:dominic.hoarweiler@gmail.com" className="primary-link">
          dominic.hoarweiler@gmail.com
        </a>
      </section>
    </main>
  )
}

export default HomePage

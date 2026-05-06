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
  const sortedExperiences = [...experiences].sort((a, b) => b.sortOrder - a.sortOrder)
  const heroMetrics = [
    { label: 'Focus', value: 'Stats + ML' },
    { label: 'Build', value: 'Software & analytics' },
    { label: 'Lead', value: 'CMU captain' },
  ]
  const profilePillars = [
    {
      kicker: 'Current',
      title: 'Machine learning research at CMU',
      description:
        'Building models from fMRI data to study semantic brain encodings in the Cognitive Neuroscience Lab.',
    },
    {
      kicker: 'Next',
      title: 'Software engineering at Meta',
      description:
        'Preparing for a Summer 2026 internship focused on shipping production software in a high-bar environment.',
    },
    {
      kicker: 'Throughline',
      title: 'Analytics with practical impact',
      description:
        'I gravitate toward technical work that turns messy information into tools, predictions, and decisions.',
    },
  ]
  const quickFacts = [
    {
      title: 'Technical depth',
      description:
        'Coursework and project work centered on statistics, machine learning, and production-minded programming.',
    },
    {
      title: 'Applied mindset',
      description:
        'I like work that moves from analysis into decisions, tools, and measurable outcomes.',
    },
    {
      title: 'Team leadership',
      description:
        'Athletics has trained me to communicate clearly, stay accountable, and raise the standard around me.',
    },
  ]

  return (
    <main className="site-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="hero-status">
            <p className="eyebrow">Personal Website</p>
            <span className="hero-badge">Open to ambitious technical work</span>
          </div>
          <h1>Dominic Hoar-Weiler</h1>
          <p className="hero-lead">
            Student-athlete building at the intersection of machine learning,
            software engineering, and sports analytics.
          </p>
          <p className="hero-text">
            Student-athlete at Carnegie Mellon University, pursuing a major in
            Statistics and Machine Learning with a minor in Computer Science.
            Passionate about programming and uncovering data-driven insights.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-link">
              View selected work
            </a>
            <Link to="/experience" className="secondary-link">
              See experience
            </Link>
            <Link to="/projects" className="secondary-link">
              Explore all projects
            </Link>
          </div>

          <div className="hero-metrics" aria-label="Key profile highlights">
            {heroMetrics.map((metric) => (
              <div className="hero-metric" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img src={heroImg} alt="Dominic Hoar-Weiler playing soccer" />
          </div>

          <div className="hero-card">
            <p className="hero-card-label">What I work on</p>
            <p className="hero-card-value">
              Predictive modeling, research tooling, internal AI systems, and
              clean decision-focused analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="section-grid home-overview-grid">
        {profilePillars.map((pillar) => (
          <article className="info-card" key={pillar.title}>
            <p className="card-kicker">{pillar.kicker}</p>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="section-grid">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Snapshot</p>
            <h2>Clear, technical, and built for impact.</h2>
          </div>
        </div>

        <div className="card-grid home-snapshot-grid">
          {quickFacts.map((fact) => (
            <article className="info-card" key={fact.title}>
              <p className="card-kicker">Profile</p>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </article>
          ))}

          <article className="info-card home-summary-card">
            <p className="card-kicker">At a glance</p>
            <h3>What you should know quickly.</h3>
            <ul className="summary-list">
              <li>Statistics and Machine Learning major at Carnegie Mellon.</li>
              <li>Computer Science minor with strong interest in software engineering.</li>
              <li>Varsity soccer captain with a team-first leadership style.</li>
              <li>Experience across research, internal AI tools, and sports analytics.</li>
            </ul>
          </article>
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
            <h2>Internships, research, and shipped work.</h2>
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

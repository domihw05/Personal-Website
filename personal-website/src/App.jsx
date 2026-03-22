import heroImg from './assets/Dom_SoccerPhoto.png'
import timbersPreview from './assets/TotalTimbers_Preview.png'
import './App.css'

const featuredProjects = [
  {
    title: 'TotalTimbers',
    category: 'Sports Analytics',
    description:
      'Built a sports analytics social media following with more than 3K followers, dedicated to the Portland Timbers of the MLS.',
    demo: 'https://www.instagram.com/totaltimbers/',
    githubURL: '',
    image: timbersPreview,
    imageAlt: 'Preview of the TotalTimbers Instagram profile',
  },
  {
    title: 'NFL Big Data Bowl',
    category: 'Sports Analytics',
    description:
      'Analyzed NFL player tracking data and encoded multinomial and neural network models in R to predict passing play outcomes given pre-snap predictor variables (e.g., play clock, down, yards to go).',
    demo: '',
    githubURL: 'https://github.com/domihw05/NFL-Big-Data-Bowl',
    image: '',
    imageAlt: '',
  }
]

const experiences = [
  {
    title: 'IT and Data Science Intern',
    category: 'Aramark',
    description:
      'Analyzed relational databases in Excel to identify service trends, driving improvements in hospitality offerings.',
  },
  {
    title: 'Machine Learning Research Assistant',
    category: 'CMU Cognitive Neuroscience Lab (CAOs)',
    description:
      'Develop machine learning models using functional MRI data to predict semantic brain encodings, providing insights into how the brain processes visual stimuli.',
  },
  {
    title: 'AI Specialist and Data Science Intern',
    category: 'Aramark Headquarters',
    description:
      'Engineered and deployed Aramark’s AI assistant “Sage” to automate PTO/vacation requests—integrating NLP, Kronos and calendar APIs, and Aisera’s conversational interface to eliminate manual HR steps.',
  },
  {
    title: 'Software Engineering Intern',
    category: 'Meta',
    description:
      'Incoming Software Engineering Intern for Meta in Summer 2026 in Seattle, WA.',
  }
]

const strengths = [
  'Programming',
  'Machine Learning and Data Science',
  'Leadership',
  'Creative Problem Solving',
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Personal Website</p>
          <h1>
            Dominic Hoar-Weiler
          </h1>
          <p className="hero-text">
            Student-athlete at Carnegie Mellon University, pursuing a major in
            Statistics and Machine Learning with a minor in Computer Science. 
            Passionate about programming and uncovering data-driven insights.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-link">
              View selected work
            </a>
            <a href="#contact" className="secondary-link">
              Let&apos;s connect
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src={heroImg}
              alt="Abstract layered shapes used as the visual anchor for the homepage"
            />
          </div>
        </div>
      </section>

      <section className="section-grid" id="work">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Featured Projects.</h2>
        </div>

        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article className="info-card" key={project.title}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-preview"
                />
              )}
              <p className="card-kicker">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                {project.githubURL && (
                  <a href={project.githubURL} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      

      <section className="section-grid" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Internships, Jobs and Research Experience.</h2>
        </div>

        <div className="card-grid">
          {experiences.map((experience) => (
            <article className="info-card" key={experience.title}>
              <p className="card-kicker">{experience.category}</p>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-panel" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>My Story</h2>
          <p>
            I am a student-athlete at Carnegie Mellon University, serving as 
            the team captain of the Varsity Men's Soccer team. I am pursuing a 
            major in Statistics and Machine Learning with a minor in Computer 
            Science. My passion lies in programming and uncovering data-driven 
            insights that help shape decisions and drive innovation.
          </p>
          <p>
            With a strong interest in Data Science, Software Engineering, and 
            Sports Analytics, I am eager to apply my analytical skills and 
            technical expertise to real-world challenges. I am actively seeking 
            internship opportunities that allow me to leverage my 
            problem-solving abilities and leadership experience to make 
            meaningful contributions in these fields.
          </p>
        </div>

        <div className="strengths-panel">
          <p className="strengths-title">Good foundations for a first launch</p>
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

export default App

import { Link } from 'react-router-dom'
import matchPhoto from '../assets/Soccer Gallery Optimized/12-match.jpg'
import matchPhotoLarge from '../assets/optimized/night-match-2400.jpg'

export default function HomeHero() {
  return (
    <section className="hero-story" aria-labelledby="home-title">
      <div className="hero-panel">
        <div className="hero-photo">
          <img
            src={matchPhoto}
            srcSet={`${matchPhoto} 1800w, ${matchPhotoLarge} 2400w`}
            sizes="(max-width: 720px) 100vw, 73vw"
            alt="Dominic Hoar-Weiler running with the ball in a night match at Carnegie Mellon"
            fetchPriority="high"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-status">Carnegie Mellon · Student-athlete</p>
          <h1 id="home-title">
            Dominic <span>Hoar-Weiler</span>
          </h1>
          <p className="hero-lead">
            I build software and data tools for machine learning and sports
            analytics, and captain Carnegie Mellon men&apos;s soccer.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-work-link">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <Link to="/experience" className="secondary-link">
              Experience
            </Link>
          </div>

          <div className="hero-notes">
            <Link to="/soccer" className="hero-award">
              2026 First Team All-UAA <span aria-hidden="true">↗</span>
            </Link>
            <a href="#off-the-clock" className="hero-award">
              Off the clock <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

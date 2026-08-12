import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/soccer', label: 'Soccer' },
]

function SiteLayout() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="topbar">
        <div className="brand-lockup">
          <NavLink to="/" end className="brand-mark">
            Dominic Hoar-Weiler
          </NavLink>
          <p className="brand-submark">
            Machine learning, software, and sports.
          </p>
        </div>

        <nav className="topnav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'topnav-link is-active' : 'topnav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:dhoarwei@andrew.cmu.edu"
            className="topnav-link topnav-contact"
          >
            Contact
          </a>
        </nav>
      </header>

      <div className="route-view" id="main-content" key={location.pathname}>
        <Outlet />
      </div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-intro">
            <p className="eyebrow">Dominic Hoar-Weiler</p>
            <h2>Software, data, and sport.</h2>
            <p>
              Statistics and Machine Learning at Carnegie Mellon University,
              with a minor in Computer Science. Graduating May 2027.
            </p>
          </div>

          <nav className="footer-links" aria-label="Professional links">
            <a href="mailto:dhoarwei@andrew.cmu.edu">Email</a>
            <a
              href="https://linkedin.com/in/dominichoarweiler"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/domihw05"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://dominichoarweiler.com"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </nav>
        </div>

        <div className="footer-meta">
          <span>Pittsburgh, PA</span>
          <span>© 2026 Dominic Hoar-Weiler</span>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout

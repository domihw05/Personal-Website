import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/soccer', label: 'Soccer' },
]

function SiteLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" end className="brand-mark">
          Dominic Hoar-Weiler
        </NavLink>

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
          <a href="mailto:dominic.hoarweiler@gmail.com" className="topnav-link">
            Contact
          </a>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}

export default SiteLayout

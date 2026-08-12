import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import SiteLayout from './components/SiteLayout'
import ExperiencePage from './pages/ExperiencePage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SoccerPage from './pages/SoccerPage'

function MotionEffects() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotion.matches) {
      return undefined
    }

    document.documentElement.classList.add('motion-ready')

    const revealSelector = [
      '.hero-copy > *',
      '.hero-visual',
      '.section-heading',
      '.project-feature',
      '.timeline-card-link',
      '.about-copy > *',
      '.strengths-panel',
      '.home-hobby',
      '.contact-banner > *',
      '.page-header > *',
      '.soccer-panel > *',
      '.soccer-award-card',
      '.soccer-gallery-carousel',
    ].join(',')

    const elements = Array.from(document.querySelectorAll(revealSelector))
    let observer
    let animationFrame

    animationFrame = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '0px 0px -6% 0px',
          threshold: 0.08,
        },
      )

      elements.forEach((element, index) => {
        element.classList.add('motion-reveal')
        element.style.setProperty('--motion-delay', `${Math.min((index % 4) * 55, 165)}ms`)
        observer.observe(element)
      })
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer?.disconnect()
    }
  }, [location.hash, location.pathname])

  return null
}

function App() {
  return (
    <>
      <Analytics />
      <MotionEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/soccer" element={<SoccerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import SiteLayout from './components/SiteLayout'
import ExperiencePage from './pages/ExperiencePage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SoccerPage from './pages/SoccerPage'

function App() {
  return (
    <>
      <Analytics />
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

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Footer from './components/Footer'
import TopNav from './components/TopNav'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
      <TopNav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

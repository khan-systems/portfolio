import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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

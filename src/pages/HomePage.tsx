import Header from '../components/Header'
import MetricsBanner from '../components/MetricsBanner'
import CaseStudyCard from '../components/CaseStudyCard'
import HowIWork from '../components/HowIWork'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import { CaseStudy } from '../types/case-study'

// Import case studies
import fintechData from '../data/case-studies/fintech-loan-dashboard.json'
import designSystemData from '../data/case-studies/design-system-core.json'
import realEstateData from '../data/case-studies/real-estate-search-ui.json'

const caseStudies: CaseStudy[] = [
  fintechData as CaseStudy,
  designSystemData as CaseStudy,
  realEstateData as CaseStudy,
]

function HomePage() {
  return (
    <>
      <Header />
      <MetricsBanner caseStudies={caseStudies} />

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Work</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recent client projects demonstrating frontend architecture, performance optimization,
            and scalable solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <HowIWork />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default HomePage

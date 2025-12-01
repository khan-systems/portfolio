import Hero from '../components/Hero'
import KpiStrip from '../components/KpiStrip'
import ServicesSection from '../components/ServicesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
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
      <Hero caseStudies={caseStudies} />
      <KpiStrip />
      <ServicesSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ProcessTimeline />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default HomePage

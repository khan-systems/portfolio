import Hero from '../components/Hero'
import KpiStrip from '../components/KpiStrip'
import ServicesSection from '../components/ServicesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import { caseStudies } from '../data'

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

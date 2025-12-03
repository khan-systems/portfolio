import Hero from '../components/Hero'
import KpiStrip from '../components/KpiStrip'
import ServicesSection from '../components/ServicesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import CaseStudyHighlightsSection from '../components/CaseStudyHighlightsSection'
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
      <CaseStudyHighlightsSection />
      <ContactSection />
    </>
  )
}

export default HomePage

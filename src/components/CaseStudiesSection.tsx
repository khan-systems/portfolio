import { motion } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import { CaseStudy } from '../types/case-study'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Selected work
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Recent client projects demonstrating frontend architecture, performance optimization,
            and scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection

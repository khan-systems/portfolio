import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CaseStudy } from '../types/case-study'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index?: number
  featured?: boolean
}

function CaseStudyCard({ caseStudy, index = 0, featured = false }: CaseStudyCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  // Extract metrics from outcomes
  const extractMetric = (outcome: string) => {
    const match = outcome.match(/(\d+[%smx]?(?:\.\d+)?[smx]?)/)
    return match ? match[1] : null
  }

  const metrics = caseStudy.outcomes
    .map((outcome) => ({
      value: extractMetric(outcome),
      label: outcome.replace(/(\d+[%smx]?(?:\.\d+)?[smx]?)/, '').trim(),
    }))
    .filter((m) => m.value)
    .slice(0, 3)

  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              transition: { duration: 0.3 },
            }
      }
      className={`card card-hover overflow-hidden flex flex-col h-full ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Preview Image */}
      {caseStudy.screenshots[0] && (
        <div className={`${featured ? 'h-64' : 'h-48'} bg-neutral-200 dark:bg-neutral-700 overflow-hidden relative group`}>
          <img
            src={caseStudy.screenshots[0].path}
            alt={caseStudy.screenshots[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold text-primary dark:text-primary-400 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
            {caseStudy.duration}
          </span>
        </div>

        <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-neutral-900 dark:text-white mb-2`}>
          {caseStudy.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{caseStudy.subtitle}</p>

        {/* Metrics Grid */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-success/5 dark:bg-success/10 rounded-lg border border-success/20">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg md:text-xl font-bold text-success dark:text-success mb-1">
                  {metric.value}
                </div>
                <div className="text-2xs text-neutral-600 dark:text-neutral-400 leading-tight">
                  {metric.label.split(' ').slice(0, 3).join(' ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {caseStudy.stack.length > 4 && (
            <span className="px-2 py-1 text-neutral-500 dark:text-neutral-500 text-xs">
              +{caseStudy.stack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/case-study/${caseStudy.id}`}
          className="mt-auto inline-flex items-center text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-semibold transition-colors focus:outline-none focus:underline group"
          aria-label={`View case study: ${caseStudy.title}`}
        >
          View case study
          <svg
            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

export default CaseStudyCard

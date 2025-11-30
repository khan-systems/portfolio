import { Link } from 'react-router-dom'
import { CaseStudy } from '../types/case-study'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  // Extract a key metric from outcomes (first one)
  const keyMetric = caseStudy.outcomes[0] || 'Significant improvements delivered'

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full">
      {/* Preview Image */}
      {caseStudy.screenshots[0] && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={caseStudy.screenshots[0].path}
            alt={caseStudy.screenshots[0].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4">{caseStudy.subtitle}</p>

        {/* Key Metric */}
        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-gray-700">{keyMetric}</span>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {caseStudy.stack.length > 3 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{caseStudy.stack.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/case-study/${caseStudy.id}`}
          className="mt-auto inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold focus:outline-none focus:underline"
          aria-label={`View case study: ${caseStudy.title}`}
        >
          View case study
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default CaseStudyCard

import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { CaseStudy } from '../types/case-study'

// Import case studies
import fintechData from '../data/case-studies/fintech-loan-dashboard.json'
import designSystemData from '../data/case-studies/design-system-core.json'
import realEstateData from '../data/case-studies/real-estate-search-ui.json'

const caseStudiesMap: Record<string, CaseStudy> = {
  'fintech-loan-dashboard': fintechData as CaseStudy,
  'design-system-core': designSystemData as CaseStudy,
  'real-estate-search-ui': realEstateData as CaseStudy,
}

function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const caseStudy = id ? caseStudiesMap[id] : null

  useEffect(() => {
    // Update meta tags for SEO
    if (caseStudy) {
      document.title = `${caseStudy.title} - Junaid Khan`
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', caseStudy.subtitle)
      }
    }

    // Cleanup on unmount
    return () => {
      document.title = 'Junaid Khan - Frontend Architecture Consultant'
    }
  }, [caseStudy])

  if (!caseStudy) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/" className="text-primary-600 hover:text-primary-700 underline">
          Return to Home
        </Link>
      </div>
    )
  }

  const mailtoLink = `mailto:junaidkhan.engineering@gmail.com?subject=Private walkthrough request: ${caseStudy.title}`

  return (
    <article className="py-16">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          aria-label="Back to home"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{caseStudy.subtitle}</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-6">
            <div>
              <span className="font-semibold">Role:</span> {caseStudy.role}
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {caseStudy.duration}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudy.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.problem}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {/* Outcomes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
          <ul className="space-y-3">
            {caseStudy.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
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
                <span className="text-gray-700">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techHighlights.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        {caseStudy.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.screenshots.map((screenshot, index) => (
                <figure key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={screenshot.path}
                    alt={screenshot.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-4 text-sm text-gray-600">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Request a private walkthrough of this project, including architecture decisions, code
            samples, and implementation details.
          </p>
          <a
            href={mailtoLink}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Request Private Walkthrough
          </a>
          {caseStudy.privateRepoInvite && (
            <p className="mt-4 text-sm text-gray-600">
              Note: {caseStudy.privateRepoInvite}
            </p>
          )}
        </section>
      </div>
    </article>
  )
}

export default CaseStudyPage

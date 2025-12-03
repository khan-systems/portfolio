import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getCaseStudyById } from '../data'

function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const caseStudy = getCaseStudyById(id || '')

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
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
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Case Study Not Found</h1>
        <Link to="/" className="text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 underline">
          Return to Home
        </Link>
      </div>
    )
  }

  const mailtoLink = `mailto:junaidkhan.engineering@gmail.com?subject=Private walkthrough request: ${caseStudy.title}`

  return (
    <article className="py-16 pt-24">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-8 transition-colors"
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
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">{caseStudy.subtitle}</p>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-700 dark:text-neutral-300 mb-6">
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
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Problem</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{caseStudy.problem}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Solution</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {/* Outcomes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Key Outcomes</h2>
          <ul className="space-y-3">
            {caseStudy.outcomes.map((outcome, index) => {
              // Handle both string and object outcomes
              const isObject = typeof outcome === 'object' && outcome !== null
              const displayText = isObject 
                ? `${outcome.metric}: ${outcome.value} - ${outcome.description}`
                : outcome
              
              return (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-success dark:text-success mr-3 flex-shrink-0"
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
                  <span className="text-neutral-700 dark:text-neutral-300">{displayText}</span>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Tech Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Technical Highlights</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techHighlights.map((tech, index) => {
              // Handle both string and object tech highlights
              const isObject = typeof tech === 'object' && tech !== null
              const displayText = isObject ? (tech.title || tech.name || String(tech)) : tech
              const description = isObject && tech.description ? tech.description : undefined
              
              return (
                <span
                  key={index}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm font-medium"
                  title={description}
                >
                  {displayText}
                </span>
              )
            })}
          </div>
        </section>

        {/* Screenshots */}
        {caseStudy.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Screenshots</h2>
            <div className="space-y-8">
              {/* Check if we should group desktop and mobile screenshots */}
              {caseStudy.screenshots.some(s => s.caption?.toLowerCase().includes('mobile')) ? (
                <>
                  {/* Desktop screenshots in a row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.screenshots
                      .filter(s => !s.caption?.toLowerCase().includes('mobile'))
                      .map((screenshot, index) => (
                        <figure key={index} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
                          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center min-h-[200px] max-h-[400px]">
                            <img
                              src={screenshot.path}
                              alt={screenshot.alt}
                              className="w-auto h-auto max-w-full max-h-[350px] object-contain"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="p-4 text-sm text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                            {screenshot.caption}
                          </figcaption>
                        </figure>
                      ))}
                  </div>
                  
                  {/* Mobile screenshots below */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.screenshots
                      .filter(s => s.caption?.toLowerCase().includes('mobile'))
                      .map((screenshot, index) => (
                        <figure key={index} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
                          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center min-h-[200px] max-h-[500px]">
                            <img
                              src={screenshot.path}
                              alt={screenshot.alt}
                              className="w-auto h-auto max-w-full max-h-[450px] object-contain"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="p-4 text-sm text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                            {screenshot.caption}
                          </figcaption>
                        </figure>
                      ))}
                  </div>
                </>
              ) : (
                /* Default grid layout for case studies without mobile screenshots */
                <div className="grid md:grid-cols-2 gap-8">
                  {caseStudy.screenshots.map((screenshot, index) => (
                    <figure key={index} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
                      <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center min-h-[200px] max-h-[400px]">
                        <img
                          src={screenshot.path}
                          alt={screenshot.alt}
                          className="w-auto h-auto max-w-full max-h-[350px] object-contain"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="p-4 text-sm text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                        {screenshot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary/5 dark:bg-primary/10 rounded-lg p-8 text-center border border-primary/20 dark:border-primary/30">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Want to Learn More?</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Request a private walkthrough of this project, including architecture decisions, code
            samples, and implementation details.
          </p>
          <a
            href={mailtoLink}
            className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Request Private Walkthrough
          </a>
          {caseStudy.privateRepoInvite && (
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Note: {caseStudy.privateRepoInvite}
            </p>
          )}
        </section>
      </div>
    </article>
  )
}

export default CaseStudyPage

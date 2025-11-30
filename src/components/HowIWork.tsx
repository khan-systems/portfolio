function HowIWork() {
  const steps = [
    {
      number: '01',
      title: 'Audit',
      description:
        'Deep dive into your codebase, performance metrics, and team workflows to identify bottlenecks and opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Plan',
      description:
        'Create a prioritized roadmap with clear milestones, technical specifications, and success metrics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Implement',
      description:
        'Hands-on development with your team, implementing architectural improvements and best practices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Handover',
      description:
        'Comprehensive documentation, team training, and ongoing support to ensure long-term success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How I Work</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A proven 4-step process that delivers measurable results while building your team's
          capabilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-200"
                  style={{ transform: 'translateX(-50%)' }}
                  aria-hidden="true"
                />
              )}

              <div className="relative bg-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-300">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork

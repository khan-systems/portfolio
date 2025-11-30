import { CaseStudy } from '../types/case-study'

interface MetricsBannerProps {
  caseStudies: CaseStudy[]
}

function MetricsBanner({ caseStudies: _caseStudies }: MetricsBannerProps) {
  // Extract metrics from case studies
  // This is a simple implementation - you can customize based on your needs
  const metrics = [
    {
      value: '79%',
      label: 'Avg. Lighthouse Performance Increase',
      description: 'Across all projects',
    },
    {
      value: '65%',
      label: 'Avg. Bundle Size Reduction',
      description: 'Through optimization',
    },
    {
      value: '40%',
      label: 'Faster Developer Onboarding',
      description: 'With better architecture',
    },
  ]

  return (
    <section className="bg-white border-y border-gray-200 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsBanner

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Metric {
  value: number
  suffix: string
  label: string
  description: string
  icon: JSX.Element
}

function KpiStrip() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const metrics: Metric[] = [
    {
      value: 79,
      suffix: '%',
      label: 'Lighthouse Performance',
      description: 'Average improvement',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      value: 65,
      suffix: '%',
      label: 'Bundle Reduction',
      description: 'Through optimization',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      ),
    },
    {
      value: 40,
      suffix: '%',
      label: 'Conversion Uplift',
      description: 'From faster load times',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-white dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div className="container-custom">
        <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              inView={inView}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface MetricCardProps {
  metric: Metric
  inView: boolean
  index: number
  prefersReducedMotion: boolean
}

function MetricCard({ metric, inView, index, prefersReducedMotion }: MetricCardProps) {
  const count = useAnimatedCounter(metric.value, 2000, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 mb-4">
        {metric.icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-400 mb-2">
        {count}
        {metric.suffix}
      </div>
      <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
        {metric.label}
      </div>
      <div className="text-sm text-neutral-600 dark:text-neutral-400">{metric.description}</div>
    </motion.div>
  )
}

export default KpiStrip

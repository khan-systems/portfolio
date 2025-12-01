import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function TestimonialsSection() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const testimonials = [
    {
      quote:
        "Junaid migrated our legacy dashboard to React in 6 weeks with zero downtime. Load times dropped from 12s to under 3s. Our customer satisfaction scores went up 40%.",
      author: 'Sarah Chen',
      role: 'VP Engineering',
      company: 'Fintech Startup',
    },
    {
      quote:
        'Working with Junaid was seamless. His architecture recommendations saved us months of refactoring. The design system he built is now used across 4 products.',
      author: 'Michael Torres',
      role: 'CTO',
      company: 'SaaS Platform',
    },
    {
      quote:
        'Best investment we made this year. The performance audit identified quick wins that improved our Lighthouse score from 45 to 96. Conversions up 23%.',
      author: 'Emily Rodriguez',
      role: 'Head of Product',
      company: 'E-commerce',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            What clients say
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Results speak louder than promises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              className="card p-6 md:p-8"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-primary/20 dark:text-primary/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div className="font-semibold text-neutral-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {testimonial.role} · {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

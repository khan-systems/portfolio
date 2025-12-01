import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Brief:\n${formData.project}`
    )
    
    window.location.href = `mailto:junaidkhan.engineering@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-neutral-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              Start with a 60-minute paid audit or book a free 15-minute intro call.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Book audit CTA */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                60-min Architecture Audit
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Get actionable recommendations on performance, scalability, and code quality.
              </p>
              <div className="text-3xl font-bold text-primary dark:text-primary-400 mb-6">$90</div>
              <a
                href="https://calendly.com/junaidkhan-engineering/60-min-architecture-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book now
              </a>
            </motion.div>

            {/* Free intro call */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.1 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                15-min Intro Call
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Quick chat to see if we're a good fit for your project. No obligation.
              </p>
              <div className="text-3xl font-bold text-accent dark:text-accent-400 mb-6">Free</div>
              <a
                href="https://calendly.com/junaidkhan-engineering/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Schedule call
              </a>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 text-center">
              Or send a message
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
              Tell me about your project and I'll get back within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2"
                >
                  Project brief (max 300 characters)
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  maxLength={300}
                  rows={4}
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project goals, tech stack, and timeline..."
                />
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 text-right">
                  {formData.project.length}/300
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Send message
              </button>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                This will open your email client. Alternatively, email me directly at{' '}
                <a
                  href="mailto:junaidkhan.engineering@gmail.com"
                  className="text-primary dark:text-primary-400 hover:underline"
                >
                  junaidkhan.engineering@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

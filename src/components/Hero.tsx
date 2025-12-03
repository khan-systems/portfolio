import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface HeroProps {
  caseStudies: Array<{ screenshots: Array<{ path: string; alt: string }> }>
}

function Hero({ caseStudies }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,98,254,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(15,98,254,0.15),transparent_50%)] -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight text-balance"
            >
              I build fast, maintainable frontends and design systems that scale
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed"
            >
              Reduce load times, simplify developer DX, and ship predictable UI.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/junaidkhan-engineering/60-min-architecture-audit"
                className="btn-primary text-lg text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 60-minute architecture session
              </a>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="btn-secondary text-lg"
              >
                View case studies
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
            className="relative device-mockup hidden lg:block"
          >
            <motion.div
              animate={{
                y: prefersReducedMotion ? 0 : [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Stacked cards mockup */}
              <div className="relative h-auto max-w-sm mx-auto pt-0">
                {caseStudies.slice(0, 3).map((study, index) => {
                  const screenshot = study.screenshots[0]
                  const zIndex = 30 - index * 10
                  const rotate = index === 0 ? -5 : index === 1 ? 5 : 0
                  const yOffset = index * 45

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: yOffset }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.6,
                        delay: prefersReducedMotion ? 0 : 0.4 + index * 0.1,
                      }}
                      style={{
                        zIndex,
                        transform: `rotate(${rotate}deg)`,
                      }}
                      className="absolute inset-x-0 device-frame"
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : {
                              scale: 1.08,
                              rotate: 0,
                              y: yOffset - 10,
                              zIndex: 50,
                              transition: { duration: 0.3 },
                            }
                      }
                    >
                      <div className="bg-white dark:bg-neutral-800 p-1.5 rounded-lg shadow-2xl">
                        <div className="aspect-video bg-neutral-100 dark:bg-neutral-700 rounded overflow-hidden">
                          {screenshot && (
                            <img
                              src={screenshot.path}
                              alt={screenshot.alt}
                              className="w-full h-full object-contain p-1"
                              loading="eager"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

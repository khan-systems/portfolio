import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Service {
  icon: JSX.Element
  title: string
  description: string
  price: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
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
      className="card card-hover p-6 md:p-8"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400">
          {service.icon}
        </div>
        <span className="text-sm font-semibold text-accent dark:text-accent-400 bg-accent/10 dark:bg-accent/20 px-3 py-1 rounded-full">
          {service.price}
        </span>
      </div>

      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
        {service.title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default ServiceCard

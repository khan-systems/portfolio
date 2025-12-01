import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      // Check if we're on the home page
      const currentPath = window.location.pathname
      const isHomePage = currentPath === '/' || currentPath === '/portfolio/' || currentPath === '/portfolio'
      
      if (isHomePage) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to home page with hash
        const basePath = currentPath.includes('/portfolio') ? '/portfolio/' : '/'
        window.location.href = `${basePath}#${id}`
      }
    }, 100)
  }

  const navItems = [
    { label: 'Work', id: 'case-studies' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={false}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'shadow-glass backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-xl md:text-2xl font-bold text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            JK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-400 font-medium transition-colors focus:outline-none focus:underline"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Work with me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-neutral-700 dark:text-neutral-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              className="md:hidden border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    type="button"
                    className="block w-full text-left px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default TopNav

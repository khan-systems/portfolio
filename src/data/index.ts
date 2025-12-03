/**
 * Data Index
 * 
 * Dynamically imports all case studies from the case-studies folder
 * and exports them as an array for use throughout the portfolio.
 */

import { CaseStudy } from '../types/case-study'

// Use Vite's import.meta.glob to dynamically import all JSON files
const caseStudyModules = import.meta.glob<{ default: CaseStudy }>('./case-studies/*.json', { 
  eager: true 
})

// Extract the case studies from the modules and sort by a default order
export const caseStudies: CaseStudy[] = Object.values(caseStudyModules)
  .map(module => module.default)
  .sort((a, b) => {
    // Define a custom order if needed
    const order = [
      'fintech-loan-dashboard',
      'design-system-demo', 
      'real-estate-search-demo'
    ]
    
    const indexA = order.indexOf(a.id)
    const indexB = order.indexOf(b.id)
    
    // If both are in the order array, sort by that
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }
    
    // If only one is in the order, prioritize it
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1
    
    // Otherwise, sort alphabetically by title
    return a.title.localeCompare(b.title)
  })

// Helper function to get a case study by ID
export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id)
}

// Helper function to get a case study by slug (if different from ID)
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  // For now, slug === id, but this allows for future flexibility
  return caseStudies.find(cs => cs.id === slug)
}

// Export count for easy access
export const caseStudyCount = caseStudies.length

// Log loaded case studies in development
if (import.meta.env.DEV) {
  console.log(`📚 Loaded ${caseStudyCount} case studies:`, caseStudies.map(cs => cs.id))
}

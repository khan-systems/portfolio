/**
 * Sync Case Studies Script
 * 
 * Automatically syncs case study JSON files and screenshots from demo projects
 * into the portfolio project for seamless integration.
 * 
 * This script is idempotent - running it multiple times produces the same result.
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname, basename, extname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const portfolioRoot = join(__dirname, '..')

// Configuration: Map demo folders to their IDs
const DEMOS = [
  { 
    id: 'fintech-loan-dashboard', 
    path: join(portfolioRoot, '..', 'fintech-loan-dashboard-demo'),
    displayName: 'Fintech Loan Dashboard'
  },
  { 
    id: 'design-system-demo', 
    path: join(portfolioRoot, '..', 'design-system-demo'),
    displayName: 'Design System Core'
  },
  { 
    id: 'real-estate-search-demo', 
    path: join(portfolioRoot, '..', 'real-estate-search-demo'),
    displayName: 'Real Estate Search UI'
  }
]

// Output directories
const CASE_STUDIES_DIR = join(portfolioRoot, 'src', 'data', 'case-studies')
const SCREENSHOTS_DIR = join(portfolioRoot, 'public', 'assets', 'screenshots')

// Ensure output directories exist
mkdirSync(CASE_STUDIES_DIR, { recursive: true })
mkdirSync(SCREENSHOTS_DIR, { recursive: true })

// Normalize filename: lowercase, hyphenated, no spaces
function normalizeFilename(filename) {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_.]/g, '')
}

// Get safe filename with demo ID prefix
function getSafeFilename(demoId, originalFilename) {
  const ext = extname(originalFilename)
  const name = basename(originalFilename, ext)
  const normalized = normalizeFilename(name)
  
  // If filename already starts with demo prefix, don't duplicate
  if (normalized.startsWith(demoId.toLowerCase())) {
    return normalized + ext
  }
  
  return `${demoId.toLowerCase()}-${normalized}${ext}`
}

// Copy screenshots and return mapping of old path to new path
function copyScreenshots(demo) {
  const screenshotsPath = join(demo.path, 'public', 'assets', 'screenshots')
  
  if (!existsSync(screenshotsPath)) {
    console.warn(`  ⚠️  No screenshots folder found at ${screenshotsPath}`)
    return {}
  }

  const files = readdirSync(screenshotsPath)
  const mapping = {}
  let copiedCount = 0

  files.forEach(file => {
    if (!file.match(/\.(png|jpg|jpeg|webp|gif)$/i)) {
      return // Skip non-image files
    }

    const sourcePath = join(screenshotsPath, file)
    const safeFilename = getSafeFilename(demo.id, file)
    const destPath = join(SCREENSHOTS_DIR, safeFilename)

    // Copy file
    copyFileSync(sourcePath, destPath)
    copiedCount++

    // Store mapping for updating JSON paths
    // Use /portfolio/ prefix if configured in vite.config.ts
    mapping[file] = `/portfolio/assets/screenshots/${safeFilename}`
  })

  console.log(`  📸 Copied ${copiedCount} screenshot(s)`)
  return mapping
}

// Update screenshot paths in case study JSON
function updateScreenshotPaths(caseStudy, pathMapping) {
  if (!caseStudy.screenshots || !Array.isArray(caseStudy.screenshots)) {
    return caseStudy
  }

  caseStudy.screenshots = caseStudy.screenshots.map(screenshot => {
    // Handle both 'path' and 'url' fields (normalize to 'path')
    const screenshotPath = screenshot.path || screenshot.url
    
    if (!screenshotPath || typeof screenshotPath !== 'string') {
      console.warn('  ⚠️  Screenshot missing path/url:', screenshot)
      return screenshot
    }

    const originalFilename = basename(screenshotPath)
    
    // Check if we have a mapping for this file
    if (pathMapping[originalFilename]) {
      return {
        ...screenshot,
        path: pathMapping[originalFilename],
        url: undefined // Remove url field if it exists
      }
    }

    // Check if the path already points to our screenshots folder
    if (screenshotPath.startsWith('/assets/screenshots/') || screenshotPath.startsWith('/portfolio/assets/screenshots/')) {
      // Update to use correct base path
      const filename = basename(screenshotPath)
      return {
        ...screenshot,
        path: `/portfolio/assets/screenshots/${filename}`,
        url: undefined // Remove url field if it exists
      }
    }

    // Try to find the file by normalized name
    const safeFilename = getSafeFilename('', originalFilename)
    const possiblePath = `/portfolio/assets/screenshots/${safeFilename}`
    
    return {
      ...screenshot,
      path: possiblePath
    }
  })

  return caseStudy
}

// Process a single demo
function processDemo(demo) {
  console.log(`\n📦 Processing: ${demo.displayName}`)
  console.log(`  ID: ${demo.id}`)
  console.log(`  Path: ${demo.path}`)

  // Check if demo folder exists
  if (!existsSync(demo.path)) {
    console.error(`  ❌ Demo folder not found: ${demo.path}`)
    return { success: false, screenshotCount: 0 }
  }

  // Find case study JSON
  const possiblePaths = [
    join(demo.path, 'src', 'data', 'case-study.json'),
    join(demo.path, 'src', 'case-study.json'),
    join(demo.path, 'case-study.json')
  ]

  let caseStudyPath = null
  for (const path of possiblePaths) {
    if (existsSync(path)) {
      caseStudyPath = path
      break
    }
  }

  if (!caseStudyPath) {
    console.error(`  ❌ No case-study.json found in ${demo.path}`)
    return { success: false, screenshotCount: 0 }
  }

  console.log(`  ✓ Found case study JSON`)

  // Read case study JSON
  let caseStudy
  try {
    const content = readFileSync(caseStudyPath, 'utf-8')
    caseStudy = JSON.parse(content)
  } catch (error) {
    console.error(`  ❌ Error reading JSON: ${error.message}`)
    return { success: false, screenshotCount: 0 }
  }

  // Ensure the case study has the correct ID
  if (!caseStudy.id) {
    caseStudy.id = demo.id
    console.log(`  ⚠️  Added missing ID: ${demo.id}`)
  } else if (caseStudy.id !== demo.id) {
    console.log(`  ⚠️  ID mismatch: ${caseStudy.id} → ${demo.id} (using config ID)`)
    caseStudy.id = demo.id
  }

  // Copy screenshots
  const pathMapping = copyScreenshots(demo)
  const screenshotCount = Object.keys(pathMapping).length

  // Update screenshot paths in JSON
  caseStudy = updateScreenshotPaths(caseStudy, pathMapping)

  // Write updated JSON to portfolio
  const outputPath = join(CASE_STUDIES_DIR, `${demo.id}.json`)
  writeFileSync(outputPath, JSON.stringify(caseStudy, null, 2))
  console.log(`  ✓ Saved to: ${basename(outputPath)}`)

  return { success: true, screenshotCount }
}

// Main execution
console.log('╔══════════════════════════════════════════════════════════════╗')
console.log('║          SYNC CASE STUDIES & SCREENSHOTS                    ║')
console.log('╚══════════════════════════════════════════════════════════════╝')
console.log()

const results = {
  total: DEMOS.length,
  successful: 0,
  failed: 0,
  totalScreenshots: 0
}

DEMOS.forEach(demo => {
  const result = processDemo(demo)
  if (result.success) {
    results.successful++
    results.totalScreenshots += result.screenshotCount
  } else {
    results.failed++
  }
})

// Print summary
console.log('\n╔══════════════════════════════════════════════════════════════╗')
console.log('║                        SUMMARY                               ║')
console.log('╚══════════════════════════════════════════════════════════════╝')
console.log()
console.log(`✅ Successful: ${results.successful}/${results.total}`)
if (results.failed > 0) {
  console.log(`❌ Failed: ${results.failed}`)
}
console.log(`📸 Total screenshots copied: ${results.totalScreenshots}`)
console.log(`📁 Case studies: ${CASE_STUDIES_DIR}`)
console.log(`📁 Screenshots: ${SCREENSHOTS_DIR}`)
console.log()

if (results.successful > 0) {
  console.log('🎉 Sync complete! Run `pnpm dev` to see your updated portfolio.')
} else {
  console.log('⚠️  No case studies were synced. Check the paths in the script.')
  process.exit(1)
}

export interface Screenshot {
  path: string
  caption: string
  alt: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  role: string
  duration: string
  stack: string[]
  problem: string
  solution: string
  outcomes: string[]
  techHighlights: string[]
  screenshots: Screenshot[]
  demoLink: string | null
  privateRepoInvite: string | null
}

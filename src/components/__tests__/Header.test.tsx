import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

// Mock data for Hero component
const mockCaseStudies = [
  {
    id: 'test-1',
    title: 'Test Case Study',
    subtitle: 'Test Subtitle',
    screenshots: [{ path: '/test.png', alt: 'Test image', caption: 'Test' }],
    role: 'Test Role',
    duration: '4 weeks',
    stack: ['React', 'TypeScript'],
    problem: 'Test problem',
    solution: 'Test solution',
    outcomes: ['Test outcome'],
    techHighlights: ['Test highlight'],
    demoLink: null,
    privateRepoInvite: null,
  },
]

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero caseStudies={mockCaseStudies} />)
    expect(
      screen.getByText(/I build fast, maintainable frontends and design systems that scale/i)
    ).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero caseStudies={mockCaseStudies} />)
    const ctaButton = screen.getByText(/Book a 60-minute architecture session/i)
    expect(ctaButton).toBeInTheDocument()
    
    const secondaryCta = screen.getByText(/View case studies/i)
    expect(secondaryCta).toBeInTheDocument()
  })

  it('renders the subheadline', () => {
    render(<Hero caseStudies={mockCaseStudies} />)
    expect(
      screen.getByText(/Reduce load times, simplify developer DX/i)
    ).toBeInTheDocument()
  })
})

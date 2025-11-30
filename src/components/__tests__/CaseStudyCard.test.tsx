import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CaseStudyCard from '../CaseStudyCard'
import { CaseStudy } from '../../types/case-study'

const mockCaseStudy: CaseStudy = {
  id: 'test-case',
  title: 'Test Project',
  subtitle: 'A test project subtitle',
  role: 'Lead Developer',
  duration: '4 weeks',
  stack: ['React', 'TypeScript', 'Vite'],
  problem: 'Test problem description',
  solution: 'Test solution description',
  outcomes: ['Improved performance by 50%', 'Reduced bugs by 30%'],
  techHighlights: ['React', 'TypeScript'],
  screenshots: [
    {
      path: '/test.png',
      caption: 'Test screenshot',
      alt: 'Test alt text',
    },
  ],
  demoLink: null,
  privateRepoInvite: null,
}

describe('CaseStudyCard', () => {
  it('renders the case study title and subtitle', () => {
    render(
      <BrowserRouter>
        <CaseStudyCard caseStudy={mockCaseStudy} />
      </BrowserRouter>
    )

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project subtitle')).toBeInTheDocument()
  })

  it('displays the first outcome as key metric', () => {
    render(
      <BrowserRouter>
        <CaseStudyCard caseStudy={mockCaseStudy} />
      </BrowserRouter>
    )

    expect(screen.getByText('Improved performance by 50%')).toBeInTheDocument()
  })

  it('renders tech stack tags', () => {
    render(
      <BrowserRouter>
        <CaseStudyCard caseStudy={mockCaseStudy} />
      </BrowserRouter>
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })

  it('has a link to the case study page', () => {
    render(
      <BrowserRouter>
        <CaseStudyCard caseStudy={mockCaseStudy} />
      </BrowserRouter>
    )

    const link = screen.getByRole('link', { name: /View case study: Test Project/i })
    expect(link).toHaveAttribute('href', '/case-study/test-case')
  })
})

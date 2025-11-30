import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the copyright notice with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    const githubLink = screen.getByLabelText('GitHub')
    const emailLink = screen.getByLabelText('Email')

    expect(githubLink).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })

  it('renders email contact link', () => {
    render(<Footer />)
    const emailLink = screen.getByText('Email Me')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:junaidkhan.engineering@gmail.com')
  })
})

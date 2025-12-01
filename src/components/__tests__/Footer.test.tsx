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

    const githubLink = screen.getByText('GitHub')
    const emailLink = screen.getByText('Email')

    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/junaidkhan-engineering')
    expect(emailLink).toBeInTheDocument()
  })

  it('renders email contact link', () => {
    render(<Footer />)
    const emailLink = screen.getByText('Email')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:junaidkhan.engineering@gmail.com')
  })

  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('JK')).toBeInTheDocument()
  })
})

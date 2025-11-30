import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

describe('Header', () => {
  it('renders the main heading', () => {
    render(<Header />)
    expect(
      screen.getByText(/Frontend architecture that scales with your business/i)
    ).toBeInTheDocument()
  })

  it('renders the CTA button with correct text', () => {
    render(<Header />)
    const ctaButton = screen.getByRole('link', {
      name: /Book a 60-minute architecture session/i,
    })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href')
  })

  it('renders the email link', () => {
    render(<Header />)
    const emailLink = screen.getByText(/junaidkhan.engineering@gmail.com/i)
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })
})

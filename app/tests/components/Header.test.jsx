// tests/components/Header.test.jsx
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header Component', () => {
  it('contains navigation links', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Certificate')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
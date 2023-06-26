import React from 'react'
import { render, screen } from '@testing-library/react'
import { Create, Edit, Home } from '..'

test('Renders Home react page', () => {
  render(<Home />)
  const textElement = screen.getByText(/Home page/i)
  expect(textElement).toBeInTheDocument()
})

test('Renders Create react page', () => {
  render(<Create />)
  const textElement = screen.getByText(/Create page/i)
  expect(textElement).toBeInTheDocument()
})

test('Renders Edit react page', () => {
  render(<Edit />)
  const textElement = screen.getByText(/Edit page/i)
  expect(textElement).toBeInTheDocument()
})

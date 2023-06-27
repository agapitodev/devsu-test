import {
  screen,
  renderWithProviders,
  renderWithProvidersandRouter
} from '../../test-utils'
import { Create, Edit, Home, router } from '..'
import userEvent from '@testing-library/user-event'
import { RouterProvider } from 'react-router-dom'

describe('Renders all routes', () => {
  test('Renders Home react page', () => {
    renderWithProvidersandRouter(<Home />)
    const textElement = screen.getByText(/resultados/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders Create react page', () => {
    renderWithProvidersandRouter(<Create />)
    const textElement = screen.getByText(/Create page/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders Edit react page', () => {
    renderWithProvidersandRouter(<Edit />)
    const textElement = screen.getByText(/Edit page/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Navigate between routes', () => {
  test('Redirect to Create page', async () => {
    renderWithProviders(<RouterProvider router={router} />)
    const user = userEvent.setup()

    await user.click(screen.getByText(/Agregar/i))

    const textElement = screen.getByText(/Create page/i)
    expect(textElement).toBeInTheDocument()
  })
})

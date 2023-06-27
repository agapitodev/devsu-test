import { screen, renderWithProviders, renderWithRouter } from '../../test-utils'
import { AppRouter } from '..'
import { MemoryRouter } from 'react-router-dom'

describe('Renders all routes', () => {
  test('Renders Home react page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    )
    const textElement = screen.getByText(/resultados/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders Create react page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/create']}>
        <AppRouter />
      </MemoryRouter>
    )
    const textElement = screen.getByText(/Formulario de Registro/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders Edit react page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/edit']}>
        <AppRouter />
      </MemoryRouter>
    )
    const textElement = screen.getByText(/Edit page/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Navigate between routes', () => {
  test('Redirect to Create page', async () => {
    const { user } = renderWithRouter(<AppRouter />)

    await user.click(screen.getByText(/Agregar/i))

    const textElement = screen.getByText(/Formulario de Registro/i)
    expect(textElement).toBeInTheDocument()
  })
})

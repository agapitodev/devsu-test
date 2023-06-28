import {
  screen,
  renderWithProviders,
  renderWithRouter,
  act
} from '../../test-utils'
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
    const textElement = screen.getByText(/Formulario de Edición/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Navigate between routes', () => {
  test('Redirect to Create page', async () => {
    const { user } = renderWithRouter(<AppRouter />)

    await act(async () => {
      await user.click(screen.getByText(/Agregar/i))
    })

    const textElement = screen.getByText(/Formulario de Registro/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Redirect to Edit page', async () => {
    const { user } = renderWithRouter(<AppRouter />)

    await act(async () => {
      await user.click(screen.getAllByRole('menu')[0])
    })
    await act(async () => {
      await user.click(screen.getByText(/Editar/i))
    })

    const textElement = screen.getByText(/Formulario de Edición/i)
    expect(textElement).toBeInTheDocument()
  })
})

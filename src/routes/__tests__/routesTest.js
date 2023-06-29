import {
  screen,
  renderWithProviders,
  renderWithRouter,
  act,
  waitFor
} from '../../test-utils'
import { AppRouter } from '..'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../services/ProductService')

describe('Renders all routes', () => {
  test('Renders Home react page', async () => {
    await act(async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      )
    })

    await waitFor(() => {
      expect(screen.getByText(/Primer producto/i)).toBeInTheDocument()
    })
    expect(screen.getByText(/resultados/i)).toBeInTheDocument()
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

  test('Renders Edit react page', async () => {
    await act(async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/edit/id-exist']}>
          <AppRouter />
        </MemoryRouter>
      )
    })
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

    await waitFor(() => {
      expect(screen.getByText(/Primer producto/i)).toBeInTheDocument()
    })
    await act(async () => {
      await user.click(screen.getAllByRole('menu')[12])
    })
    await act(async () => {
      await user.click(screen.getByText(/Editar/i))
    })

    const textElement = screen.getByText(/Formulario de Edición/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Redirect to Not Found Product', async () => {
    const { user } = renderWithRouter(<AppRouter />)

    await waitFor(() => {
      expect(screen.getByText(/Primer producto/i)).toBeInTheDocument()
    })
    await act(async () => {
      await user.click(screen.getAllByRole('menu')[10])
    })
    await act(async () => {
      await user.click(screen.getByText(/Editar/i))
    })

    const textElement = screen.getByText(/ERROR 404/i)
    expect(textElement).toBeInTheDocument()
  })
})

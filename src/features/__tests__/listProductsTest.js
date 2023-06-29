import {
  screen,
  renderWithRouter,
  act,
  waitFor,
  fireEvent
} from '../../test-utils'
import { ProductsTable } from '../listProducts'

jest.mock('../../services/ProductService')

describe('List Products Feature', () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithRouter(<ProductsTable />)
    })

    await waitFor(() => {
      expect(screen.getByText(/Primer producto/i)).toBeInTheDocument()
    })
  })

  test('Fill table with data', async () => {
    expect(screen.getByText(/13 resultados/i)).toBeInTheDocument()
  })

  test('Filter products', async () => {
    const input = screen.getByLabelText('search')
    fireEvent.change(input, { target: { value: 'Primero' } })
    expect(screen.getByText(/1 resultado/i)).toBeInTheDocument()
  })

  test('Table pagination', async () => {
    // select 5 items per page and check next button is rendered
    const select = screen.getByLabelText('per-page')
    act(() => {
      fireEvent.change(select, { target: { value: 5 } })
    })
    const nextButton = screen.getByLabelText('next-button')
    expect(nextButton).toBeInTheDocument()

    // go to second page and check prev button is rendered
    act(() => {
      fireEvent.click(nextButton)
    })
    const prevButton = screen.getByLabelText('prev-button')
    expect(prevButton).toBeInTheDocument()

    // go to last page and check next button is not rendered
    act(() => {
      fireEvent.click(nextButton)
    })
    expect(nextButton).not.toBeInTheDocument()

    // got to second page and check Sexto producto is in the table
    act(() => {
      fireEvent.click(prevButton)
    })
    expect(screen.getByText(/Sexto producto/i)).toBeInTheDocument()
  })

  test('Delete a product', async () => {
    act(() => {
      fireEvent.click(screen.getAllByRole('menu')[0])
      fireEvent.click(document.body)
      fireEvent.click(screen.getAllByRole('menu')[0])
    })

    expect(screen.getByText(/Eliminar/i)).toBeInTheDocument()
  })
})

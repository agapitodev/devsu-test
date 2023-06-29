import userEvent from '@testing-library/user-event'
import { screen, renderWithRouter, act, waitFor } from '../../test-utils'
import { CreateProductForm } from '../createProduct'
import { productService } from '../../services'

jest.mock('../../services')

describe('Create Product', () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithRouter(<CreateProductForm />)
    })

    await waitFor(() => {
      expect(screen.getByText(/Formulario de Registro/i)).toBeInTheDocument()
    })
  })

  test('Use invalid ID', async () => {
    const user = userEvent.setup()

    await act(async () => {
      await user.type(screen.getByLabelText('id'), 'id-exist')
      await user.click(screen.getByLabelText('submit'))
    })

    expect(productService.createProduct).not.toHaveBeenCalled()
  })

  test('Use invalid Name', async () => {
    const user = userEvent.setup()

    await act(async () => {
      await user.type(screen.getByLabelText('name'), 'C')
      await user.click(screen.getByLabelText('submit'))
    })

    expect(productService.createProduct).not.toHaveBeenCalled()
  })

  test('Fill form', async () => {
    const user = userEvent.setup()

    await act(async () => {
      await user.type(screen.getByLabelText('id'), 'xxx-111')
      await user.type(screen.getByLabelText('name'), 'Nuevo nombre')
      await user.type(
        screen.getByLabelText('description'),
        'Descripcion suficientemente larga'
      )
    })

    const submit = screen.getByLabelText('submit')
    await act(async () => {
      await user.click(submit)
    })

    expect(productService.createProduct).not.toHaveBeenCalled()

    await act(async () => {
      await user.type(screen.getByLabelText('logo'), 'image.png')
      await user.type(screen.getByLabelText('date_release'), '13/12/2031')
    })

    expect(submit.getAttribute('disabled')).toBe(null)

    await act(async () => {
      await user.click(submit)
    })
    expect(productService.createProduct).toHaveBeenCalled()
  })
})

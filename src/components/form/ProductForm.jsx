import { addYears, format, isValid, parse } from 'date-fns'
import { Button, Form, TextField, InputMask } from '../ui'
import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { validField, validForm } from './ProductFormValidator'
import { productService } from '../../services'

const ProductForm = (props) => {
  const { data, setField, onSubmit } = props
  const [isLoadingValidations, setIsLoadingValidations] = useState(false)
  const formErrors = validForm(data)

  const [revisionDate] = useMemo(() => {
    const dateFromString = parse(data.date_release, 'dd/MM/y', new Date())
    const date = isValid(dateFromString) ? dateFromString : new Date()
    return [format(addYears(date, 1), 'dd/MM/y')]
  }, [data.date_release])

  const handleSubmit = () => {
    if (formErrors.length || isLoadingValidations) return
    onSubmit()
  }

  const checkId = async () => {
    setIsLoadingValidations(true)
    const invalidId = await productService.productExists(data.id)
    setIsLoadingValidations(invalidId)
    return !invalidId
  }

  return (
    <Form
      buttons={
        <>
          {!props.isEditing && (
            <Button onClick={props.resetData}>Reiniciar</Button>
          )}
          <Button
            color='primary'
            onClick={handleSubmit}
            disabled={Boolean(formErrors.length || isLoadingValidations)}
          >
            Enviar
          </Button>
        </>
      }
    >
      <TextField
        value={data.id}
        onChange={(ev) => setField('id', ev.target.value)}
        id='id'
        label='ID'
        placeholder='Id del producto'
        disabled={props.isEditing}
        aria-label='id'
        error={validField('id', data.id)}
        $fullwidth
        asyncValidator={checkId}
      />
      <TextField
        value={data.name}
        onChange={(ev) => setField('name', ev.target.value)}
        id='name'
        label='Nombre'
        placeholder='Nombre del producto'
        aria-label='name'
        error={validField('name', data.name)}
        $fullwidth
      />
      <TextField
        value={data.description}
        onChange={(ev) => setField('description', ev.target.value)}
        id='description'
        label='Descripción'
        placeholder='Descripción del producto'
        aria-label='description'
        error={validField('description', data.description)}
        $fullwidth
      />
      <TextField
        value={data.logo}
        onChange={(ev) => setField('logo', ev.target.value)}
        id='logo'
        label='Logo'
        placeholder='Logo del producto'
        aria-label='logo'
        error={validField('logo', data.logo)}
        $fullwidth
      />
      <TextField
        value={data.date_release}
        onChange={(ev) => setField('date_release', ev.target.value)}
        id='date_release'
        label='Fecha Liberación'
        placeholder={format(new Date(), 'dd/MM/y')}
        aria-label='date_release'
        error={validField('date_release', data.date_release)}
        $fullwidth
        as={InputMask}
        mask='99/99/9999'
      />
      <TextField
        placeholder={revisionDate}
        id='date_revision'
        label='Fecha Revisión'
        disabled
        $fullwidth
      />
    </Form>
  )
}

ProductForm.propTypes = {
  setField: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    date_release: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  resetData: PropTypes.func
}

ProductForm.defaultProps = {
  isEditing: false
}

export default ProductForm

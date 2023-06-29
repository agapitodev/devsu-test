import { addYears, format, isValid, parse } from 'date-fns'
import { Button, Form, TextField, InputMask } from '../ui'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { validField, validForm } from './ProductFormValidator'

const fields = [
  { id: 'id', label: 'ID', placeholder: 'Id del producto' },
  {
    id: 'name',
    label: 'Nombre',
    placeholder: 'Nombre del producto'
  },
  {
    id: 'description',
    label: 'Descripción',
    placeholder: 'Descripción del producto'
  },
  {
    id: 'logo',
    label: 'Logo',
    placeholder: 'Logo del producto'
  },
  {
    id: 'date_release',
    label: 'Fecha Liberación',
    placeholder: format(new Date(), 'dd/MM/y')
  }
]

const ProductForm = (props) => {
  const { data, setField, onSubmit } = props
  const formErrors = validForm(data)
  const [revisionDate, setRevisionDate] = useState(
    format(addYears(new Date(), 1), 'dd/MM/y')
  )

  const updateRevisionDate = () => {
    const dateFromString = parse(data.date_release, 'dd/MM/y', new Date())
    const date = isValid(dateFromString) ? dateFromString : new Date()
    setRevisionDate(format(addYears(date, 1), 'dd/MM/y'))
  }

  const handleSubmit = () => {
    if (formErrors.length) return
    onSubmit()
  }

  return (
    <Form
      buttons={
        <>
          <Button>Reiniciar</Button>
          <Button
            color='primary'
            onClick={handleSubmit}
            disabled={Boolean(formErrors.length)}
          >
            Enviar
          </Button>
        </>
      }
    >
      {fields.map((field) => (
        <TextField
          key={field.id}
          value={data[field.id]}
          onChange={(ev) => setField(field.id, ev.target.value)}
          id={field.id}
          label={field.label}
          placeholder={field.placeholder}
          disabled={field.id === 'id' && props.isEditing}
          aria-label={field.id}
          error={validField(field.id, data[field.id])}
          $fullwidth
          {...(field.id === 'date_release' && {
            onBlur: updateRevisionDate,
            as: InputMask,
            mask: '99/99/9999'
          })}
        />
      ))}
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
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    date_release: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool
}

ProductForm.defaultProps = {
  isEditing: false
}

export default ProductForm

import { addYears, format } from 'date-fns'
import { Button, Form, TextField } from '../ui'

const fields = [
  { id: 'id', label: 'ID', placeholder: 'Id del producto', disabled: false },
  {
    id: 'name',
    label: 'Nombre',
    placeholder: 'Nombre del producto',
    disabled: false
  },
  {
    id: 'description',
    label: 'Descripción',
    placeholder: 'Descripción del producto',
    disabled: false
  },
  {
    id: 'logo',
    label: 'Logo',
    placeholder: 'Logo del producto',
    disabled: false
  },
  {
    id: 'date_release',
    label: 'Fecha Liberación',
    placeholder: format(new Date(), 'dd/MM/y'),
    disabled: false
  },
  {
    id: 'date_revision',
    label: 'Fecha Revisión',
    placeholder: format(addYears(new Date(), 1), 'dd/MM/y'),
    disabled: true
  }
]

const ProudctForm = () => {
  return (
    <Form
      buttons={
        <>
          <Button>Reiniciar</Button>
          <Button color='primary'>Enviar</Button>
        </>
      }
    >
      {fields.map((field) => (
        <TextField
          key={field.id}
          id={field.id}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          disabled={field.disabled}
          fullWidth
        />
      ))}
    </Form>
  )
}

export default ProudctForm

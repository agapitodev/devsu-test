import { addYears, format } from 'date-fns'
import { Button, TextField } from '../ui'
import { styled } from 'styled-components'

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

const FormWrapper = styled.form({
  width: '100%',
  paddingLeft: (props) => props.theme.spacing(6),
  paddingRight: (props) => props.theme.spacing(6),
  paddingBottom: (props) => props.theme.spacing(6),
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: 20,
  rowGap: 35
})

const ButtonsWrapper = styled.div({
  width: '100%',
  gridColumn: '1 / 3',
  display: 'flex',
  justifyContent: 'center',
  gap: 40,
  marginTop: (props) => props.theme.spacing(5)
})

const ProudctForm = () => {
  return (
    <FormWrapper>
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
      <ButtonsWrapper>
        <Button>Reiniciar</Button>
        <Button color='primary'>Enviar</Button>
      </ButtonsWrapper>
    </FormWrapper>
  )
}

export default ProudctForm

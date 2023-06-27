import { styled } from 'styled-components'
import ProudctForm from '../../components/form/ProductForm'

const Wrapper = styled.div({
  backgroundColor: '#FFF',
  width: '100%',
  margin: '0 auto',
  borderRadius: (props) => props.theme.spacing(0.25),
  maxWidth: (props) => props.theme.spacing(110)
})

const FormTitle = styled.div({
  width: '100%',
  paddingTop: (props) => props.theme.spacing(2),
  paddingBottom: (props) => props.theme.spacing(2),
  marginBottom: (props) => props.theme.spacing(2),
  color: (props) => props.theme.palette.secondary.dark,
  borderBottom: (props) => `1px solid ${props.theme.palette.secondary.main}`,
  '& p': {
    textAlign: 'center',
    fontSize: (props) => props.theme.spacing(4)
  }
})

const CreateProudctForm = () => {
  return (
    <Wrapper>
      <FormTitle>
        <p>Formulario de Registro</p>
      </FormTitle>
      <ProudctForm />
    </Wrapper>
  )
}

export default CreateProudctForm

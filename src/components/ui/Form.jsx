import { styled } from 'styled-components'
import PropTypes from 'prop-types'

const FormWrapper = styled.form({
  width: '100%',
  paddingTop: (props) => props.theme.spacing(2),
  paddingLeft: (props) => props.theme.spacing(6),
  paddingRight: (props) => props.theme.spacing(6),
  paddingBottom: (props) => props.theme.spacing(6)
})

const FormGroup = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: (props) => `repeat(${props.columns}, 1fr)`,
  columnGap: 20,
  rowGap: 35
})

const FormAction = styled.div({
  width: '100%',
  gridColumn: '1 / 3',
  display: 'flex',
  justifyContent: 'center',
  gap: 40,
  marginTop: (props) => props.theme.spacing(5)
})

const Form = (props) => {
  return (
    <FormWrapper>
      <FormGroup columns={props.columns}>{props.children}</FormGroup>
      {props.buttons && <FormAction>{props.buttons}</FormAction>}
    </FormWrapper>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.node,
  columns: PropTypes.oneOf([1, 2])
}

Form.defaultProps = {
  columns: 2
}

export default Form

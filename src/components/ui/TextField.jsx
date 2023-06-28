import PropTypes from 'prop-types'
import { styled } from 'styled-components'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: (props) => (props.$fullwidth ? '100%' : props.theme.spacing(30))
})

const Input = styled.input({
  height: (props) => props.theme.spacing(5.5),
  border: (props) => `1px solid ${props.theme.palette.gray[500]}`,
  borderRadius: (props) => props.theme.spacing(1),
  fontSize: (props) => props.theme.spacing(2),
  paddingRight: (props) => props.theme.spacing(2),
  paddingLeft: (props) => props.theme.spacing(2),
  '&:focus': {
    outlineColor: (props) => props.theme.palette.secondary.main
  }
})

const Label = styled.label({
  color: '#0F265C',
  fontWeight: 500,
  fontSize: 14,
  marginBottom: 5
})

const TextField = (props) => {
  const { label, $fullwidth, ...inputProps } = props
  return (
    <Wrapper $fullwidth={$fullwidth}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <Input {...inputProps} />
    </Wrapper>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'date']),
  disabled: PropTypes.bool,
  $fullwidth: PropTypes.bool
}

TextField.defaultProps = {
  type: 'text',
  disabled: false,
  $fullwidth: false
}

export default TextField

import PropTypes from 'prop-types'
import { useState } from 'react'
import { styled } from 'styled-components'
import HelperText from './HelperText'
import Label from './Label'
import Input from './Input'

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: (props) => (props.$fullwidth ? '100%' : props.theme.spacing(30))
})

const TextField = (props) => {
  const [isValid, setIsValid] = useState('success')
  const [touched, setTouched] = useState(false)
  const { label, $fullwidth, onBlur, asyncValidator, ...inputProps } = props
  const handleBlur = async (event) => {
    setTouched(true)
    if (asyncValidator && !props.error) {
      setIsValid('loading')
      const response = await asyncValidator()
      setIsValid(response ? 'success' : 'error')
    }
    if (onBlur) onBlur(event)
  }
  return (
    <Wrapper $fullwidth={$fullwidth}>
      {label && (
        <Label htmlFor={inputProps.id} disabled={props.disabled}>
          {label}
        </Label>
      )}
      <Input onBlur={handleBlur} {...inputProps} touched={touched} />
      {touched && props.error && <HelperText>{props.error}</HelperText>}
      {isValid === 'loading' && <HelperText>Validando</HelperText>}
      {isValid === 'error' && (
        <HelperText>{`${props.label} no es válido`}</HelperText>
      )}
    </Wrapper>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'date']),
  disabled: PropTypes.bool,
  $fullwidth: PropTypes.bool,
  dense: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  autoComplete: PropTypes.oneOf(['on', 'off']),
  error: PropTypes.string,
  onBlur: PropTypes.func,
  asyncValidator: PropTypes.func
}

TextField.defaultProps = {
  as: 'input',
  type: 'text',
  disabled: false,
  $fullwidth: false,
  dense: false,
  autoComplete: 'off'
}

export default TextField

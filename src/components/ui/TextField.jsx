import PropTypes from 'prop-types'
import { useState } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: (props) => (props.$fullwidth ? '100%' : props.theme.spacing(30))
})

const Input = styled.input({
  height: (props) => props.theme.spacing(props.dense ? 5.5 : 6.5),
  border: (props) =>
    `1px solid ${
      props.touched && props.error
        ? props.theme.palette.error.main
        : props.theme.palette.gray[500]
    }`,
  borderRadius: (props) => props.theme.spacing(1),
  fontSize: (props) => props.theme.spacing(2),
  paddingRight: (props) => props.theme.spacing(2),
  paddingLeft: (props) => props.theme.spacing(2),
  '&::placeholder': {
    color: (props) => props.theme.palette.gray[500]
  },
  '&:focus': {
    outlineColor: (props) =>
      props.touched && props.error
        ? props.theme.palette.error.main
        : props.theme.palette.secondary.main
  }
})

const Label = styled.label({
  color: (props) =>
    props.disabled
      ? props.theme.palette.gray[500]
      : props.theme.palette.secondary.main,
  fontSize: (props) => props.theme.spacing(2),
  marginBottom: (props) => props.theme.spacing(0.5),
  fontWeight: 500
})

const HelperText = styled.span({
  position: 'absolute',
  fontSize: (props) => props.theme.spacing(1.5),
  bottom: (props) => props.theme.spacing(-2),
  color: (props) => props.theme.palette.error.main
})

const TextField = (props) => {
  const [touched, setTouched] = useState(false)
  const { label, $fullwidth, onBlur, ...inputProps } = props
  const handleBlur = (event) => {
    setTouched(true)
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
  onBlur: PropTypes.func
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

import { styled } from 'styled-components'
import PropTypes from 'prop-types'

const COLOR_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DEFAULT: 'default'
}

const getColorButton = (color) => {
  switch (color) {
    case COLOR_TYPES.PRIMARY:
      return (props) => props.theme.palette.secondary.main
    case COLOR_TYPES.SECONDARY:
      return (props) => props.theme.palette.primary.main
    case COLOR_TYPES.DEFAULT:
      return (props) => props.theme.palette.secondary.main
  }
}

const getBackgroundColorButton = (color) => {
  switch (color) {
    case COLOR_TYPES.PRIMARY:
      return (props) => props.theme.palette.primary.main
    case COLOR_TYPES.SECONDARY:
      return (props) => props.theme.palette.secondary.main
    case COLOR_TYPES.DEFAULT:
      return (props) => props.theme.palette.default.main
  }
}

const Button = styled.button.attrs((props) => ({ type: props.type }))({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: (props) => getBackgroundColorButton(props.color),
  color: (props) => getColorButton(props.color),
  fontSize: (props) => props.theme.spacing(2),
  height: (props) => props.theme.spacing(6),
  paddingLeft: (props) => props.theme.spacing(2.5),
  paddingRight: (props) => props.theme.spacing(2.5),
  borderRadius: (props) => props.theme.spacing(0.5),
  fontWeight: 500,
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none'
})

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['primary', 'secondary', 'default'])
}

Button.defaultProps = {
  type: 'button',
  color: 'default'
}

export default Button

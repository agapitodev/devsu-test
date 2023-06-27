import PropTypes from 'prop-types'
import { styled } from 'styled-components'

const Button = styled.button.attrs((props) => ({ type: props.type }))({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: (props) => props.theme.palette.primary.main,
  color: (props) => props.theme.palette.secondary.main,
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
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

Button.defaultProps = {
  type: 'button'
}

export default Button

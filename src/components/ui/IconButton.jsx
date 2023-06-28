import { styled } from 'styled-components'
import PropTypes from 'prop-types'

const IconButton = styled.button.attrs((props) => ({ type: props.type }))({
  backgroundColor: (props) => props.theme.palette.gray[100],
  color: (props) => props.theme.palette.secondary.main,
  display: 'inline-flex',
  padding: (props) => props.theme.spacing(0.75),
  borderRadius: '50%',
  border: 0,
  fontSize: (props) => props.theme.spacing(2),
  lineHeight: 1,
  cursor: 'pointer'
})

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

IconButton.defaultProps = {
  type: 'button'
}

export default IconButton

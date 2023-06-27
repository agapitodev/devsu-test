import PropTypes from 'prop-types'
import { styled } from 'styled-components'

const Icon = styled.div({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: (props) => props.theme.spacing(2),
  height: (props) => props.theme.spacing(2),
  borderRadius: '50%',
  backgroundColor: (props) => props.theme.palette.gray[500],
  color: '#FFF',
  marginLeft: 10,
  verticalAlign: 'middle',
  cursor: 'pointer'
})

Icon.propTypes = {
  children: PropTypes.node.isRequired
}

export default Icon

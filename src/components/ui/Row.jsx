import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: (props) => props.justify,
  alignItems: (props) => props.align,
  marginBottom: (props) => `${props.mb || 0}px`
})

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'start',
    'end'
  ]),
  align: PropTypes.oneOf(['center', 'start', 'end']),
  mb: PropTypes.number
}

Row.defaultProps = {
  justify: 'center',
  align: 'start'
}

export default Row

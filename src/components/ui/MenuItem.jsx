import { styled } from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.li({
  width: '100%',
  listStyle: 'none',
  '& button': {
    padding: (props) => `${props.theme.spacing(1)} ${props.theme.spacing(2)}`,
    color: (props) => props.theme.palette.secondary.main,
    fontSize: (props) => props.theme.spacing(2),
    textAlign: 'left',
    width: '100%',
    border: 0,
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: (props) => props.theme.palette.gray[500]
    }
  }
})

const MenuItem = (props) => {
  return (
    <Wrapper>
      <button onClick={props.onClick}>{props.children}</button>
    </Wrapper>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default MenuItem

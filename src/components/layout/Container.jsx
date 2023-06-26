import Header from './Header'
import PropTypes from 'prop-types'
import { styled } from 'styled-components'

const Wrapper = styled.div({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#F5F6FA'
})

const Container = (props) => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container

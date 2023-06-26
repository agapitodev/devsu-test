import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.header({
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF'
})

const Header = () => {
  return (
    <Wrapper>
      <img
        src='/pichincha-logo.png'
        alt='banco pichincha'
        height={70}
      />
    </Wrapper>
  )
}

export default Header

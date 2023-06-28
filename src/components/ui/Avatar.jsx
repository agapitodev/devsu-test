import PropTypes from 'prop-types'
import { useState } from 'react'
import { styled } from 'styled-components'
import Loader from './Loader'

const Wrapper = styled.div({
  width: (props) => props.theme.spacing(5),
  height: (props) => props.theme.spacing(5),
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  '& > img': {
    height: (props) => props.theme.spacing(4)
  }
})

const Default = styled.div({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: (props) => props.theme.palette.gray[300],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > span': {
    color: '#FFF'
  }
})

const Avatar = (props) => {
  const [status, setStatus] = useState('loading')
  const image = new Image()

  image.onload = () => {
    setStatus('success')
  }

  image.onerror = () => {
    setStatus('error')
  }

  image.src = props.src

  return (
    <Wrapper>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <Default>
          <span>DE</span>
        </Default>
      ) : (
        <img src={props.src} alt='avatar' />
      )}
    </Wrapper>
  )
}

Avatar.propTypes = {
  src: PropTypes.string
}

export default Avatar

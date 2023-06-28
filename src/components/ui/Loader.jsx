import { ImSpinner2 } from 'react-icons/im'
import { styled, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Animation = styled.div`
  display: flex;
  animation: ${rotate} 1s linear infinite;
`

const Loader = () => (
  <Animation>
    <ImSpinner2 />
  </Animation>
)

export default Loader

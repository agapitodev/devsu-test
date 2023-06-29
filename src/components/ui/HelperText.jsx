import { styled } from 'styled-components'

const HelperText = styled.span({
  position: 'absolute',
  fontSize: (props) => props.theme.spacing(1.5),
  bottom: (props) => props.theme.spacing(-2),
  color: (props) => props.theme.palette.error.main
})

export default HelperText

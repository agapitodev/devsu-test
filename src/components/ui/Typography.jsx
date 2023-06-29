import { styled } from 'styled-components'

const Typogrephy = styled.p({
  color: (props) => props.theme.palette.secondary.main,
  fontSize: (props) => props.theme.spacing(2),
  textAlign: 'center'
})

export default Typogrephy

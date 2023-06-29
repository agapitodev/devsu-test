import { styled } from 'styled-components'

const Label = styled.label({
  color: (props) =>
    props.disabled
      ? props.theme.palette.gray[500]
      : props.theme.palette.secondary.main,
  fontSize: (props) => props.theme.spacing(2),
  marginBottom: (props) => props.theme.spacing(0.5),
  fontWeight: 500
})

export default Label

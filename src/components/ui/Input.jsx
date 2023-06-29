import { styled } from 'styled-components'

const Input = styled.input({
  height: (props) => props.theme.spacing(props.dense ? 5.5 : 6.5),
  border: (props) =>
    `1px solid ${
      (props.touched && props.error) || !props.isValid
        ? props.theme.palette.error.main
        : props.theme.palette.gray[500]
    }`,
  borderRadius: (props) => props.theme.spacing(1),
  fontSize: (props) => props.theme.spacing(2),
  paddingRight: (props) => props.theme.spacing(2),
  paddingLeft: (props) => props.theme.spacing(2),
  '&::placeholder': {
    color: (props) => props.theme.palette.gray[500]
  },
  '&:focus': {
    outlineColor: (props) =>
      (props.touched && props.error) || !props.isValid
        ? props.theme.palette.error.main
        : props.theme.palette.secondary.main
  }
})

export default Input

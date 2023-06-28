import { styled } from 'styled-components'
import PropTypes from 'prop-types'

const CardWrapper = styled.div({
  backgroundColor: '#FFF',
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  borderRadius: (props) => props.theme.spacing(0.25),
  maxWidth: (props) => props.theme.spacing(110)
})

const CardTitle = styled.div({
  width: '100%',
  paddingTop: (props) => props.theme.spacing(2),
  paddingBottom: (props) => props.theme.spacing(2),
  marginBottom: (props) => props.theme.spacing(2),
  color: (props) => props.theme.palette.secondary.dark,
  borderBottom: (props) => `1px solid ${props.theme.palette.secondary.main}`,
  '& p': {
    textAlign: 'center',
    fontSize: (props) => props.theme.spacing(4)
  }
})

const Card = (props) => {
  return (
    <CardWrapper>
      {props.title && (
        <CardTitle>
          <p>{props.title}</p>
        </CardTitle>
      )}
      {props.children}
    </CardWrapper>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Card

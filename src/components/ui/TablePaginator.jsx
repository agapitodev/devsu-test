import { styled } from 'styled-components'
import IconButton from './IconButton'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import PropTypes from 'prop-types'

const Wrapper = styled.div({
  display: 'flex',
  gap: 20
})

const TablePaginator = (props) => {
  const handlePrevious = () => {
    props.setPage((prev) => prev - 1)
  }

  const handleNext = () => {
    props.setPage((prev) => prev + 1)
  }

  return (
    <Wrapper>
      {props.showPreviousButton && (
        <IconButton onClick={handlePrevious} aria-label='prev-button'>
          <GrLinkPrevious />
        </IconButton>
      )}
      {props.showNextButton && (
        <IconButton onClick={handleNext} aria-label='next-button'>
          <GrLinkNext />
        </IconButton>
      )}
    </Wrapper>
  )
}

TablePaginator.propTypes = {
  setPage: PropTypes.func.isRequired,
  showPreviousButton: PropTypes.bool.isRequired,
  showNextButton: PropTypes.bool.isRequired
}

export default TablePaginator

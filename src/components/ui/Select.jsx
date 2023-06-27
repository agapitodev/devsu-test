import PropTypes from 'prop-types'
import { styled } from 'styled-components'

const SelectWrapper = styled.select({
  color: (props) => props.theme.palette.secondary.main,
  height: (props) => props.theme.spacing(4),
  paddingRight: (props) => props.theme.spacing(2),
  paddingLeft: (props) => props.theme.spacing(2),
  borderRadius: (props) => props.theme.spacing(0.5)
})

const Select = (props) => {
  return (
    <SelectWrapper>
      {props.options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectWrapper>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Select

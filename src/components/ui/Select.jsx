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
  const { options, ...selectProps } = props
  return (
    <SelectWrapper {...selectProps}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectWrapper>
  )
}

Select.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Select

import PropTypes from 'prop-types'
import { styled } from 'styled-components'
import Row from './Row'
import Select from './Select'

const TableWrapped = styled.div({
  backgroundColor: '#FFF',
  width: '100%',
  borderRadius: (props) => props.theme.spacing(0.5),
  padding: (props) => props.theme.spacing(2),
  '& > table': {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    marginBottom: (props) => props.theme.spacing(2)
  }
})

const TableHeader = styled.thead({
  backgroundColor: (props) => props.theme.palette.gray[100],
  color: (props) => props.theme.palette.secondary.main,
  fontSize: (props) => props.theme.spacing(2),
  height: (props) => props.theme.spacing(6),
  textAlign: 'left',
  '& th:first-of-type': {
    textAlign: 'center'
  },
  '& th:last-of-type': {
    width: (props) => props.theme.spacing(4)
  }
})

TableHeader.propTypes = {
  $cols: PropTypes.number
}

const TableBody = styled.tbody({
  '& > tr': {
    height: (props) => props.theme.spacing(6),
    color: (props) => props.theme.palette.secondary.dark,
    '& td': {
      borderTop: (props) => `1px solid ${props.theme.palette.gray[300]}`
    },
    '& td:first-of-type, & td:last-of-type': {
      textAlign: 'center'
    },
    '&:last-of-type': {
      borderBottom: (props) => `1px solid ${props.theme.palette.gray[300]}`
    }
  }
})

const perPageOptions = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15' }
]

const Table = (props) => {
  const { header, data } = props
  return (
    <TableWrapped>
      <table>
        <TableHeader $cols={header.length}>
          <tr>
            {header.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <tr key={row.id}>
              {header.map((cell) => (
                <td key={`${row.id}_${cell.key}`}>
                  {cell.defaultValue ?? row[cell.key]}
                </td>
              ))}
            </tr>
          ))}
        </TableBody>
      </table>
      <Row justify='space-between' align='center'>
        <span>{data.length} resultados</span>
        <Select options={perPageOptions} />
      </Row>
    </TableWrapped>
  )
}

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      defaultValue: PropTypes.node
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Table

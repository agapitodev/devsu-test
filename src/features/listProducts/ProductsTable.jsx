import { Table, Icon } from '../../components/ui'
import { MdMoreVert } from 'react-icons/md'
import { IoMdInformation } from 'react-icons/io'

const header = [
  { key: 'logo', label: 'Logo' },
  { key: 'name', label: 'Nombre del Producto' },
  {
    key: 'description',
    label: (
      <div>
        Descripción
        <Icon>
          <IoMdInformation />
        </Icon>
      </div>
    )
  },
  {
    key: 'date_release',
    label: (
      <div>
        Fecha de liberación
        <Icon>
          <IoMdInformation />
        </Icon>
      </div>
    )
  },
  {
    key: 'date_revision',
    label: (
      <div>
        Fecha de revisión
        <Icon>
          <IoMdInformation />
        </Icon>
      </div>
    )
  },
  {
    key: 'actions',
    label: ''
  }
]

const mockedData = [
  {
    id: 'adb',
    name: 'Primero',
    description: 'Primer producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString(),
    actions: <MdMoreVert />
  },
  {
    id: 'adk',
    name: 'Segundo',
    description: 'Segundo producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString(),
    actions: <MdMoreVert />
  },
  {
    id: 'adn',
    name: 'Tercero',
    description: 'Tercer producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString(),
    actions: <MdMoreVert />
  }
]

const ProductsTable = () => {
  return <Table header={header} data={mockedData} />
}

export default ProductsTable

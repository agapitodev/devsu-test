import { Table, Icon } from '../../components/ui'
import { IoMdInformation } from 'react-icons/io'
import MenuAction from './MenuAction'

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
    label: '',
    defaultValue: <MenuAction />
  }
]

const mockedData = [
  {
    id: 'adb',
    name: 'Primero',
    description: 'Primer producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString()
  },
  {
    id: 'adk',
    name: 'Segundo',
    description: 'Segundo producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString()
  },
  {
    id: 'adn',
    name: 'Tercero',
    description: 'Tercer producto',
    logo: 'JC',
    date_release: new Date('2000-01-01').toDateString(),
    date_revision: new Date('2001-01-01').toDateString()
  }
]

const ProductsTable = () => {
  return <Table header={header} data={mockedData} />
}

export default ProductsTable

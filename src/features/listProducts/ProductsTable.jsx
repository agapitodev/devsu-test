import { Table, Icon } from '../../components/ui'
import { IoMdInformation } from 'react-icons/io'
import MenuAction from './MenuAction'
import { useEffect, useState } from 'react'
import { productService } from '../../services'

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

const ProductsTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fecthProducts = async () => {
      let products
      try {
        products = await productService.getProducts()
        setData(products)
      } catch (error) {
        console.error(error)
      }
    }
    fecthProducts()
  }, [])

  return <Table header={header} data={data} />
}

export default ProductsTable

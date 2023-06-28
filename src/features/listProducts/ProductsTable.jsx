import { useEffect, useState } from 'react'
import { Table, Icon, Button, Row, TextField } from '../../components/ui'
import { IoMdInformation } from 'react-icons/io'
import MenuAction from './MenuAction'
import { productService } from '../../services'
import { Link } from 'react-router-dom'

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
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search) {
      setFilteredData(data.filter((item) => item.name.includes(search)))
    } else {
      setFilteredData([])
    }
  }, [search])

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

  return (
    <>
      <Row justify='space-between' mb={15}>
        <TextField
          id='search'
          aria-label='search'
          placeholder='Search...'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button as={Link} to='/create' color='primary'>
          Agregar
        </Button>
      </Row>
      <Table header={header} data={search ? filteredData : data} />
    </>
  )
}

export default ProductsTable

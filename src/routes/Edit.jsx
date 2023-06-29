import { useParams } from 'react-router-dom'
import Container from '../components/layout/Container'
import { EditProductForm } from '../features/editProduct'
import { productService } from '../services'
import { useEffect, useState } from 'react'
import { Typography } from '../components/ui'

const Edit = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [exists, setExists] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await productService.productExists(params.id)
      if (res) {
        const products = await productService.getProducts()
        const productFound = products.find(
          (product) => product.id === params.id
        )
        setExists(productFound)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Container>
      {loading ? (
        <Typography>Verificando</Typography>
      ) : exists ? (
        <EditProductForm product={exists} />
      ) : (
        <Typography>ERROR 404: El producto no existe</Typography>
      )}
    </Container>
  )
}

export default Edit

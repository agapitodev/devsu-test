import { Container } from '../components/layout'
import { ProductsTable } from '../features/listProducts'

const Home = () => {
  return (
    <Container>
      <ProductsTable />
    </Container>
  )
}

export default Home

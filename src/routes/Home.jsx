import { Container } from '../components/layout'
import { Button, Row, TextField } from '../components/ui'
import { ProductsTable } from '../features/listProducts'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Row justify='space-between' mb={15}>
        <TextField id='search' placeholder='Search...' />
        <Button as={Link} to='/create'>
          Agregar
        </Button>
      </Row>
      <ProductsTable />
    </Container>
  )
}

export default Home

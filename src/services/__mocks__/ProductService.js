class ProductService {
  static $classInstance

  static getInstance() {
    if (!this.$classInstance) {
      this.$classInstance = new ProductService()
    }

    return this.$classInstance
  }

  getProducts = () => [
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
    },
    {
      id: 'adbc',
      name: 'Cuarto',
      description: 'Cuarto producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adkc',
      name: 'Quinto',
      description: 'Quinto producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adnc',
      name: 'Sexto',
      description: 'Sexto producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adbt',
      name: 'Septimo',
      description: 'Septimo producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adkt',
      name: 'Octavo',
      description: 'Octavo producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adnt',
      name: 'Noveno',
      description: 'Noveno producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adby',
      name: 'Decimo',
      description: 'Decimo producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adky',
      name: 'undecimo',
      description: 'undecimo producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'adny',
      name: 'duodecimo',
      description: 'duodecimo producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    },
    {
      id: 'id-exist-test',
      name: 'decimotercero',
      description: 'decimotercero producto',
      logo: 'JC',
      date_release: new Date('2000-01-01').toDateString(),
      date_revision: new Date('2001-01-01').toDateString()
    }
  ]

  createProduct = (data) => data

  editProduct = (data) => ({ ...data, name: 'Nuevo' })

  deleteProduct = (id) => true

  productExists = (id) => id === 'id-exist-test'
}

export default ProductService

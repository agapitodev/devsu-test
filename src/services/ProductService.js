import HttpClient from './HttpClient'

const AUTHOR_ID = 1521
const BASE_URL =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros'

class ProductService extends HttpClient {
  static $classInstance
  static #isInternalConstructing = false

  constructor() {
    if (!ProductService.#isInternalConstructing) {
      throw new TypeError('ProductService is not constructable')
    }
    ProductService.#isInternalConstructing = false
    super(BASE_URL, AUTHOR_ID)
  }

  static getInstance() {
    ProductService.#isInternalConstructing = true
    if (!this.$classInstance) {
      this.$classInstance = new ProductService()
    }

    return this.$classInstance
  }

  getProducts = () => this._instance.get('/bp/products')
}

export default ProductService
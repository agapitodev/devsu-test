import ProductService from '../ProductService'

test('Try no get an Service instance', () => {
  expect(() => {
    const instance = new ProductService()
    instance.productExists()
  }).toThrowError('ProductService is not constructable')
})

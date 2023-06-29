import ProudctForm from '../../components/form/ProductForm'
import { Card } from '../../components/ui'
import { addYears, format, parse } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { productService } from '../../services'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/dateUtils'
import { useFormData } from '../../utils/customHooks'

const EditProductForm = (props) => {
  const navigate = useNavigate()
  const [formData, setField] = useFormData({
    id: props.product.id,
    name: props.product.name,
    description: props.product.description,
    logo: props.product.logo,
    date_release: formatDate(new Date(props.product.date_release))
  })

  const sendFormData = async () => {
    const dateReleaseFromString = parse(
      formData.date_release,
      'dd/MM/y',
      new Date()
    )
    const dateRelease = format(new Date(dateReleaseFromString), 'y-MM-dd')
    const dateRevision = format(
      addYears(new Date(dateReleaseFromString), 1),
      'y-MM-dd'
    )
    await productService.createProduct({
      ...formData,
      date_release: dateRelease,
      date_revision: dateRevision
    })
    navigate('/')
  }

  return (
    <Card title='Formulario de Edición'>
      <ProudctForm
        data={formData}
        setField={setField}
        onSubmit={sendFormData}
        isEditing
      />
    </Card>
  )
}

EditProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    date_release: PropTypes.string.isRequired
  }).isRequired
}

export default EditProductForm

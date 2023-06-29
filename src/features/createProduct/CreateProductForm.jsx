import ProudctForm from '../../components/form/ProductForm'
import { Card } from '../../components/ui'
import { addYears, format, parse } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { productService } from '../../services'
import { useFormData } from '../../utils/customHooks'

const CreateProductForm = () => {
  const navigate = useNavigate()
  const [formData, setField, resetData] = useFormData({
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: ''
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
    <Card title='Formulario de Registro'>
      <ProudctForm
        data={formData}
        setField={setField}
        onSubmit={sendFormData}
        resetData={resetData}
      />
    </Card>
  )
}

export default CreateProductForm

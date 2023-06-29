import { useState } from 'react'
import ProudctForm from '../../components/form/ProductForm'
import { Card } from '../../components/ui'
import { addYears, format, parse } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { productService } from '../../services'

const EditProductForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: ''
  })

  const setField = (field, value) => {
    if (!Object.keys(formData).includes(field)) return
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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

export default EditProductForm

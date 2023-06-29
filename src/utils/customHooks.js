import { useState } from 'react'

export const useFormData = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData)

  const setField = (field, value) => {
    if (!Object.keys(formData).includes(field)) return
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetData = () => setFormData(initialFormData)

  return [formData, setField, resetData]
}

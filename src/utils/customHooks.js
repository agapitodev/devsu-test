import { useState } from 'react'

export const useFormData = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData)

  const setField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetData = () => setFormData(initialFormData)

  return [formData, setField, resetData]
}

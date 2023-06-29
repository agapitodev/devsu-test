import { differenceInDays, isValid, parse } from 'date-fns'

const validId = (value) => {
  if (!value.length) {
    return 'El ID es requerido'
  }
  if (value.length < 3 || value.length > 10) {
    return 'El nombre debe contener entre 3 y 10 caracteres'
  }
  return ''
}

const validName = (value) => {
  if (!value.length) {
    return 'El nombre es requerido'
  }
  if (value.length < 5 || value.length > 100) {
    return 'El nombre debe contener entre 5 y 100 caracteres'
  }
  return ''
}

const validDescription = (value) => {
  if (!value.length) {
    return 'La descripción es requerida'
  }
  if (value.length < 10 || value.length > 200) {
    return 'La descripción debe contener entre 10 y 200 caracteres'
  }
  return ''
}

const validLogo = (value) => {
  if (!value.length) {
    return 'El logo es requerido'
  }
  return ''
}

const validDateRelease = (value) => {
  if (!value.length) {
    return 'La fecha es requerida'
  }
  const dateFromString = parse(value, 'dd/MM/y', new Date())
  if (!isValid(dateFromString)) {
    return 'La fecha no es válida'
  }
  if (differenceInDays(dateFromString, new Date()) < 0) {
    return 'La fecha debe ser igual o mayor a la fecha actual'
  }
  return ''
}

export const validField = (key, value) => {
  switch (key) {
    case 'id':
      return validId(value)
    case 'name':
      return validName(value)
    case 'description':
      return validDescription(value)
    case 'logo':
      return validLogo(value)
    case 'date_release':
      return validDateRelease(value)
    default:
      return ''
  }
}

export const validForm = (dataForm) => {
  const errors = Object.entries(dataForm)
    .map(([key, value]) => validField(key, value))
    .filter((error) => error.length)
  return errors
}

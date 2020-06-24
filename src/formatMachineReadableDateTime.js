import isDate from 'date-fns/isDate'

export default (date) => {
  if (!isDate(date)) {
    return new Date(date).toISOString()
  }

  return date.toISOString()
}

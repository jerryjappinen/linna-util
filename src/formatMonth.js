import format from 'date-fns/format'

export default (date) => {
  return format(date, 'MMMM yyyy')
}

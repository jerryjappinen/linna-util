import isDate from 'lodash/isDate'
import isNaN from 'lodash/isNaN'

export default (value) => {
  if (isDate(value) && value.getTime && !isNaN(value.getTime())) {
    return true
  }
  return false
}

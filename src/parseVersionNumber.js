import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'

export default (string) => {
  if (string && typeof string === 'string' && string.length) {
    let parsed = string.split('.').map((i) => {
      return parseInt(i)
    })

    parsed = parsed.map((item) => {
      return isNumber(item) && !isNaN(item) ? item : 0
    })

    return parsed
  }

  return null
}

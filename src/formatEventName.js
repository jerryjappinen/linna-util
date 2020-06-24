import camelCase from 'lodash/camelCase'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'

// Convert event name to a conventional colon-separated string that's safe to use in HTML templates
export default (...eventNameParts) => {
  return map(eventNameParts, (eventNamePart) => {
    return lowerCase(camelCase(eventNamePart))
  }).join(':')
}

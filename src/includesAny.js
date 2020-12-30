import includes from 'lodash/includes'
import some from 'lodash/some'

export default (collection, values, startsAt) => {
  return some(values, (value) => {
    return includes(collection, value, startsAt)
  })
}

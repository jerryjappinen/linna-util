import { includes, some } from 'lodash'

export default (collection, values, startsAt) => {
  return some(values, (value) => {
    return includes(collection, value, startsAt)
  })
}

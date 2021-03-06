import flatten from 'lodash/flatten'
import includes from 'lodash/includes'
import map from 'lodash/map'

const keyCodeShortcuts = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

const getKeyCode = (keyCode) => {
  if (keyCodeShortcuts[keyCode]) {
    return keyCodeShortcuts[keyCode]
  }
  return keyCode
}

export default (event, ...targetKeyCodes) => {
  return includes(
    map(flatten(targetKeyCodes), getKeyCode),
    event.keyCode
  )
}

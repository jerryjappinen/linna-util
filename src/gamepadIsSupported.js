export default function () {
  if (window && window.navigator && window.navigator.getGamepads) {
    return true
  }

  return false
}

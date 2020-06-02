export default () => {
  return !(process && process.server)
}

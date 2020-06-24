import startCase from 'lodash/startCase'

export default (email) => {
  const replacedEmail = email.replace(/@.*$/, '')
  return startCase(replacedEmail !== email ? replacedEmail : email)
}

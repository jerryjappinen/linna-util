import { startCase } from 'lodash-es'

export default (email) => {
  const replacedEmail = email.replace(/@.*$/, '')
  return startCase(replacedEmail !== email ? replacedEmail : email)
}

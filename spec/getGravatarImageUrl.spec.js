import { describe, it, expect } from 'vitest'

import getGravatarImageUrl from '../src/getGravatarImageUrl'

describe.concurrent('getGravatarImageUrl', () => {
  const email = 'sindresorhus@gmail.com'

  it('should work', () => {
    expect(getGravatarImageUrl(email, 200)).toEqual('https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200')
  })

  it('should work with placeholder URL', () => {
    expect(getGravatarImageUrl(email, 200, 'https://foo.bar')).toEqual('https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200&default=https%3A%2F%2Ffoo.bar')
  })
})

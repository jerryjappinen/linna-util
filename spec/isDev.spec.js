import { describe, it, expect } from 'vitest'

import isDev from '../src/isDev'
import isTest from '../src/isTest'

describe.concurrent('isDev', () => {
  it('should be true in test env', () => {
    expect(isDev()).toEqual(true)
  })

  it('should not be true in test env if isTest() is used', () => {
    expect(isDev() && !isTest()).toEqual(false)
  })
})

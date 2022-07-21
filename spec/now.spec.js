import { describe, it, expect } from 'vitest'

import now from '../src/now'

describe.concurrent('now', () => {
  it('should be date', () => {
    expect(now()).toBeInstanceOf(Date)
  })
})

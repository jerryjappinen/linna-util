import now from '../src/now'

describe('now', () => {
  it('should be date', () => {
    expect(now()).toBeDate()
  })
})

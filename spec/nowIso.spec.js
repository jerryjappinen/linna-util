import nowIso from '../src/nowIso'

describe('nowIso', () => {
  it('should be date', () => {
    expect(nowIso()).toBeString()
  })
})

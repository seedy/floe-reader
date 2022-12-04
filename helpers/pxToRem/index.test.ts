import pxToRem from "helpers/pxToRem";

describe('pxToRem', () => {
  it('should return 1rem', () => {
    expect(pxToRem(16)).toBe('1rem');
  })
})
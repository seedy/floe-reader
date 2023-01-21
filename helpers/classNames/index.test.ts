import classNames from "helpers/classNames";

describe('classNames', () => {
  it('should return empty string', () => {
    expect(classNames(undefined)).toBe('');
  })
  it('should return className', () => {
    expect(classNames('toto')).toBe('toto');
  })
  it('should return className', () => {
    expect(classNames('toto', undefined)).toBe('toto');
  })
})
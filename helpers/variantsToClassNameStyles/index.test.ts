import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

const styles = {
  'direction-row': 'direction-row',
  'align-start': 'align-start',
  'grow-true': 'grow-true',
};

describe('variantsToClassNameStyles', () => {
  it('should return classNames', () => {
    expect(variantsToClassNameStyles({direction: 'row', align: 'start'}, styles)).toBe("direction-row align-start");
  })
  it('should return empty string', () => {
    expect(variantsToClassNameStyles({direction: undefined, align: undefined}, styles)).toBe("");
  })
  it('should compute boolean values as strings', () => {
    expect(variantsToClassNameStyles({direction: 'row', grow: true}, styles)).toBe("direction-row grow-true");
  })
})
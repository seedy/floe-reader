import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { describe, expect, it } from "vitest";

const styles = {
  "align-start": "align-start",
  "direction-row": "direction-row",
  "grow-true": "grow-true",
};

describe("variantsToClassNameStyles", () => {
  it("should return cn", () => {
    expect(
      variantsToClassNameStyles({ align: "start", direction: "row" }, styles),
    ).toBe("align-start direction-row");
  });
  it("should return empty string", () => {
    expect(
      variantsToClassNameStyles(
        { align: undefined, direction: undefined },
        styles,
      ),
    ).toBe("");
  });
  it("should compute boolean values as strings", () => {
    expect(
      variantsToClassNameStyles({ direction: "row", grow: true }, styles),
    ).toBe("direction-row grow-true");
  });
});

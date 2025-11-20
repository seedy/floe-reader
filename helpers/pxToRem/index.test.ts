import pxToRem from "helpers/pxToRem";
import { describe, expect, it } from "vitest";

describe("pxToRem", () => {
	it("should return 1rem", () => {
		expect(pxToRem(16)).toBe("1rem");
	});
});

import { vector2 } from "../src/index.js";
import { expect, test } from "vitest";

test("cm.vector2([x, y])", () => {
  const v = vector2([1, 2]);
  expect(v.x).toBe(1);
  expect(v.y).toBe(2);
});

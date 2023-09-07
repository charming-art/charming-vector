import { vec } from "../src/index.js";
import { expect, test } from "vitest";

test("cm.vec([x, y])", () => {
  const v = vec(1, 2);
  expect(v.x).toBe(1);
  expect(v.y).toBe(2);
});

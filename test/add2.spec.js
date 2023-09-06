import { add2, vector2 } from "../src/index.js";
import { expect, test } from "vitest";

test("cm.add2(a, b)", () => {
  const v1 = vector2([2, 3]);
  const v2 = vector2([1, 2]);
  const v3 = add2(v1, v2);

  expect(v1.x).toBe(2);
  expect(v1.y).toBe(3);

  expect(v2.x).toBe(1);
  expect(v2.y).toBe(2);

  expect(v3.x).toBe(3);
  expect(v3.y).toBe(5);
});

test("vector2.add2(vector2)", () => {
  const v1 = vector2([2, 3]);
  const v2 = vector2([1, 2]);
  v1.add(v2);

  expect(v1.x).toBe(3);
  expect(v1.y).toBe(5);

  expect(v2.x).toBe(1);
  expect(v2.y).toBe(2);
});

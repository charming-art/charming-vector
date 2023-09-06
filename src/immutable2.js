import { Vector2 } from "./vector2.js";

export function immutable2(compute) {
  return function (a, b) {
    return new Vector2(compute(a, b));
  };
}

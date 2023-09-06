import { _add2 } from "./add2";
import { mutable2 } from "./mutable2";

export function Vector2([x = 0, y = 0] = []) {
  Object.defineProperties(this, {
    x: { value: x, writable: true },
    y: { value: y, writable: true },
  });
}

Object.defineProperties(Vector2.prototype, {
  add: { value: mutable2(_add2) },
});

export function vector2(...params) {
  return new Vector2(...params);
}

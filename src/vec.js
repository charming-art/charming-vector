import { vec$add } from "./vecAdd.js";

export function Vec(x = 0, y = 0) {
  Object.defineProperties(this, {
    x: { value: x, writable: true },
    y: { value: y, writable: true },
  });
}

Object.defineProperties(Vec.prototype, {
  add: { value: vec$add },
});

export function vec(...params) {
  return new Vec(...params);
}

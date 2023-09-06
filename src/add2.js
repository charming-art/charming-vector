import { immutable2 } from "./immutable2";

export function _add2(a, b) {
  const x = a.x + b.x;
  const y = a.y + b.y;
  return [x, y];
}

export const add2 = immutable2(_add2);

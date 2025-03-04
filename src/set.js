import {Vec} from "./vec.js";

export function vec$set(a, b) {
  if (a instanceof Vec) {
    this.x = a.x;
    this.y = a.y;
    return this;
  }
  this.x = a;
  this.y = b;
  return this;
}

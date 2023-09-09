import { Vec } from "./vec";

export function vec$mag(s) {
  const mag = Math.sqrt(this.x * this.x + this.y * this.y);
  if (arguments.length === 0) return mag;
  const t = s / mag;
  this.mult(t);
  return this;
}

export function vecMag(a, s) {
  const mag = Math.sqrt(a.x * a.x + a.y * a.y);
  if (arguments.length === 1) return mag;
  const t = s / mag;
  const out = new Vec();
  out.set(a).mult(t);
  return out;
}

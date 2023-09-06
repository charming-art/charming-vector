export function mutable2(compute) {
  return function (a) {
    const [x, y] = compute(this, a);
    this.x = x;
    this.y = y;
    return this;
  };
}

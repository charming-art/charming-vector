export function vec$maybe(predicate, callback) {
  if (predicate) callback(this);
  return this;
}

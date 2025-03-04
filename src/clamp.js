import {memberize} from "./_memberize.js";
import {staticize} from "./_staticize.js";

function _clamp(out, a, max) {
  const m0 = out.set(a).mag();
  if (m0 > max) out.mag(max);
}

export const vec$clamp = memberize(_clamp);
export const vecClamp = staticize(_clamp);

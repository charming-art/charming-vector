import { memberize } from "./_memberize";
import { staticize } from "./_staticize";

function _norm(out, a) {
  const mag = a.mag();
  // console.log(mag)
  out.set(a).div(mag);
}

export const vec$norm = memberize(_norm);

export const vecNorm = staticize(_norm);

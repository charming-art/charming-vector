import { memberize } from "./_memberize";
import { staticize } from "./_staticize";

function _mult(out, a, s) {
  out.x = a.x * s;
  out.y = a.y * s;
}

export const vec$mult = memberize(_mult);

export const vecMult = staticize(_mult);

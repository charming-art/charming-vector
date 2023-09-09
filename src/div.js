import { memberize } from "./_memberize";
import { staticize } from "./_staticize";

function _div(out, a, s) {
  out.x = a.x / s;
  out.y = a.y / s;
}

export const vec$div = memberize(_div);

export const vecDiv = staticize(_div);

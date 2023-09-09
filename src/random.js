import { memberize } from "./_memberize";
import { staticize } from "./_staticize";

function _random(out) {
  out.x = Math.random();
  out.y = Math.random();
}

export const vec$random = memberize(_random);

export const vecRandom = staticize(_random);

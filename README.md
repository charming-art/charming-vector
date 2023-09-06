# @charming-art/vector

The JavaScript library for manipulating Euclidean vector.

## Installing

Immutable usage:

```js
import * as cm from "@charming-art/vector";

const v1 = cm.vector2(1, 2);
const v2 = cm.vector2(2, 3);
const v3 = cm.add2(v1, v2);

v3.x; // 2
v3.y; // 5
```

Mutable usage:

```js
const v1 = cm.vector2(1, 2);
const v2 = cm.vector2(2, 3);
v1.add(v2);

v1.x; // 2
v1.y; // 5
```

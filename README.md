# Charming Vector

The JavaScript library for manipulating Euclidean vector, which can be used with [Charming.js](https://charmingjs.org/).

## Installing

Immutable usage:

```js
import * as cm from "charmingjs-vector";

const v1 = cm.vec(1, 2);
const v2 = cm.vec(2, 3);
const v3 = cm.vecAdd(v1, v2);

v3.x; // 2
v3.y; // 5
```

Mutable usage:

```js
const v1 = cm.vec(1, 2);
const v2 = cm.vec(2, 3);
v1.add(v2);

v1.x; // 2
v1.y; // 5
```

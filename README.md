# node-lcgs
linear congruential generators

## install

```
npm i lcgs
```

## usage

### stateful function

```
var lcgs = require("lcgs");

lcgs.srand(123456);
console.log(lcgs.rand());
console.log(lcgs.range(1, 100));
```

### state in object

```
var lcgs = require("lcgs");

// '31' for parameter portable table index
// see lib/portable_lcgs.js
var r = new lcgs.Random(31);
console.log(r.generate());
```

### raw function

```
var lcgs = require("lcgs").lcgs;
var res = lcgs(123456, 233280, 9301, 49297);
console.log(res[0]);
```


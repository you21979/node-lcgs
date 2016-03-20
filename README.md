# node-lcgs

[![NPM](https://nodei.co/npm/lcgs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lcgs)  
[![Build Status](https://secure.travis-ci.org/you21979/node-lcgs.png?branch=master)](https://travis-ci.org/you21979/node-lcgs)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-lcgs/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-lcgs?branch=master)

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


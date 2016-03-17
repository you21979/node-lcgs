'use strict';
var lcgs = require('./lib/lcgs');
var Random = require('./lib/random');
var systemRandom = require('./lib/system');

exports.srand = systemRandom.srand;
exports.rand = systemRandom.rand;
exports.lcgs = lcgs;
exports.Random = Random;

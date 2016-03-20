'use strict';
var lcgs = require('./lib/lcgs');
var plcgs = require('./lib/portable_lcgs');
var Random = require('./lib/random');
var systemRandom = require('./lib/system');

exports.srand = systemRandom.srand;
exports.rand = systemRandom.rand;
exports.range = systemRandom.range;
exports.plcgs = plcgs;
exports.lcgs = lcgs;
exports.Random = Random;

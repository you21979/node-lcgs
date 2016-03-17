'use strict';
var Random = require('./random');

var systemRandom = new Random(31, new Date().getTime());

var srand = exports.srand = function(seed){
    systemRandom.seed = seed;
}

var rand = exports.rand = function(){
    return systemRandom.generate();
}

var range = exports.range = function(min, max){
    return systemRandom.range(min, max);
}

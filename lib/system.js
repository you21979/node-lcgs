'use strict';
var Random = require('./random');

var systemRandom = new Random(31);

var srand = exports.srand = function(seed){
    systemRandom.seed = seed;
}

var rand = exports.rand = function(){
    return systemRandom.generate();
}


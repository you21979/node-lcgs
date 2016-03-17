'use strict';
var lcgs = require('./lcgs');

var Random = module.exports = function(idx, seed){
    this.lcgs = function(seed){ return lcgs(idx, seed) }
    this.seed = seed || 0;
}

Random.prototype.generate = function(){
    var ret = this.lcgs(this.seed);
    this.seed = ret[1];
    return ret[0];
}

Random.prototype.range = function(min, max){
    var rand = this.generate();
    return parseInt(rand * (max - min)) + min;
}


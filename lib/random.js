'use strict';
var plcgs = require('./portable_lcgs');

var Random = module.exports = function(idx, seed){
    this.lcgs = function(seed){ return plcgs(idx, seed) }
    this.seed = seed || 0;
}

Random.prototype.generate = function(){
    var ret = this.lcgs(this.seed);
    this.seed = ret[1];
    return ret[0];
}

Random.prototype.range = function(min, max){
    var rand = this.generate();
    return Math.floor(rand * (max - min + 1)) + min;
}

Random.prototype.frange = function(min, max){
    var rand = this.generate();
    return (rand * (max - min)) + min;
}

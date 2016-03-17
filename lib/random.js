'use strict';
var lcgs = require('./lcgs');

var Random = module.exports = function(idx, seed){
    this.idx = idx;
    this.seed = seed || 0;
}

Random.prototype.generate = function(){
    var ret = lcgs(this.idx, this.seed);
    this.seed = ret[1];
    return ret[0];
}



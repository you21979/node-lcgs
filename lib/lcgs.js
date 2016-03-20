'use strict';
var lcgs = module.exports = function(s, m, a, c){
    var next = (s * a + c) % m;
    return [next * (1/m), next];
}


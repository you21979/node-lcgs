'use strict';
var lcgs = require('./lcgs');

var TBL = [
    [ 6075, 106, 1283 ],
    [ 7875, 211, 1663 ],
    [ 7875, 421, 1663 ],
    [ 6075, 1366, 1283 ],
    [ 6655, 936, 1399 ],
    [ 11979, 430, 2531 ],
    [ 14406, 967, 3041 ],
    [ 29282, 419, 6173 ],
    [ 53125, 171, 11213 ],
    [ 12960, 1741, 2731 ],
    [ 14000, 1541, 2957 ],
    [ 21870, 1291, 4621 ],
    [ 31104, 625, 6571 ],
    [ 139968, 205, 29573 ],
    [ 29282, 1255, 6173 ],
    [ 81000, 421, 17117 ],
    [ 134456, 281, 28411 ],
    [ 86436, 1093, 18257 ],
    [ 121500, 1021, 25673 ],
    [ 259200, 421, 54773 ],
    [ 117128, 1277, 24749 ],
    [ 121500, 2041, 25673 ],
    [ 312500, 741, 66037 ],
    [ 145800, 3661, 30809 ],
    [ 175000, 2661, 36979 ],
    [ 233280, 1861, 42297 ],
    [ 244944, 1597, 51749 ],
    [ 139968, 3877, 29573 ],
    [ 214326, 3613, 45289 ],
    [ 714025, 1366, 150889 ],
    [ 134456, 8121, 28411 ],
    [ 259200, 7141, 54773 ],
    [ 233280, 9301, 49297 ],
    [ 714025, 4096, 150889 ]
];
var plcgs = module.exports = function(idx, seed){
    var p = TBL[idx];
    return lcgs(seed, p[0], p[1], p[2]);
}

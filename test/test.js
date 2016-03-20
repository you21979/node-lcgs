var lcgs = require("..");
var assert = require("power-assert");

describe('lcgs', function() {
    it('simple1', function() {
        lcgs.srand(0);
        assert(lcgs.rand() === 0.2113155864197531);
        assert(lcgs.rand() === 0.21591820987654323);
        assert(lcgs.rand() === 0.08325231481481482);
        assert(lcgs.rand() === 0.7160956790123457);
        assert(lcgs.rand() === 0.8505594135802469);
        assert(lcgs.rand() === 0.056087962962962964);
        assert(lcgs.rand() === 0.7354591049382716);
    })
    it('simple2', function() {
        lcgs.srand(0);
        var min = 1;
        var max = 5;
        for(var i=0; i<1000; i++){
            var r = lcgs.range(min,max);
            assert(r >= min && r <= max);
        }
    })
    it('simple3', function() {
        lcgs.srand(0);
        var min = 1;
        var max = 5;
        for(var i=0; i<1000; i++){
            var r = lcgs.frange(min,max);
            assert(r >= min && r < max);
        }
    })
    it('simple4', function() {
        var r = new lcgs.Random(31, 0);
        assert(r.generate() === 0.2113155864197531);
        assert(r.generate() === 0.21591820987654323);
        assert(r.generate() === 0.08325231481481482);
    })
})


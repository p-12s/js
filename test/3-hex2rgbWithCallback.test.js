var hex2rgb = require('../lib/hex2rgbWithCallback');
var assert = require('assert');

describe('hex2rgbWithCallback', function() {

    it.skip('should throw an error if the value is not a hex code', function(done) {

        hex2rgb('blue', function(error, result) {
            assert(error);
            done();
        });
    });

    it('should return a correctly converted rgb value', function(done) {
        hex2rgb('#fff', function(error, result) {
            assert.strictEqual(error, null);
            assert.deepEqual(result, [255, 255, 255]);
            done();
        });
    });

    it('should return rgb if passed an rgb value');

});

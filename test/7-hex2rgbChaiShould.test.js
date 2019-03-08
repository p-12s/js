var hex2rgb = require('../lib/hex2rgbWithCallback');
var should = require('chai').should();

describe.skip('hex2rgbWithCallback', function() {

    it.skip('should throw an error if the value is not a hex code', function(done) {

        hex2rgb('blue', function(error, result) {
            error.should.exists;
            done();
        });
    });

    it('should return a correctly converted rgb value', function(done) {
        hex2rgb('#fff', function(error, result) {

            // same:
            should.an.strictEqual(error, null);
            should.not.exists(error);

            result.should.deep.equal([255, 255, 255]);

            done();
        });
    });

    it('should return rgb if passed an rgb value');

});

var hex2rgb = require('../lib/hex2rgbWithSinon');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('hex2rgbWithSinon', function() {

    it('should throw an error if the value is not a hex code', function(done) {

        hex2rgb.convert('blue', function(error, result) {
            expect(error).to.exist;
            done();
        });
    });

    it('should return a correctly converted rgb value', function(done) {
        hex2rgb.convert('#fff', function(error, result) {

            expect(error).to.not.exist;
            expect(result).to.deep.equal([255, 255, 255]);

            done();
        });
    });

    it('should return rgb if passed an rgb value');

});

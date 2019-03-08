var hex2rgb = require('../lib/hex2rgbWithSinon');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('hex2rgbWithSinon', function() {

    describe('convert method', function() {

        it('should call parse once', function(done) {

            sinon.spy(hex2rgb, 'parse');

            hex2rgb.convert('#fff', function(error, result) {

                expect(hex2rgb.parse.calledOnce).to.be.true;
                expect(hex2rgb.parse.args[0][0]).to.have.length(6);

                hex2rgb.parse.restore();
                done();
            });
        });

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
    });

    /*describe('parse method', function() {
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
    });*/


});

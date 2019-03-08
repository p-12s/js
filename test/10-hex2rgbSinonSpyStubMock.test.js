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

        it('should always return the result of parse', function(done) {

            sinon.stub(hex2rgb, 'parse').returns([0, 0, 200]);

            hex2rgb.convert('#abc', function(error, result) {
                expect(result).to.deep.equal([0, 0, 200]);

                hex2rgb.parse.restore();
                done();
            });
        });

        it('should always pass a 6 item array to parse', function(done) {

            var mock = sinon.mock(hex2rgb);
            mock.expects('parse').twice().withExactArgs('000000'.split(''));

            hex2rgb.convert('#000000', function(error, result) {

                hex2rgb.convert('#000', function(error, result) {

                    mock.verify();
                    done();
                });

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

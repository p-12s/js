var getPalette = require('../lib/getPaletteFromConfig');
var should = require('chai').should();
var fs = require('fs');

var configFile = process.cwd() + '/config.json';

function writeConfig(config, callback) {
    fs.writeFile(configFile, JSON.stringify(config), callback);
}

describe('getPaletteFromConfig', function() {

    var config = {};

    before(function(done) {
        fs.readFile(configFile, function(err, contents) {
            config = JSON.parse(contents.toString());
            done();
        });
    });

    afterEach(function(done) {
        writeConfig(config, done);
    });

    it('should throw an error if the result is not an array',
        function(done) {

            writeConfig({palette: "string"}, function(err) {
                should.Throw(getPalette, /Palette is not an array/);
                done();
            });

        });

    it('should return an array with 3 items by default', function() {
        var palette = getPalette();

        palette.should.be.an('array').with.length(3);
    });
});

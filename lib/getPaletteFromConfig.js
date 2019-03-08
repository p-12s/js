var fs = require('fs');

function getCongig() {
    return JSON.parse(fs.readFileSync(process.cwd() + '/config.json').toString());
}

module.exports = function() {

    var palette = getCongig().palette;

    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }
    return palette;
};


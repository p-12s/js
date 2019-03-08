function getData() {
    return ['#ddd', '#ff5512', '#75d709'];
}

module.exports = function(fetch) {

    fetch = fetch || getData();
    var palette = fetch;

    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }
    return palette;
};


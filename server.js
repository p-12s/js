var express = require('express');
var app = express();
var getPalette = require('./lib/getPalette');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', { palette: getPalette() });
});

app.listen(9000, function() {
    console.log('app listening on port 3000');
});





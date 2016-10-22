var express = require('express');
var app = express();


app.use(express.static('unbundled'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(6044, '0.0.0.0')

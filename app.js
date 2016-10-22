/*global express, path */
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static('unbundled'));
app.use(express.static(path.join(__dirname, 'unbundled')));


app.get('/*', function(req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT || 5000);

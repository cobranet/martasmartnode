var express = require('express');
var app = express();


app.use(express.static('unbundled'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT || 5000);

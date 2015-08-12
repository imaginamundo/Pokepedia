var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// Index
app.get ('/', function(req, res) {
    res.render('index');
});

// Search
app.get ('/search', function(req, res) {
    res.render('about');
});

// Favorites
app.get ('/favorites', function(req, res) {
    res.render('about');
});

// Config
app.get ('/config', function(req, res) {
    res.render('about');
});

// Content
app.use('/content', express.static('content'));

var port = Number(process.env.PORT || 5000);
app.listen(port);

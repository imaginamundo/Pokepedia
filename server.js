// Express
var express = require('express');
var app = express();

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// Index
app.get ('/', function(req, res) {
    // Pokemon List
    var pokemon = [
        {
            number: "001",
            name: "bulbasaur",
            type: [
                "grass",
                "poison"
            ]
        },
        {
            number: "002",
            name: "ivysaur",
            type: [
                "grass",
                "poison"
            ]
        },
        {
            number: "003",
            name: "venossaur",
            type: [
                "grass",
                "poison"
            ]
        },
        {
            number: "004",
            name: "charmander",
            type: [
                "fire"
            ]
        },
        {
            number: "005",
            name: "charmeleon",
            type: [
                "fire"
            ]
        },
        {
            number: "006",
            name: "charizard",
            type: [
                "fire",
                "flying"
            ]
        },
        {
            number: "007",
            name: "squirtle",
            type: [
                "water"
            ]
        },
        {
            number: "008",
            name: "wartortle",
            type: [
                "water"
            ]
        },
        {
            number: "009",
            name: "blastoise",
            type: [
                "water"
            ]
        },
        {
            number: "010",
            name: "caterpie",
            type: [
                "bug"
            ]
        }
    ];

    var data = {
        pokemon: pokemon,
    };

    res.render('index', data);
});

// Search
app.get ('/filter', function(req, res) {
    res.render('filter');
});

// Favorites
app.get ('/favorites', function(req, res) {
    res.render('favorites');
});

// Configurations
app.get ('/config', function(req, res) {
    res.render('config');
});

// Content
app.use('/content', express.static('content'));

// Server port
var port = Number(process.env.PORT || 5000);
app.listen(port);

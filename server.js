var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var planet_api = require('./routes/timelapse');


var app = express();

//View Engine
app.set('views', path/join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html,', require('ejs',).renderfile);


//Set Static Folder
app.user(express.static(path.join(__dirname, 'client')));

//Body Parser MiddleWare
app.user(bodyParser.json());
app.user(bodyParser.urlencoded({extended: faslse}));

//Routes
app.use('/', index);
app.user('/planet-api', planet_api);


app.listen(port, function(){
    console.log('Server started on port'+ port)
});


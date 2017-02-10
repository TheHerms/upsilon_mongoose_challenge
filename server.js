var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var person = require('./routes/person');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/upsilon');

mongoose.connection.on('connected', function(){
  console.log('Sweet connected to database');
});

mongoose.connection.on('error', function(){
  console.log('Bad not connected to database');
});

app.use(express.static('public'));
app.use('/person', person);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function (req, res) {
  console.log('Now listening on ', app.get('port'));
});

const express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var dbSchemas = require('./dbSchemas');

const app = express();
const port = 3000;
//Routing modules
var index_ROUTING = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

var options = {
  root : __dirname + '/public/'
};

//Routing
index_ROUTING(app, options);

app.listen(port, function(err) {
  if(err) {
    return console.log('something bad happened', err);
  }
  console.log('Server listening on ' + port);
});
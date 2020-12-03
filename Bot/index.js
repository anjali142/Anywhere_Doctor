var express = require('express');
var app = express();
var port = 8081;

// start the server
app.listen(port, function() {
  console.log('App started at port 8081');
});

// route our app
app.get('/', function(req, res) {
  res.send('hello world!');
});
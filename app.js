var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/docdoc', 
{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) 
{
	console.log("connection succeeded!");
});

// start the server
app.listen(port, function() 
{
	console.log('App started at port 8081');
});

// route our app
app.get('/', function(req, res) 
{
	res.sendFile('index.html',{root:'./'});
});

app.get('/Bot',function(req,res) {
    res.sendFile('index.html',{root:'./Bot'});
});
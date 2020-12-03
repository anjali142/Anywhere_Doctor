
var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 8081;

app.use(express.static(__dirname + '/views')); 										     // html
app.use(express.static(__dirname + '/public'));											 // js, css, images
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
const server = app.listen(process.env.PORT || 8081, () => 
{
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// route our app
app.get('/', function(req, res) 
{
	res.sendFile('index.html',{root:'./'});
});

// route our bot
app.get('/bot', function(req, res) 
{
	res.sendFile('bot.html',{root:'./views'});
});
var express = require( 'express' );
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedparser = bodyParser.urlencoded( {extended: false} );
var portDecision = process.env.PORT || 4000;

app.listen( portDecision, function(){
  console.log('server is listening on port 4000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/index.html'));
});

app.post('/calculate', urlencodedparser, function(req, res){
  console.log('serverpost calculate hit', req.body);
});

app.use(express.static('public'));

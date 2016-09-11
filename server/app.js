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
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var oper = req.body.operator;

  var doWork = function(){
    if (oper == '+') {
      var workAdd = x + y;
      var sendAdd = {
        result: workAdd,
      };
      res.send(sendAdd);
    }else if (oper == '-') {
      var workSub = x - y;
      var sendSub = {
        result: workSub,
      };
      res.send(sendSub);
    }else if (oper == '*'){
      var workMult = x * y;
      var sendMult = {
        result: workMult,
      };
      res.send(sendMult);
    }else if (oper == '/'){
      var workDiv = x / y;
      var sendDiv = {
        result: workDiv,
      };
      res.send(sendDiv);
    }
    console.log(res.send);
  };
  doWork();
});

app.use(express.static('public'));

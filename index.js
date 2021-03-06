var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var server = express();

var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
server.use(express.static(__dirname+'/public'));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now listening to port:', port);
});

var express = require('express');
var http = require('http');
var path = require('path');
var socket = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socket(server);

app.set('port', 5000);
app.use('/public', express.static(_dirname + '/public'));


app.get('/', function(request, response){
	response.sendFile(path.join(_dirname, 'index.html'));
});


server.listen(5000, function(){
	console.log("Server is running!");
});

io.on('connection', function(socket) {
});

setInterval(function() {
  io.sockets.emit('message', 'hi!');
}, 1000);


//io.sockets.on('connection', newConnection);
/*
function newConnection(socket){
	console.log("new connection @ " + socket.id);

	socket.on('state', stateMsg);

	function stateMsg(data){
		console.log(data);
		socket.broadcast.emit('state', data);
		//io.sockets.emit('mouse', data);
	}
}*/
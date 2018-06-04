var express = require('express');
var app = express();
var server = app.listen(3000, "0.0.0.0");

app.use(express.static('public'));
console.log("Server is running!");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log("new connection @ " + socket.id);

	socket.on('state', stateMsg);

	function stateMsg(data){
		console.log(data);
		socket.broadcast.emit('state', data);
		//io.sockets.emit('mouse', data);
	}
}
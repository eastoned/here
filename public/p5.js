//regular sketch
var socket;
var status;

var xPos, yPos;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(230);
	noStroke();
	xPos = random(windowWidth);
	yPos = random(windowHeight);
	status = 0;
	socket = io.connect('http://localhost:3000');
	socket.on('state', newState);
	var data = {
		value: status,
		x: xPos,
		y: yPos
	}

	socket.emit('state', data);

}

function newState(data){
	fill(data.value, 0, 175);
	ellipse(data.x, data.y, 10, 10);
}

function draw(){
	fill(status);
	ellipse(xPos, yPos, 10, 10);
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
    		status = 200;
  	} else if (keyCode === RIGHT_ARROW) {
    		status = 175;
  	}

	var data = {
		value: status,
		x: xPos,
		y: yPos
	}

	socket.emit('state', data);
	console.log(data);
}

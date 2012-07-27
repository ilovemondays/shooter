var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var shipImage;

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
	shipImage = new Image();
	shipImage.src = "img/ship1.png";
	shipImage.onload = eventAssetsLoaded;
}

function eventAssetsLoaded() {
	canvasApp();
}

function canvasApp() {
	var easeValue = .05;
	
	// start
	var p1 = {
		x:240, 
		y:-20
	};

	// end
	var p2 = {
		x:140, 
		y:470
	};

	// ship data
	var ship = {
		x:p1.x, 
		y:p1.y, 
		endx:p2.x, 
		endy:p2.y, 
		velocityx:0, 
		velocityy:0
	};

	setInterval(drawScreen, 15);

	function drawScreen() {
		// calc the disctance
		var dx = ship.endx - ship.x;
		var dy = ship.endy - ship.y;

		// calc the velocity
		ship.velocityx = dx * easeValue;
		ship.velocityy = dy * easeValue;

		ship.x += ship.velocityx;
		ship.y += ship.velocityy;

		context.fillStyle = '#000000';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.drawImage(shipImage, ship.x, ship.y);
	}
}
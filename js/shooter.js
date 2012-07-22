//var spaceShip = new Image();
//spaceShip.src = "img/ship1.png";
//spaceShip.addEventListener('load', eventShipLoaded, false);
var cHeight = document.getElementById("canvas").height;
var cWidth = document.getElementById("canvas").width;
var fps = 60;
var intTest = 1;

window.addEventListener('load', init, false);

function canvasSupport() {				
	return Modernizr.canvas;				
}

function init() {				

	if(typeof gameLoop != "undefined") clearInterval(gameLoop);
	gameLoop = setInterval(drawGame, 1000/fps);			
}

// keyboard controll
window.addEventListener('keydown',function(e){
		var key = e.which;
		if(key == "37") d = 11111;
		if(key == "38") d = 11111;
		if(key == "39") d = 11111;
		if(key == "40") d = 11111;
	},false);

// draw on canvas
function drawGame() {		

	if (!canvasSupport()) {
		return;				
	} else {			
		var theCanvas = document.getElementById("canvas");
		var context = theCanvas.getContext("2d");
	}
	
	drawScreen();
	intTest++;
	
	function drawScreen() {
		context.fillStyle = '#eaeaea';
		context.fillRect(0, 0, 640, 360);
		context.fillStyle = '#ff5599';
		context.fillRect(intTest, 0, 40, 10);
		
	}

}
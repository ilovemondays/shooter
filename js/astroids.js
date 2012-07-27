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
	var canvas = document.getElementById("canvas");	
	if(!canvas || !canvas.getContext) {
		return;
	}

	var context = canvas.getContext("2d");
	if(!context) {
		return;
	}

	// canvasApp level variables
	var shipState = 0 // 0 = static, 1 = thrust

	drawScreen();

	function drawScreen() {
		// update the shipState
		shipState++;
		if(1 < shipState) {
			shipState = 0;
		}

		// draw background and text
		context.fillStyle = '#000000';
		context.fillRect(0, 0, 200, 200);
		context.fillStyle = '#ffffff';
		context.font = '20px helvetica';
		context.textBaseline = 'top';
		context.fillText("Player Ship - Static", 0, 180);

		// draw ship
		context.strokeStyle = '#ffffff';
		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(19, 19);
		context.lineTo(10, 9);
		context.moveTo(9, 9);
		context.lineTo(0, 19);
		context.lineTo(9, 0);

		if (1 == shipState) {
			// draw thrust
			context.moveTo(8, 13);
			context.lineTo(11, 13);
			context.moveTo(9, 14);
			context.lineTo(9, 18);
			context.moveTo(10, 14);
			context.lineTo(10, 18); 
		}

		context.stroke();
		context.closePath();
	}

	const FRAME_RATE = 30;
	var intervalTime = 1000/FRAME_RATE;
	setInterval(drawScreen, intervalTime);
}
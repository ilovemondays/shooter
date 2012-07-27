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
	if (!canvas || !canvas.getContext) {
		return;
	}

	var context = canvas.getContext("2d");
	if(!context) {
		return;
	}	

	function drawScreen() {
		context.fillStyle = '#ffaaaa';
		context.fillRect(0, 0, 200, 200);
		context.fillStyle = '#000000';
		context.font = '20px _sans';
		context.textBaseline = 'top';
		context.fillText("Canvas!", 0, 0);
	}

	const FRAME_RATE = 30;
	var intervalTime = 1000/FRAME_RATE;
	setInterval(drawScreen, intervalTime);
}
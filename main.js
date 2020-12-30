canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");
playerX = 10;
playerY = 10;
blockWidth = 30;
blockHeight = 30;
var playerObject = "";
var blockObject = "";
function clear() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function playerUpdate() {
	fabric.Image.fromURL("sm.png", function(Img){
		playerObject = Img;
		playerObject.scaleToWidth(200);
		playerObject.scaleToHeight(150);
		playerObject.set({
			top:playerY,
			left:playerX
		});
		canvas.add(playerObject);
	});
}
function newImg(get_img) {
	fabric.Image.fromURL(get_img, function(Img){
		blockObject = Img;
		blockObject.scaleToWidth(blockWidth);
		blockObject.scaleToHeight(blockHeight);
		blockObject.set({
			top:playerY,
			left:playerX
		});
		canvas.add(blockObject);
	});
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
	keyPressed = e.keyCode;
    console.log(keyPressed);
	if (keyPressed == "70") {
		newImg("face.png");
		console.log("F");
	}
	if (keyPressed == "66") {
		newImg("torso.png");
		console.log("B");
	}
	if (keyPressed == "84") {
		newImg("legs.png");
		console.log("T");
	}
	if (keyPressed == "82") {
		newImg("righthand.png");
		console.log("R");
	}
	if (keyPressed == "76") {
		newImg("lefthand.png");
		console.log("L");
	}


	if (keyPressed == "38") {
		up();
		console.log("up");
	}
	if (keyPressed == "40") {
		down();
		console.log("down");
	}
	if (keyPressed == "37") {
		left();
		console.log("left");
	}
	if (keyPressed == "39") {
		right();
		console.log("right");
	}


	if (e.shiftKey == true && keyPressed == "80") {
		console.log("P and Shift keys pressed together");
		blockWidth = blockWidth + 10;
		blockHeight = blockHeight + 10;
		document.getElementById("current_width").innerHTML = blockWidth;
		document.getElementById("current_height").innerHTML = blockHeight;
	}
	if (e.shiftKey == true && keyPressed == "77") {
		console.log("M and Shift keys pressed together");
		blockWidth = blockWidth - 10;
		blockHeight = blockHeight - 10;
		document.getElementById("current_width").innerHTML = blockWidth;
		document.getElementById("current_height").innerHTML = blockHeight;
	}
}


function up() {
	if (playerY >= 20) {
		playerY = playerY - blockHeight;
		console.log("Block height = " + blockHeight);
		console.log("When Up arrow key pressed, X = " + playerX + " Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
function down() {
	if (playerY <= 400) {
		playerY = playerY + blockHeight;
		console.log("Block height = " + blockHeight);
		console.log("When Down arrow key pressed, X = " + playerX + " Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
function left() {
	if (playerX >= 0) {
		playerX = playerX - blockWidth;
		console.log("Block width = " + blockWidth);
		console.log("When Left arrow key pressed, X = " + playerX + " Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
function right() {
	if (playerX <= 870) {
		playerX = playerX + blockWidth;
		console.log("Block width = " + blockWidth);
		console.log("When Right arrow key pressed, X = " + playerX + " Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
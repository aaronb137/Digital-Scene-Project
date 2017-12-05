// Prepare Turtle to Draw
hide();
penUp();

// First draw the background
//drawBackground();

//drawSky
moveTo(160,80);

//drawBackground();
  penColor("Skyblue");
  dot(500);
  penUp(0);
  moveForward(0);
penWidth(150);

//drawWings();




//drawBirds
moveTo(randomNumber(0, 320),randomNumber(0, 145));

//drawBirds();
penColor("Black");
dot(5);
penUp(2);
moveForward();
penWidth(200);

//drawBirds();
moveTo(randomNumber(0, 320),randomNumber(0, 145));

//drawBirds();
penColor("Black");
dot(5);
penUp(0);
moveForward();
penWidth(100);

drawAllHills();
function drawAllHills() {
  draw1Hill();
  drawBottomHill();
}
function draw1Hill() {
  moveTo(-30, 255);
  for (var i = 0; i < 4; i++) {
    penRGB(255, 222, 173, 1);
    dot(95);
    move(135, 0);
  }
}
function drawBottomHill() {
  moveTo(-30, 400);
  for (var i = 0; i < 4; i++) {
    penRGB(255, 222, 173, 1);
    dot(135);
    move(135, 0);
  }
}
moveTo(320, 1);
penColor("yellow");
dot(90);

moveTo(160, 230);
penDown();


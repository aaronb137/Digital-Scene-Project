// First draw the background
//drawBackground();
hide();
//drawSky
moveTo(160,80);

//drawBackground();
  penColor("Skyblue");
  dot(500);
  penUp(0);
  moveForward(0);
  penWidth(150);
drawAllHills();
penUp();
drawSun();
drawAllCactuses();
drawAllBirds();
function drawBirds() {
 moveTo(randomNumber(0, 320),randomNumber(0, 145));
 penDown();
 turnRight(randomNumber(90, 100));
 penWidth(7);
penColor("Black");
 arcLeft(90, 8);
arcRight(160, 10);
dot(3);
turnRight(270);
arcRight(160, 10);
 arcLeft(90, 8);
penUp(); 
}
function drawAllBirds() {
  for (var i = 0; i < 4; i++) {
    drawBirds();
  }
}
function drawAllHills() {
  draw1Hill();
  drawBottomHill();
}
function draw1Hill() {
  moveTo(-30, 290);
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
function drawSun() {
  moveTo(320, 1);
  penColor("yellow");
  dot(90);
}
function drawAllCactuses() {
  for (var i = 0; i < 3; i++) {
    moveTo(randomNumber(-25, 335), 450);
    penDown();
    drawCactus();
    penUp();
  }
}
function drawCactus() {
  penColor("green");
  penWidth(10);
  moveForward(60);
  arcLeft(90, 25);
  arcRight(90, 25);
  moveForward(60);
  arcRight(180, 15);
  moveForward(45);
  arcLeft(180, 10);
  moveForward(75);
  arcRight(180, 20);
  moveForward(125);
  arcLeft(180, 8);
  moveForward(45);
  arcRight(180, 15);
  moveForward(75);
  arcRight(90, 25);
  arcLeft(90, 20);
}

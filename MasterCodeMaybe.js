hide();
drawSkyBackground();
drawAllHills();
drawSun();
drawAllCactuses();
drawAllBirds();
drawAllRocks();

function drawBirds() {
  moveTo(randomNumber(0, 320),randomNumber(0, 145));
  penDown();
  turnRight(randomNumber(90, 100));
  drawWings();
}
function drawWings() {
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
    turnTo(-210);
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
  penDown();
  turnRight(90);
  penRGB(255, 222, 173, 1);
  penWidth(200);
  moveForward(400);
  }
function drawSun() {
  penUp();
  moveTo(randomNumber(0, 320), 1);
  penColor("yellow");
  dot(90);
}
function drawAllCactuses() {
    moveTo(randomNumber(-25, 140), 450);
    penDown();
    turnTo(0);
    drawCactus();
    penUp();
    turnLeft(180);
    moveTo(randomNumber(170, 330), 450);
    penDown();
    turnTo(0);
    drawCactus();
    penUp();
    turnLeft(180);
  }
function drawSkyBackground() {
  penRGB(randomNumber(0,70), randomNumber(150,220), randomNumber(230,255), 1);
  dot(500);
  penUp(0);
  moveForward(0);
  penWidth(150);
}
function drawCactus() {
  penColor("green");
  penWidth(randomNumber(25, 35));
  drawLeftHalfCactus();
  drawRightHalfCactus();
  drawMiddleCactus();
}
function drawLeftHalfCactus() {
  moveForward(60);
  turnTo(90);
  arcLeft(65, 42);
  turnTo(0);
  moveForward(40);
  moveBackward(40);
  turnTo(180);
  moveForward(14);
}
function drawRightHalfCactus() {
  arcRight(90, 15);
  moveForward(60);
  arcRight(90, 10);
  moveForward(90);
  penWidth(30);
  moveBackward(98);
  turnTo(180);
  turnRight(90);
}
function drawMiddleCactus() {
  penUp();
  moveBackward(40);
  turnLeft(90);
  penDown();
  penWidth(30);
  moveBackward(150);
}
function drawAllRocks() {
  for (var i = 0; i < 4; i++) {
    drawRock(randomNumber(100, 245));
  }
}
function drawRock(number) {
  penRGB(number, number, number, 1);
  moveTo(randomNumber(0, 450), 450);
  dot(12);
}


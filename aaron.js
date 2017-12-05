drawCactus();


//drawAllCactuses();
//drawAllRocks();

//allCactuses function
//need specific (x,y) for **moveTo** so its not in sky and on the ground
function drawAllCactuses() {
 for (var i = 0; i < 2; i++) {
  moveTo(randomNumber(0,0), randomNumber(0,0)); 
  drawCactus();
 }
}

//allRocks function
//need specific (x,y) for **moveTo** so its not in sky and on the ground and not on other elements
function drawAllRocks() {
for (var i = 0; i < 4; i++) {
  moveTo(randomNumber(0,0), randomNumber(0,0));
  drawRock();
  }
}
//turns turtle around
function turnAround() {
  turnRight();
  turnRight();
}

//draw one cactus
//penRGB values for cactus green
//find penRGB values for black (thorns)
function drawCactus() {
  drawCactusBody();
}

//draw one rock
//find rgb value for grey and add some transparency
//find rgb value for white, add transparency and add detail over grey
function drawRock() {
  penRGB(0,0,0,0)
  drawCircle();
  penRGB(0,0,0,0)
  drawRockDetails();
}
//need to make code more efficient
function drawCactusBody() {
  penRGB(92,117,94);
  penWidth(10);
  moveForward(70);
  penUp();
  moveTo(125,240);
  penDown();
  moveForward(70);
  arcLeft(90,30);
  arcRight(90,20);
  arcRight(35,50);
  arcRight(140,20);
  moveForward();
  turnAround();
  penUp();
  moveTo(125,105);
  turnRight(2.5);
  penDown();
  moveForward(65);
  arcRight(180,15);
  moveTo(164,136);
  arcLeft(180,10);
  moveForward();
  arcRight(180,15);
  arcRight(90,60);
}




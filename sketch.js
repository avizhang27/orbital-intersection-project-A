let xPos = 300;
let yPos = 300;
let xSpeed = 3;
let ySpeed = 1;
let pg;
let angle = 0;
let angleSpd = 1;
let angleAccel = 0;
let ballX = [];
let ballY = [];
function setup() {
  createCanvas(600, 600);
}

function draw() {
  //basic settings
  strokeWeight(0.4);
  stroke(255);
  fill(220, 50);

  //bouncing ball pattern
  circle(xPos, yPos, 10);
  let r = map(mouseX, 0, 255, 0, 255, 50);
  let b = map(mouseY, 0, 255, 0, 255, 50);
  let g = 100;
  fill(r, g, b, 20);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;
  angleMode(DEGREES);

  angleSpd += angleAccel;
  angle += angleSpd;

  //movement pattern based to mouseX
  angleAccel = map(mouseX, 0, width, -0.03, 0.03);
  angleSpd = constrain(angleSpd, -0.2, 0.2);

  angle += angleSpd;

  if (xPos > width || xPos < 0) {
    xSpeed = xSpeed * -1; //invert the value
  }

  if (yPos > height || yPos < 0) {
    ySpeed = ySpeed * -1;
  }

  //orbiting shapes
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, 20, 20);
  circle(100, 0, 25);
  push();
  translate(30, 30);
  rotate(angle * 3);
  circle(0, 0, 10);
  push();
  translate(100, 0);
  rotate(angle * 1.5);
  circle(50, 0, 17);
  pop();
  push();
  rotate(angle * 2);
  circle(30, 0, 15);
  rotate(angle);
  circle(20, 0, 5);
  pop();
  pop();
  pop();

  //if this line is deleted, mouseIsPressed is somehow undefined, and I couldn't debug it without other variables being undefined. keyIsPressed makes no difference in the code and can be ignored.
  if (keyIsPressed) {
    // background(220);
  }

  if (mouseIsPressed) {
    //increases size of bouncing line and adds color
    //  background(220);
    circle(xPos, yPos, 15);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    angleMode(DEGREES);

    angleSpd += angleAccel;
    angle += angleSpd;

    //the entire pattern will move faster when mouse is pressed
    angleAccel = map(mouseX, 0, width, -0.01, 0.01);
    angleSpd = constrain(angleSpd, -0.2, 0.2);

    angle += angleSpd;

    if (xPos > width || xPos < 0) {
      console.log(xPos);
      xSpeed = xSpeed * -1;
    }

    if (yPos > height || yPos < 0) {
      ySpeed = ySpeed * -1;
      console.log(yPos);
    }
  }
}

//draw a layered circle where the mouse pressed
function mousePressed() {
  ballX.push(mouseX);
  ballY.push(mouseY);
  for (let i = 0; i < ballX.length; i++) {
    let xPos = ballX[i];
    let yPos = ballY[i];
    drawBalls(mouseX, mouseY);
  }
}
//function called in mousePressed which codes for the circle
function drawBalls(xPos, yPos) {
  circle(xPos, yPos, random(5, 35));
}

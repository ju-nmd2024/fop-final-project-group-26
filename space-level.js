// Character Variables
let comet;
let saucer;

// Game Variables
let score = 0; // Player's score
let lives = 3; // Player's lives
let gameActive = true; // Flag to check if the game is active

// Brick Variables
let bricks = [];
let rows = 4;
let cols = 6;
let brickWidth = 100;
let brickHeight = 50;
let spaceX = 10; // space between bricks x
let spaceY = 10; // space between bricks y
let offsetX = 75; // offset x direction
let offsetY = 50; // offset y direction

//Stars
// code modified from Garritt's video example
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function setup() {
  createCanvas(800, 600);
}

// Ball class
class cometBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moveX = 2;
    this.moveY = -6;
  }

  // draw the comet
  drawComet() {
    stroke(2, 151, 214);
    strokeWeight(4);
    fill(204, 234, 252);
    circle(this.x, this.y, this.r * 2);
  }

  // comet movements
  moveComet() {
    this.x = this.x + this.moveX;
    this.y = this.y + this.moveY;
  }

  // check canvas boundaries
  checkCometBoundaries() {
    // left or right boundary
    if (this.x - this.r <= 0 || this.x + this.r >= width) {
      this.moveX = this.moveX * -1;
    }

    // top or bottom boundary
    if (this.y - this.r <= 0 || this.y + this.r >= height) {
      this.moveY = this.moveY * -1;
    }
  }
}

// Paddle class
class spacePaddle {
  constructor(x) {
    this.x = x;
    this.y = height - 40;
    this.w = 120;
    this.h = 20;
  }

  drawSpacePaddle() {
    this.x = mouseX;
    noStroke();

    // flying saucer
    fill(108, 148, 104);
    ellipse(this.x, this.y, this.w * 1.5, this.h * 1.5);

    // dome
    fill(200, 204, 200);
    arc(this.x, this.y - this.h / 4, this.w, this.h, PI, 0, CHORD);

    // details
    fill(169, 209, 165);
    rect(this.x - this.w / 2, this.y, this.w, this.h / 4, this.h / 4);

    // lights
    fill(255, 0, 0); // red light
    ellipse(this.x - this.w / 3, this.y + this.h / 3, this.h / 2);
    fill(0, 255, 0); // green light
    ellipse(this.x, this.y + this.h / 3, this.h / 2);
  }

  hitSpacePaddle(comet) {
    if (
      comet.y + comet.r >= this.y &&
      comet.x > this.x - this.w / 2 &&
      comet.x < this.x + this.w / 2
    ) {
      comet.moveY = comet.moveY * -1;
    }
  }
}
class spaceBrick {
  constructor(x, y, w, h, r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r; // gives rounded edges
  }

  drawAsteroid() {
    noStroke();
    fill(112, 106, 89);
    rect(this.x, this.y, this.w, this.h, this.r);
    fill(54, 51, 43);
    ellipse(this.x + this.h / 2, this.y + this.r, this.w / 3, this.h / 2);
    ellipse(
      this.x + this.h * 1.5,
      this.y + this.r * 1.5,
      this.w / 4,
      this.h / 3
    );
    ellipse(
      this.x + this.h + this.r / 2,
      this.y + this.r / 2,
      this.w / 6,
      this.h / 4
    );
  }
  // remove brick when colliding with ball
  collision(comet) {
    return (
      comet.x + comet.r > this.x &&
      comet.x - comet.r < this.x + this.w &&
      comet.y + comet.r > this.y &&
      comet.y - comet.r < this.y + this.h
    );
  }
}

// brick grid
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
    let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
    bricks.push(new spaceBrick(x, y, brickWidth, brickHeight, 20));
  }
}

// Space Scenery
function spaceScenery() {
  //planets
  noStroke();
  fill(227, 85, 57);
  ellipse(90, 400, 120);
  fill(237, 113, 71);
  ellipse(115, 415, 45);
  ellipse(90, 370, 30);
  ellipse(60, 400, 20);
  ellipse(75, 410, 10);

  fill(78, 167, 173);
  ellipse(650, 500, 150);
  noFill();
  stroke(240, 232, 129);
  strokeWeight(8);
  push();
  rotate(-0.4);
  arc(404, 712, 160, 50, 0, PI);
  pop();

  noStroke();
  fill(201, 136, 60);
  ellipse(250, 25, 30);
  fill(117, 84, 45);
  ellipse(245, 20, 5);
  ellipse(255, 30, 10);

  // flying saucers
  push();
  rotate(-0.2);
  fill(152, 154, 156);
  ellipse(500, 425, 50, 20);
  fill(186, 216, 247);
  arc(500, 425, 30, 30, PI, 0, CHORD);
  fill(40, 44, 48);
  circle(500, 430, 3);
  circle(510, 429, 3);
  circle(490, 429, 3);
  circle(520, 425, 3);
  circle(480, 425, 3);
  pop();
}

comet = new cometBall(200, 200, 20);
saucer = new spacePaddle(width / 2);

function draw() {
  background(15, 15, 15);

  // code from Garritt's video example
  for (let index in starX) {
    noStroke();
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  spaceScenery();

  // draw brick grid
  for (let brick of bricks) {
    brick.drawAsteroid();
  }

  // for loop explained (backwards iteration) by chatgpt https://chatgpt.com/share/674472ad-afd0-8007-99ef-06fabfa4b8a9
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].collision(comet)) {
      bricks.splice(i, 1);
      comet.moveY = comet.moveY * -1; // ball bounces back off of brick
    }
  }

  comet.drawComet();
  comet.moveComet();

  comet.checkCometBoundaries();

  saucer.drawSpacePaddle();
  saucer.hitSpacePaddle(comet);

  // Display score and lives
  textSize(24);
  textFont("Courier New");
  fill(255);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 40);
}

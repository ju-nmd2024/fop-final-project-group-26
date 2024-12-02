// Character Variables
let pearl;
let shell;
let c1 = color(129, 210, 227);
let c2 = color(71, 116, 125);

// Fish Variables
let fishX = [160, 180, 200];
let fishY = [400, 435, 465];
let fishSpeed = [-1.5, -1.3, -1.5];
let fishWidth = [70, 70, 50];
let fishHeight = [15, 15, 10];

// Game Variables
let score = 0; // Player's score
let lives = 3; // Player's lives
let gameActive = true; // check if the game is active
let isBoosting = false; // check if boost is active or not

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

function setup() {
  createCanvas(800, 800);
}

// Ball class
class pearlBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moveX = 2;
    this.moveY = -4;
  }

  // draw the pearl
  drawPearl() {
    stroke(201, 183, 201);
    strokeWeight(3);
    fill(255, 225, 240);
    circle(this.x, this.y, this.r * 2);
  }

  // pearl movements
  movePearl() {
    this.x = this.x + this.moveX;
    this.y = this.y + this.moveY;
  }

  // check canvas boundaries
  checkPearlBoundaries() {
    // Left or right boundary
    if (this.x - this.r <= 0 || this.x + this.r >= width) {
      this.moveX *= -1;
    }

    // Top boundary
    if (this.y - this.r <= 0) {
      this.moveY *= -1;
    }

    // Bottom boundary: Lose life
    if (this.y - this.r > height) {
      lives--;
      if (lives > 0) {
        // Reset pearl position
        this.x = width / 2;
        this.y = height - 100;
        this.moveX = 2;
        this.moveY = -4;
      } else {
        gameActive = false; // End game
        noLoop();
      }
    }
  }
}

// Paddle class
class shellPaddle {
  constructor(x) {
    this.x = x;
    this.y = height - 40;
    this.w = 120;
    this.h = 20;
    this.originalW = this.w; //store original width
    this.timer = 0; //timer to track size duration
  }

  drawShellPaddle() {
    this.x = mouseX;
    noStroke();

    // clam shell
    stroke(137, 94, 166);
    strokeWeight(2.5);
    strokeJoin(ROUND);
    fill(218, 200, 230);
    arc(this.x, this.y, this.w, this.h * 2, 0, PI, CHORD);
    arc(this.x - 75, this.y, this.w / 4, this.h - 10, 0, PI, CHORD);

    //reset size when timer runs out, from chatgpt https://chatgpt.com/share/67489f6e-6e70-8007-b3e9-f633edbcd5e9
    if (this.timer > 0) {
      this.timer--;
    } else {
      this.w = this.originalW;
    }
  }

  // increaseSize function from https://chatgpt.com/share/67489f6e-6e70-8007-b3e9-f633edbcd5e9
  increaseSize(duration) {
    this.w = this.originalW * 1.5; // increase size
    this.timer = duration; // set timer
  }

  hitShellPaddle(shell) {
    if (
      shell.y + shell.r >= this.y &&
      shell.x > this.x - this.w / 2 &&
      shell.x < this.x + this.w / 2
    ) {
      shell.moveY = shell.moveY * -1;
    }
  }
}

class chestBrick {
  constructor(x, y, w, h, r, isSpecial = false) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r; // gives rounded edges
    this.isSpecial = isSpecial; //activate special bricks
  }

  drawChest() {
    noStroke();

    if (this.isSpecial) {
      fill(138, 106, 69); //change colour for special bricks
    } else {
      fill(46, 30, 1);
    }

    rect(this.x, this.y, this.w, this.h, this.r, this.r, 0);
    fill(77, 58, 24);
    rect(this.x, this.y + this.r, this.w, this.h / 5);
    fill(199, 144, 42);
    rect(this.x + 40, this.y + this.r, this.w / 5, this.h / 4);
  }
  // remove brick when colliding with ball
  collision(pearl) {
    return (
      pearl.x + pearl.r > this.x &&
      pearl.x - pearl.r < this.x + this.w &&
      pearl.y + pearl.r > this.y &&
      pearl.y - pearl.r < this.y + this.h
    );
  }
}

// brick grid
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
    let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
    let isSpecial = Math.random() < 0.08; // 8% chance of being special
    bricks.push(new chestBrick(x, y, brickWidth, brickHeight, 15, isSpecial));
  }
}

// Underwater Scenery
function oceanScenery() {
  // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }

  // fish loop
  for (let i = 0; i < fishX.length; i++) {
    fishX[i] = fishX[i] + fishSpeed[i];

    if (fishX[i] < -100) {
      fishX[i] = width + 50;
    }

    // draw fish
    noStroke();
    fill(54, 86, 92);
    ellipse(fishX[i] + 5, fishY[i], fishWidth[i], fishHeight[i]);
    triangle(
      fishX[i] + fishWidth[i] / 2,
      fishY[i],
      fishX[i] + fishWidth[i] / 2 + 15,
      fishY[i] + fishHeight[i],
      fishX[i] + fishWidth[i] / 2 + 15,
      fishY[i] - fishHeight[i]
    );
  }

  //sand
  noStroke();
  fill(209, 163, 88);
  beginShape();
  vertex(0, 600);
  bezierVertex(0, 580, 350, 480, 700, 600);
  endShape();

  fill(245, 197, 120);
  beginShape();
  vertex(360, 600);
  bezierVertex(360, 585, 550, 485, 800, 600);
  endShape();

  //bubbles
  stroke(68, 140, 156);
  strokeWeight(2);
  fill(181, 234, 245);
  circle(80, 353, 20);
  circle(100, 365, 15);
  circle(98, 345, 10);
  circle(570, 500, 20);
  circle(590, 495, 10);
  circle(580, 482, 15);
  circle(630, 25, 20);
  circle(650, 20, 15);
  circle(646, 37, 10);

  //sea moss
  noStroke();
  fill(34, 139, 34);

  //left side
  circle(0, 465, 50);
  circle(20, 495, 50);
  circle(10, 525, 50);
  circle(0, 555, 50);
  circle(0, 580, 40);

  //right side
  circle(800, 465, 50);
  circle(780, 495, 50);
  circle(790, 525, 50);
  circle(800, 555, 50);
  circle(800, 580, 40);

  //scattered
  circle(270, 510, 30);
  circle(290, 520, 30);
  circle(255, 520, 30);
  circle(290, 535, 30);
  circle(270, 535, 40);

  circle(577, 575, 30);
  circle(585, 560, 20);
  circle(570, 560, 20);
  circle(590, 575, 20);

  //corals
  fill(209, 61, 115);
  arc(230, 565, 40, 30, PI, 0, CHORD);
  fill(235, 87, 141);
  arc(620, 565, 30, 30, PI, 0, CHORD);
}

pearl = new pearlBall(400, 500, 20);
shell = new shellPaddle(width / 2);

function draw() {
  oceanScenery();

  // draw brick grid
  for (let brick of bricks) {
    brick.drawChest();
  }

  // for loop explained (backwards iteration) by chatgpt https://chatgpt.com/share/674472ad-afd0-8007-99ef-06fabfa4b8a9
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].collision(pearl)) {
      if (bricks[i].isSpecial) {
        shell.increaseSize(300); //temporary paddle size increase
      }
      // Increase score
      score += bricks[i].isSpecial ? 10 : 5;
      bricks.splice(i, 1);
      pearl.moveY = pearl.moveY * -1; // ball bounces back off of brick
    }
  }

  pearl.drawPearl();
  pearl.movePearl();

  // Press B to activate speed Boost
  if (keyIsDown(66)) {
    if (!isBoosting) {
      pearl.moveX = pearl.moveX * 1.8; // increase speed
      pearl.moveY = pearl.moveY * 1.8;
      isBoosting = true;
    } else if (isBoosting) {
      pearl.moveX = pearl.moveX / 1.8; // reset speed back to normal
      pearl.moveY = pearl.moveY / 1.8;
      isBoosting = false;
    }
  }

  pearl.checkPearlBoundaries();

  shell.drawShellPaddle();
  shell.hitShellPaddle(pearl);

  // Display score and lives
  textSize(24);
  noStroke();
  textFont("Audiowide Regular");
  fill(255, 227, 234);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 40);
}

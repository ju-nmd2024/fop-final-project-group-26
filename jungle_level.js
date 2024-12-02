// Character Variables
let coconut;
let bamboo;
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
let offsetX = 75; // offset top left corner of canvas
let offsetY = 50; // offset top of the canvas

function setup() {
  createCanvas(800, 600); // change back to 600.
}

// Ball class
 export default class jungleBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moveX = 2;
    this.moveY = -4;
  }

  // draw the coconut
  drawCoconut() {
    stroke(74, 47, 48);
    strokeWeight(5);
    fill(196, 172, 157);
    ellipse(this.x, this.y, this.r * 2);
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.r * 1.5);
  }

  // coconut movements
  moveCoconut() {
    this.x = this.x + this.moveX;
    this.y = this.y + this.moveY;
  }

  checkCoconutBoundaries() {
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
        // Reset coconut position
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
class junglePaddle {
  constructor(x) {
    this.x = x;
    this.y = height - 70;
    this.w = 120;
    this.h = 20;
    this.originalW = this.w; //store original width
    this.timer = 0; //timer to track size duration
  }

  drawJunglePaddle() {
    this.x = mouseX;
    // noStroke();

    // paddle
    fill(230, 216, 62);
    stroke(230, 156, 30);
    strokeWeight(2);
    ellipse(this.x, this.y, this.w * 1.5, this.h * 0.3);
    ellipse(this.x, this.y + 5, this.w * 1.5, this.h * 0.3);
    ellipse(this.x, this.y + 10, this.w * 1.5, this.h * 0.3);
    ellipse(this.x, this.y + 15, this.w * 1.5, this.h * 0.3);

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

  hitJunglePaddle(coconut) {
    if (
      coconut.y + coconut.r >= this.y &&
      coconut.x > this.x - this.w / 2 &&
      coconut.x < this.x + this.w / 2
    ) {
      coconut.moveY = coconut.moveY * -1;
    }
  }
}
class jungleBrick {
  constructor(x, y, w, h, r, isSpecial = false) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.isSpecial = isSpecial; //activate special bricks
  }

  drawStones() {
    noStroke();

    if (this.isSpecial) {
      fill(171, 173, 158); //change colour for special bricks
    } else {
      fill(108, 110, 94);
    }
    rect(this.x, this.y, this.w, this.h, this.r);
    fill(133, 135, 116);
    rect(this.x + this.h / 4, this.y + this.r, this.w / 3, this.h / 4);
    rect(this.x + this.h * 1, this.y + this.r * 3.4, this.w / 3, this.h / 6);
    rect(
      this.x + this.h + this.r / 4,
      this.y + this.r / 3,
      this.w / 4,
      this.h / 7
    );
  }
  // remove brick when colliding with ball
  collision(coconut) {
    if (
      coconut.x + coconut.r > this.x &&
      coconut.x - coconut.r < this.x + this.w &&
      coconut.y + coconut.r > this.y &&
      coconut.y - coconut.r < this.y + this.h
    ) {
      coconut.moveY = coconut.moveY * -1;
    }
  }
}

// brick grid
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
    let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
    let isSpecial = Math.random() < 0.08; // 8% chance of being special
    bricks.push(new jungleBrick(x, y, brickWidth, brickHeight, 10, isSpecial));
  }
}

// jungle Scenery
function jungleScenery() {
  background(196, 212, 133);

  push();
  noStroke();
  fill(301, 136, 60);
  ellipse(670, 425, 200);
  pop();

  //bamboo
  push();
  stroke(73, 161, 6);
  strokeWeight(18);
  line(30, 0, 30, 900); //main bamboos
  line(70, 50, 70, 900);
  line(110, 200, 110, 900);
  line(700, 0, 700, 900);
  line(740, 200, 740, 900);
  line(780, 50, 780, 900);
  pop();

  push();
  stroke(136, 232, 63);
  strokeWeight(10);
  line(30, 0, 30, 900); // bamboos color inside
  line(70, 50, 70, 900);
  line(110, 200, 110, 900);
  line(700, 0, 700, 900);
  line(740, 200, 740, 900);
  line(780, 50, 780, 900);
  pop();

  push(); //lines on bamboo
  stroke(73, 161, 6);
  strokeWeight(5);
  line(22, 50, 38, 50);
  line(22, 150, 38, 150);
  line(22, 250, 38, 250);
  line(22, 350, 38, 350);
  line(22, 450, 38, 450);
  line(22, 550, 38, 550);
  line(22, 650, 38, 650);
  line(22, 750, 38, 750);

  line(62, 90, 78, 90);
  line(62, 190, 78, 190);
  line(62, 290, 78, 290);
  line(62, 390, 78, 390);
  line(62, 490, 78, 490);
  line(62, 590, 78, 590);
  line(62, 690, 78, 690);

  line(102, 330, 118, 330);
  line(102, 430, 118, 430);
  line(102, 530, 118, 530);
  line(102, 630, 118, 630);
  line(102, 730, 118, 730);

  line(692, 30, 708, 30);
  line(692, 130, 708, 130);
  line(692, 230, 708, 230);
  line(692, 330, 708, 330);
  line(692, 430, 708, 430);
  line(692, 530, 708, 530);
  line(692, 630, 708, 630);
  line(692, 730, 708, 730);

  line(732, 220, 748, 220);
  line(732, 320, 748, 320);
  line(732, 420, 748, 420);
  line(732, 520, 748, 520);
  line(732, 620, 748, 620);
  line(732, 720, 748, 720);

  line(771, 60, 789, 60);
  line(771, 160, 789, 160);
  line(771, 260, 789, 260);
  line(771, 360, 789, 360);
  line(771, 460, 789, 460);
  line(771, 560, 789, 560);
  line(771, 660, 789, 660);
  line(771, 760, 789, 760);

  pop();

  //   noStroke();
  //    fill(227, 85, 57);
  //   ellipse(90, 400, 120);
  //  fill(237, 113, 71);
  //  ellipse(115, 415, 45);
  //  ellipse(90, 370, 30);
  //   ellipse(60, 400, 20);
  //   ellipse(75, 410, 10);

  //   fill(78, 167, 173);
  //   ellipse(650, 500, 150);
  //   noFill();
  //   stroke(240, 232, 129);
  //   strokeWeight(8);
  //   push();
  //   rotate(-0.4);
  //   arc(404, 712, 160, 50, 0, PI);
  //   pop();
}

coconut = new jungleBall(400, 500, 20);
bamboo = new junglePaddle(width / 2);

function draw() {
  jungleScenery();

  for (let brick of bricks) {
    brick.drawStones();
  }
  // Iterate over bricks and check for collisions
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].drawStones();
    if (
      coconut.x + coconut.r > bricks[i].x &&
      coconut.x - coconut.r < bricks[i].x + bricks[i].w &&
      coconut.y + coconut.r > bricks[i].y &&
      coconut.y - coconut.r < bricks[i].y + bricks[i].h
    ) {
      if (bricks[i].isSpecial) {
        bamboo.increaseSize(300); //temporary paddle size increase
      }
      // Reverse coconut direction
      coconut.moveY *= -1;

      // Increase score
      score += bricks[i].isSpecial ? 10 : 5;

      // Remove the brick from the array
      bricks.splice(i, 1);
    }
  }

  // Press B to activate speed Boost
  if (keyIsDown(66)) {
    if (!isBoosting) {
      comet.moveX = comet.moveX * 1.8; // increase speed
      comet.moveY = comet.moveY * 1.8;
      isBoosting = true;
    } else if (isBoosting) {
      comet.moveX = comet.moveX / 1.8; // reset speed back to normal
      comet.moveY = comet.moveY / 1.8;
      isBoosting = false;
    }
  }

  // Display score and lives
  textSize(24);
  textFont("Audiowide Regular");
  fill(255, 227, 234);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 40);

  // coconut.drawCoconut();
  coconut.drawCoconut();
  coconut.moveCoconut();
  coconut.checkCoconutBoundaries();

  bamboo.drawJunglePaddle();
  bamboo.hitJunglePaddle(coconut);
}

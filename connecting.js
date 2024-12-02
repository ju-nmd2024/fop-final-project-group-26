function setup() {
  createCanvas(800, 600);
}

let gameState = "start";
// Fish Variables for Start Screen
let fishXstart = [160, 180, 200];
let fishYstart = [400, 435, 465];
let fishSpeedstart = [-1.5, -1.3, -1.5];
let fishWidthstart = [70, 70, 50];
let fishHeightstart = [15, 15, 10];

// Character Variables
let pearl;
let shell;
let c1game = color(129, 210, 227);
let c2game = color(71, 116, 125);

// Fish Variables GAME
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

//START SCREEN

// function startScreen() {
//   createCanvas(800, 600);
// }

function startScreen() {
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

  push();
  fill(15, 15, 15);
  noStroke();
  rect(267, 0, 267, 600);

  noStroke();
  fill(227, 85, 57);
  ellipse(390, 100, 120);
  fill(237, 113, 71);
  ellipse(415, 115, 45);
  ellipse(390, 70, 30);
  ellipse(360, 100, 20);
  ellipse(375, 110, 10);

  fill(78, 167, 173);
  ellipse(450, 500, 150);
  noFill();
  stroke(340, 232, 129);
  strokeWeight(8);
  push();
  rotate(-0.4);
  arc(220, 652, 160, 50, 0, PI);
  pop();

  noStroke();
  fill(201, 136, 60);
  ellipse(350, 25, 30);
  fill(117, 84, 45);
  ellipse(345, 20, 5);
  ellipse(355, 30, 10);

  fill(255, 255, 255); //stars should move
  ellipse(300, 500, 10);
  ellipse(330, 510, 5);
  ellipse(500, 300, 7);
  ellipse(400, 200, 3);
  ellipse(278, 100, 5);
  ellipse(528, 20, 10);
  ellipse(400, 400, 5);
  ellipse(500, 600, 10);

  push();
  fill(123, 208, 224);
  noStroke();
  rect(0, 0, 267, 600);

  //sand
  noStroke();
  fill(209, 163, 88);
  beginShape();
  vertex(0, 600);
  bezierVertex(0, 580, 135, 490, 260, 600);
  endShape();

  fill(245, 197, 120);
  beginShape();
  vertex(360, 600);
  bezierVertex(200, 525, 95, 675, 50, 600);
  endShape();

  //bubbles
  stroke(55, 124, 138);
  strokeWeight(2);
  fill(181, 234, 245);
  circle(80, 353, 20);
  circle(10, 365, 15);
  circle(8, 345, 10);
  circle(70, 500, 20);
  circle(90, 495, 10);
  circle(80, 480, 15);
  circle(30, 25, 20);
  circle(50, 20, 15);
  circle(46, 37, 10);

  circle(160, 180, 45);
  circle(30, 105, 60);
  circle(140, 210, 15);

  //sea moss
  noStroke();
  fill(34, 139, 34);

  //left side
  circle(0, 465, 50);
  circle(10, 495, 50);
  circle(10, 525, 50);
  circle(0, 555, 50);
  circle(0, 580, 40);

  //right side
  circle(230, 465, 50);
  circle(230, 495, 50);
  circle(220, 525, 50);
  circle(230, 555, 50);
  circle(230, 580, 40);

  // fish loop
  for (let i = 0; i < fishXstart.length; i++) {
    fishXstart[i] = fishXstart[i] + fishSpeedstart[i];

    if (fishXstart[i] < -100) {
      fishXstart[i] = 215;
    }

    // draw fish
    noStroke();
    fill(54, 86, 92);
    ellipse(
      fishXstart[i] + 5,
      fishYstart[i],
      fishWidthstart[i],
      fishHeightstart[i]
    );
    triangle(
      fishXstart[i] + fishWidthstart[i] / 2,
      fishYstart[i],
      fishXstart[i] + fishWidthstart[i] / 2 + 15,
      fishYstart[i] + fishHeightstart[i],
      fishXstart[i] + fishWidthstart[i] / 2 + 15,
      fishYstart[i] - fishHeightstart[i]
    );
  }

  pop();

  pop();

  pop();
  push();
  textSize(40);
  textFont("Bungee Tint Regular");
  text("BREAKOUT GAME", width / 2 - 190, height / 2 - 80);
  stroke(20);
  pop();

  textSize(20);
  textFont("Audiowide Regular");
  fill(255, 255, 255);
  text("Press Key to Start", width / 2 - 120, height / 1.8);
  textSize(15);
  text("Read The Instructions", width / 2 - 106, height / 1.6);

  if (keyIsPressed && key === " ") {
    gameState = "playing";
  }
}

//UNDERWATER START GAME

// Underwater Scenery
function oceanScenery() {
  createCanvas(800, 600);

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

  // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1game, c2game, n);
    stroke(newc);
    line(0, y, width, y);
  }

  // fish loop
  for (let i = 0; i < fishXstart.length; i++) {
    fishXstart[i] = fishXstart[i] + fishSpeedstart[i];

    if (fishXstart[i] < -100) {
      fishXstart[i] = width + 50;
    }

    // draw fish
    noStroke();
    fill(54, 86, 92);
    ellipse(
      fishXstart[i] + 5,
      fishYstart[i],
      fishWidthstart[i],
      fishHeightstart[i]
    );
    triangle(
      fishXstart[i] + fishWidthstart[i] / 2,
      fishYstart[i],
      fishXstart[i] + fishWidthstart[i] / 2 + 15,
      fishYstart[i] + fishHeightstart[i],
      fishXstart[i] + fishWidthstart[i] / 2 + 15,
      fishYstart[i] - fishHeightstart[i]
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

  pearl = new pearlBall(400, 500, 20);
  shell = new shellPaddle(width / 2);

  // function draw() {
  //   oceanScenery();

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
  // pearl.movePearl();

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

  pearl = new pearlBall(400, 500, 20);
  shell = new shellPaddle(width / 2);

  pearl.drawPearl();

  pearl.checkPearlBoundaries();

  shell.drawShellPaddle();
  shell.hitShellPaddle(pearl);

  // pearl = new pearlBall(400, 500, 20);
  // shell = new shellPaddle(width / 2);

  // function draw() {
  //   oceanScenery();

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

  //   pearl.drawPearl();
  // pearl.movePearl();

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

  //   pearl.checkPearlBoundaries();

  //   shell.drawShellPaddle();
  //   shell.hitShellPaddle(pearl);

  // Display score and lives
  textSize(24);
  noStroke();
  textFont("Audiowide Regular");
  fill(255, 227, 234);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 40);
}

//END OF UNDERWATER GAME

//RESULT SCREEN WIN

let c1win = color(29, 32, 41);
let c2win = color(195, 255, 112);

//Stars
// code modified from Garritt's video example
let starXwin = [];
let starYwin = [];
let starAlphawin = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starXwin.push(x);
  starYwin.push(y);
  starAlphawin.push(alpha);
}

// //Setup
// function setup() {
//   createCanvas(800, 600);
// }

//Start Screen
function resultScreen() {
  // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
  for (let y = 1; y < height; y++) {
    n = map(y, 0, height, 0, 0.4);
    let newc = lerpColor(c1win, c2win, n);
    stroke(newc);
    line(0, y, width, y);
  }
  //text
  push();

  textSize(40);
  fill(66, 148, 52);
  textFont("Lilita One");
  text("YOU WIN! CONGRATULATIONS!", width / 2 - 255, height / 2 - 80);
  stroke(20);
  pop();

  textSize(20);
  textFont("Audiowide Regular");
  fill(255, 255, 255);
  text("Press Key to Restart", width / 2 - 118, height / 1.8);
  textSize(15);
}

//Draw
//   function draw(){
//     resultScreen();

// code from Garritt's video example
for (let index in starXwin) {
  noStroke();
  fill(255, 255, 255, Math.abs(Math.sin(starAlphawin[index])) * 255);
  ellipse(starXwin[index], starYwin[index], 3);
  starAlphawin[index] = starAlphawin[index] + 0.05;
}

if (keyIsPressed && key === " ") {
  resultScreen();
}
//END OF RESULT SCREEN WIN

//RESULT SCREEN LOST

let c1lost = color(29, 32, 41);
let c2lost = color(125, 0, 0);

//Stars
// code modified from Garritt's video example
let starXlost = [];
let starYlost = [];
let starAlphalost = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starXlost.push(x);
  starYlost.push(y);
  starAlphalost.push(alpha);
}

// //Setup
// function setup() {
//   createCanvas(800, 600);
// }

//Start Screen
function resultScreenLost() {
  // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
  for (let y = 1; y < height; y++) {
    n = map(y, 0, height, 0, 0.4);
    let newc = lerpColor(c1lost, c2lost, n);
    stroke(newc);
    line(0, y, width, y);
  }
  //text
  push();
  textSize(40);
  fill(255, 34, 0);
  textFont("Lilita One");
  text("YOU LOSE! TRY AGAIN", width / 2 - 180, height / 2 - 80);
  stroke(20);
  pop();

  textSize(20);
  textFont("Audiowide Regular");
  fill(255, 255, 255);
  text("Press Key to Restart", width / 2 - 118, height / 1.8);
  textSize(15);
}

//   //Draw
//   function draw(){
//     resultScreenLost();

// code from Garritt's video example
for (let index in starXlost) {
  noStroke();
  fill(255, 255, 255, Math.abs(Math.sin(starAlphalost[index])) * 255);
  ellipse(starXlost[index], starYlost[index], 3);
  starAlphalost[index] = starAlphalost[index] + 0.15;
}

//LOOP
function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "playing") {
    oceanScenery();
  } else if (gameState === "result") {
    resultScreenLost();
  }
}

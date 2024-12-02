// Character Variables
let coconut;
let bamboo;
let pearl;
let shell;
let comet;
let saucer;

// Game Variables
let gameState = "start"; // possible alternatives are start, instructions, ocean, jungle, space, win and lost.
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
  createCanvas(800, 800);
}

// import classes

import { jungleBall, junglePaddle, jungleBrick } from "./jungle_level.js";
import { pearlBall, shellPaddle, chestBrick } from "./ocean-level.js";
import { cometBall, spacePaddle, spaceBrick } from "./space-level.js";

// put functions for each level

// Fish Variables
let fishX = [160, 180, 200];
let fishY = [400, 435, 465];
let fishSpeed = [-1.5, -1.3, -1.5];
let fishWidth = [70, 70, 50];
let fishHeight = [15, 15, 10];

function drawStartScreen() {
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
  for (let i = 0; i < fishX.length; i++) {
    fishX[i] = fishX[i] + fishSpeed[i];

    if (fishX[i] < -100) {
      fishX[i] = 215;
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
}

let buttonX = 330;
let buttonY = 500;
let buttonW = 150;
let buttonH = 75;
let buttonR = 20;

function drawInstructions() {
  background(202, 219, 208);

  //how to play
  stroke(80, 94, 85);
  strokeWeight(3);
  fill(240, 245, 242);
  textSize(36);
  text("How To Play:", 50, 40);

  noStroke();
  textSize(22);
  fill(80, 94, 85);

  //subheadings
  text("1. Start the Game", 50, 70);
  text("2. Control the Paddle", 50, 140);
  text("3. Destroy the Bricks", 50, 210);
  text("4. Avoid Losing the Ball", 50, 280);
  text("5. Boost", 50, 350);
  text("6. Score", 50, 420);

  //instructions
  textSize(18);
  text("The ball starts moving as soon as the game begins.", 70, 90);
  text(
    "Your goal is to keep the ball in play and destroy all the bricks.",
    70,
    110
  );

  text("Move your mouse to the left or right to control the paddle.", 70, 160);
  text("Catch the ball with your paddle to keep it bouncing.", 70, 180);

  text(
    "When the ball hits a brick, the brick disappears and the ball bounces back.",
    70,
    230
  );
  text("Clear all the bricks to win the game.", 70, 250);

  text("If the ball falls past your paddle, you lose a life.", 70, 300);
  text("The game ends when all lives are lost.", 70, 320);

  text("Hold down the B key to increase ball speed.", 70, 370);
  text("Hit the special bricks to increase paddle size.", 70, 390);

  text("Hitting the regular bricks gives you 5 points.", 70, 440);
  text("Hitting the special bricks gives you 10 points.", 70, 460);

  //home button

  stroke(80, 94, 85);
  strokeWeight(3);
  fill(240, 245, 242);
  rect(buttonX, buttonY, buttonW, buttonH, buttonR);

  noStroke();
  fill(80, 94, 85);
  textSize(36);
  text("HOME", buttonX + 19, buttonY + 49);

  //flying saucer
  push();
  rotate(-0.2);
  fill(152, 154, 156);
  ellipse(550, 295, 50, 20);
  fill(186, 216, 247);
  arc(550, 295, 30, 30, PI, 0, CHORD);
  fill(40, 44, 48);
  circle(550, 300, 3);
  circle(560, 299, 3);
  circle(540, 299, 3);
  circle(570, 295, 3);
  circle(530, 295, 3);
  pop();

  //bamboo
  push();
  stroke(73, 161, 6);
  strokeWeight(18);
  line(740, 200, 740, 900);
  line(780, 50, 780, 900);
  stroke(136, 232, 63);
  strokeWeight(10);
  line(740, 200, 740, 900);
  line(780, 50, 780, 900);

  stroke(73, 161, 6);
  strokeWeight(5);
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
}

let c1 = color(129, 210, 227);
let c2 = color(71, 116, 125);

function drawOceanLevel() {
  pearl = new pearlBall(400, 500, 20);
  shell = new shellPaddle(width / 2);

  // Fish Variables
  fishX = [160, 180, 200];
  fishY = [400, 435, 465];
  fishSpeed = [-1.5, -1.3, -1.5];
  fishWidth = [70, 70, 50];
  fishHeight = [15, 15, 10];

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

  // environment
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

  // brick grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
      let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
      let isSpecial = Math.random() < 0.08; // 8% chance of being special
      bricks.push(new chestBrick(x, y, brickWidth, brickHeight, 15, isSpecial));
    }
  }

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

function drawJungleLevel() {
  coconut = new jungleBall(400, 500, 20);
  bamboo = new junglePaddle(width / 2);

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

  // brick grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
      let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
      let isSpecial = Math.random() < 0.08; // 8% chance of being special
      bricks.push(
        new jungleBrick(x, y, brickWidth, brickHeight, 10, isSpecial)
      );
    }
  }
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

function drawSpaceLevel() {
  comet = new cometBall(400, 500, 20);
  saucer = new spacePaddle(width / 2);

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
  // brick grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * (brickWidth + spaceX) + offsetX; // space and offset x
      let y = r * (brickHeight + spaceY) + offsetY; // space and offset y
      let isSpecial = Math.random() < 0.08; // 8% chance of being special
      bricks.push(new spaceBrick(x, y, brickWidth, brickHeight, 20, isSpecial));
    }
  }
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
  background(15, 15, 15);

  // blinking stars
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

  // following two explained (backwards iteration) by chatgpt https://chatgpt.com/share/674472ad-afd0-8007-99ef-06fabfa4b8a9
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].collision(comet)) {
      if (bricks[i].isSpecial) {
        saucer.increaseSize(300); //temporary paddle size increase
      }
      // Increase score
      score += bricks[i].isSpecial ? 10 : 5;

      bricks.splice(i, 1);
      comet.moveY = comet.moveY * -1; // ball bounces back off of brick
    }
  }

  comet.drawComet();
  comet.moveComet();

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

  comet.checkCometBoundaries();

  saucer.drawSpacePaddle();
  saucer.hitSpacePaddle(comet);

  // Display score and lives
  textSize(24);
  textFont("Audiowide Regular");
  fill(255, 227, 234);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 40);
}

function drawWinScreen() {}

function drawLostScreen() {}

//game state and mechanics go here
function draw() {
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "instructions") {
    drawInstructions();
  } else if (gameState === "ocean") {
    drawOceanLevel();
  } else if (gameState === "jungle") {
    drawJungleLevel();
  } else if (gameState === "space") {
    drawSpaceLevel();
  } else if (gameState === "win") {
    drawWinScreen();
  } else if (gameState === "lost") {
    drawLostScreen();
  }
}

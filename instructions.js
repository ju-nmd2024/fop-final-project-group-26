function setup() {
  createCanvas(800, 600);
}

let buttonX = 530;
let buttonY = 500;
let buttonW = 150;
let buttonH = 75;
let buttonR = 20;
function draw() {
  background(202, 219, 208);

  //how to play
  stroke(80, 94, 85);
  strokeWeight(3);
  fill(240, 245, 242);
  textSize(36);
  text("How To Play:", 50, 70);

  noStroke();
  textSize(22);
  fill(80, 94, 85);

  //subheadings
  text("1. Start the Game", 50, 110);
  text("2. Control the Paddle", 50, 210);
  text("3. Destroy the Bricks", 50, 310);
  text("4. Avoid Losing the Ball", 50, 410);
  text("5. Boost", 50, 510);

  //instructions
  textSize(18);
  text("The ball starts moving as soon as the game begins.", 70, 140);
  text(
    "Your goal is to keep the ball in play and destroy all the bricks.",
    70,
    170
  );

  text("Move your mouse to the left or right to control the paddle.", 70, 240);
  text("Catch the ball with your paddle to keep it bouncing.", 70, 270);

  text(
    "When the ball hits a brick, the brick disappears and the ball bounces back.",
    70,
    340
  );
  text("Clear all the bricks to win the game.", 70, 370);

  text("If the ball falls past your paddle, you lose a life.", 70, 440);
  text("The game ends when all lives are lost.", 70, 470);

  text("Catch the boost with your paddle to activate it.", 70, 540);

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
  ellipse(550, 325, 50, 20);
  fill(186, 216, 247);
  arc(550, 325, 30, 30, PI, 0, CHORD);
  fill(40, 44, 48);
  circle(550, 330, 3);
  circle(560, 329, 3);
  circle(540, 329, 3);
  circle(570, 325, 3);
  circle(530, 325, 3);
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
let c1 = color(29, 32, 41);
let c2 = color(125, 0, 0);

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

//Setup
function setup() {
  createCanvas(800, 600);
}

//Start Screen
function resultScreenLost() {
  // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
  for (let y = 1; y < height; y++) {
    n = map(y, 0, height, 0, 0.4);
    let newc = lerpColor(c1, c2, n);
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

//Draw
function draw() {
  resultScreenLost();

  // code from Garritt's video example
  for (let index in starX) {
    noStroke();
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.15;
  }
}

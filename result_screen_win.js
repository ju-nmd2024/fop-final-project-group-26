




let c1 = color(255, 255, 255);
let c2 = color(0, 0, 0);

function setup() {
    createCanvas(800, 600);
    
    
  
  }
  function startScreen(){
      // gradient adapted from https://editor.p5js.org/J_Silva/sketches/mJslozHWg
      for (let y = 0; y < height; y++) {
        n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    background(14, 161, 117);
      }
 
   fill(228, 233, 235); //stars should move
   noStroke();
   ellipse(100, 500, 30);
   ellipse(630, 510, 20);
   ellipse(700, 300, 15);
   ellipse(400, 200, 35);
   ellipse(178, 100, 25);
   ellipse(528, 20, 10);
   ellipse(400, 400, 10);
   ellipse(500, 600, 10);



push();
 textSize(40);
 textFont("Bungee Tint Regular");
  text("BREAKOUT GAME", width / 2 -190, height / 2 - 80);
  stroke(20);
  pop();

  textSize(20);
  textFont("Audiowide Regular");
  fill(255, 255, 255);
  text("Press Key to Start", width / 2 - 120, height / 1.8);
  textSize(15);
  text("Read The Instructions", width / 2 -106, height / 1.6);

  }
  function draw(){
    startScreen();


      
  }
  
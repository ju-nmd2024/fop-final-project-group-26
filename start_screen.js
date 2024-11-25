function setup() {
    createCanvas(800, 600);
  }
  function startScreen(){
    background(196, 212, 133);
  
  push();
  noStroke();
  fill(301, 136, 60);
  ellipse(670, 425, 200);
  pop();

  //planets
push();
  stroke(73, 161, 6);
  strokeWeight(18);
  line(30, 0, 30 ,900); //main bamboos
  line(70, 50, 70 ,900);
  line(110, 200, 110 ,900);
  line(700, 0, 700 ,900);
  line(740, 200, 740 ,900);
  line(780, 50, 780 ,900);
pop();

push();
stroke(136, 232, 63);
  strokeWeight(10);
  line(30, 0, 30 ,900); // bamboos color inside
  line(70, 50, 70 ,900);
  line(110, 200, 110 ,900);
  line(700, 0, 700 ,900);
  line(740, 200, 740 ,900);
  line(780, 50, 780 ,900);
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

pop();

  

  



pop();

  rect( width / 2 - 100, height / 2 - 90, 250, 60);
  text("BREAKOUT GAME", width / 2 - 80, height / 2 - 50);
  textSize(16);
  rect( width / 2 - 50, height / 2 + 10, 150, 40);
  text("Press Key to Start", width / 2 - 40, height / 1.8);

  }
  function draw(){
    startScreen();

  }
  
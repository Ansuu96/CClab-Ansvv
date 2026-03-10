/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let x, y;
let a = 0;
let b = 0;
let c;
let accX = 0;
let accY = 0;
let speedX = 0;
let speedY = 0;
let away = 0.3;
let bc;
let angle = 0;
let f = 10;

let xb1 = 700;
let yb1 = 400;

let xb2 = 600;
let yb2 = 100;

let xb3 = 100;
let yb3 = 40;

let xb4 = 100;
let yb4 = 400;

let xb5 = 200; 
let yb5 = 150; 

let xb6 = 300; 
let yb6 = 50; 

let xb7 = 400; 
let yb7 = 150; 

let xb8 = 400; 
let yb8 = 400; 

let xb9 = 300; 
let yb9 = 300; 

let xb10 = 700; 
let yb10= 500; 


function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");
  angleMode(DEGREES);
  r = 0; //red
  g = 0; //gree
  b = 0; //blue? black
  x = width / 2;
  y = height / 2;
  a = 10;
  c = color(220);
}

function draw() {
  mousePressed();
  background(251, 41, 51); //red
  virus(x, y, 50);
  
  drawBloodcell(xb1, yb1);
  drawBloodcell(xb2, yb2);
  drawBloodcell(xb3, yb3);
  drawBloodcell(xb4, yb4);
  drawBloodcell(xb5, yb5);
  drawBloodcell(xb6, yb6);
drawBloodcell(xb7, yb7);
  drawBloodcell(xb8, yb8);
  drawBloodcell(xb9, yb9);
  drawBloodcell(xb10, yb10);

  drawCreature(x, y, angle, f);

  drawAntenna(x, y);
  // output = map(input, inStart, inEnd, outStart, outEnd);
  //a = map(mouseY, 0, height, 300, 10);
 // r = map(mouseX, 0, width, 0, 255);
  //g = random(0, 255);
  b = map(mouseY, 0, height, 255, 0);

  noStroke();

  let d = dist(mouseX, mouseY, x, y);
  let s = map(sin(frameCount * 0.05), -1, 1, 1, 20);

  let fly = sin(frameCount * 0.05) * 10;

  //drawCreature(width / 2, height / 2+ fly);
  if (mouseIsPressed) {
    if (d < 25) {
      //radius of the circle

      accX = (mouseX - x) * -away;
      accY = (mouseY - y) * -away;
      speedX += accX;
      speedY += accY;

      angle = map(sin(frameCount * 10), -1, 1, -45, 45);
      f = lerp(f, 40, 0.1);
    }
    

  } else {
    angle = 0;
    x = lerp(x, mouseX, 0.05); 
    y = lerp(y, mouseY, 0.05);
    
    f = lerp(f, 10, 0.1);

  }
  mouseX = width * noise(frameCount * 0.01);
  mouseY = height * noise(frameCount * 0.008);
  //let d = dist(mouseX, mouseY, x, y);

  
  // bloodcell moving away
 
     if (dist(x, y, xb1, yb1) < 80) {
    xb1 = lerp(xb1, x, -0.05);
    yb1 = lerp(yb1, y, -0.05);
  }

  if (dist(x, y, xb2, yb2) < 80) {
    xb2 = lerp(xb2, x, -0.05);
    yb2 = lerp(yb2, y, -0.05);
  }

  if (dist(x, y, xb3, yb3) < 80) {
    xb3 = lerp(xb3, x, -0.05);
    yb3 = lerp(yb3, y, -0.05);
  }
  
  if (dist(x, y, xb4, yb4) < 80) {
    xb4 = lerp(xb4, x, -0.05);
    yb4 = lerp(yb4, y, -0.05);
  }
  
  if (dist(x, y, xb5, yb5) < 80) {
    xb5 = lerp(xb5, x, -0.05);
    yb5 = lerp(yb5, y, -0.05);
  }
  
  if (dist(x, y, xb6, yb6) < 80) {
    xb6 = lerp(xb6, x, -0.05);
    yb6 = lerp(yb6, y, -0.05);
  }
  
  if (dist(x, y, xb7, yb7) < 80) {
    xb7 = lerp(xb7, x, -0.05);
    yb7 = lerp(yb7, y, -0.05);
  }
  
  if (dist(x, y, xb8, yb8) < 80) {
    xb8 = lerp(xb8, x, -0.05);
    yb8 = lerp(yb8, y, -0.05);
  }
  
  if (dist(x, y, xb9, yb9) < 80) {
    xb9 = lerp(xb9, x, -0.05);
    yb9 = lerp(yb9, y, -0.05);
  }
  
  if (dist(x, y, xb10, yb10) < 80) {
    xb10 = lerp(xb10, x, -0.05);
    yb10 = lerp(yb10, y, -0.05);
  }
}

function mousePressed() {
  background(random(255), random(255), random(255));
}

//blood cells
function drawBloodcell(xb, yb) {
  push();
  translate(xb, yb);
  rotate(frameCount * -1);
  stroke(0);
  strokeWeight(3);
  fill(235, 55, 40);
  ellipse(0, 0, 100, 60);
  noStroke();
  fill(249, 80, 80);
  ellipse(0, 0, 50, 40);
  pop();
}

function drawCreature(x, y, angle, f) {
  push();
  translate(x, y);
  rotate(angle);

  fill(116, 238, 21);
  ellipse(0, 60, 50, 80, 10);
  noStroke();

  //hands
  noStroke();
  let wave = sin(frameCount * f) * 10;
  // Left Arm
  ellipse(-35, 40 + wave, 40, 20);
  // Right Arm
  ellipse(35, 40 - wave, 40, 20);

  //face
  ellipse(0, 0, 90, 100, 16);

  //black part of eyes
  fill(0);
  if (mouseIsPressed === true) {
    ellipse(20, 0, 40, 70, 16);
    ellipse(-20, 0, 40, 70, 16);
  } else {
    ellipse(20, 0, 40, 40, 16);
    ellipse(-20, 0, 40, 40, 16);
  }

  //white part of eyes
  fill(255);

  if (mouseIsPressed === true) {
    ellipse(20, 10, 10, 40, 16);
    ellipse(15, 0, 20, 50, 16);
    ellipse(-20, 10, 10, 40, 16);
    ellipse(-25, 0, 20, 50, 16);
  } else {
    ellipse(20, 10, 10, 10, 16);
    ellipse(15, 0, 20, 20, 16);
    ellipse(-20, 10, 10, 10, 16);
    ellipse(-25, 0, 20, 20, 16);
  }
  if (mouseIsPressed === true) {
    fill(255, 0, 0);
    arc(0, 10, 20, 30, 0, PI);
  } else {
    fill(255);
    arc(0, 10, 20, 30, 0, PI);
  }
}

// antenna
function drawAntenna(x, y) {
  if (mouseIsPressed === true) {
  } else {
    push();
    beginShape();
    translate(10, -80);
    let lineLength = 10;
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      stroke(240, 0, 255);
      let v = 10 * sin(frameCount * 0.1 - i);
      vertex(v, i);

      endShape();

    }
  }
}


function virus() {
  if (mouseIsPressed) {
  push();
  
    background(random(255));
    let bobbing = sin(frameCount * 2) * 150;
    translate(width * 0.8, y+bobbing);
    rotate(frameCount * 5);
    fill(150, 0, 255);
    stroke(0);
    for (let i = 0; i < 8; i++) {
      rotate(45);
      line(0, 0, 40, 0);
    }
    circle(0, 0, 50);
    pop();
  }
}





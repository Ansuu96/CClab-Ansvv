let h;
let a;
let img;
let tsereg;
let barildaan;
let curChest;
let checkRemove = 0;
let letterS = 32;
let letterH = 10;
let letterW = 88;
let letterHeight = 190;
let stampS = 32;
let stampH = 10;
let stampW = 200;
let stampHeight = 280;

let letterOpened = false; 
let stampOpened = false; 

function preload(){
  img = loadImage("assets/IMG_7396.jpeg");
  tsereg = loadImage("assets/IMG_7401.jpeg");
  barildaan = loadImage("assets/IMG_7399.jpeg");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
}

function draw() {
  background(220);
  rectMode(CENTER);
  
  // chest background ar tal
  stroke(101, 67, 33);
  strokeWeight(7);
  fill(150, 74, 0);
  rect(width / 2, height / 2, 260, 200);

  // Shelves
  stroke(101, 67, 33);
  strokeWeight(15);
  line(77, 150, 323, 150);
  line(77, 200, 323, 200);
  line(77, 250, 323, 250);
  line(77, 295, 323, 295);

  // letter
  if (letterOpened == false) {
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(letterW, letterHeight, letterS, letterH);
  }

  // stampbook
  if (letterOpened == false) {
    fill(196, 164, 132);
    stroke(0);
    strokeWeight(2);

    // mouse movement with stampbook
    if (stampOpened ) {
      if(mouseIsPressed){
      push();
      // Fix: Removed 'width' from translate so rects stay on screen
      translate(width/2 - 160, height/2 - 180); 

        image(tsereg, 100, 150,50,50);
      image(barildaan,160, 150, 50, 50);
      rect(100, 210, 50, 50);
      rect(160, 210, 50, 50);
      rect(220, 210, 50, 50);
      rect(220, 150, 50, 50);
      pop();
      }
    } else {
      rect(stampW, stampHeight, stampS, stampH);
    }
    
    if (stampOpened) {
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(10);
      text("STAMP BOOK", stampW, stampHeight -10);
    }
  }

  // chest door
  h = map(mouseY, 0, height, 250, 200);
  a = map(mouseX, 0, width, width/2, 400);
  
  if (mouseX >= a) 
    checkRemove = 1;

  if (checkRemove == 0) {
    image(img, a, height/2, 260, h);
  }
}

function mousePressed() {
  if (checkRemove == 1) {
    // Letter 
    if (mouseX > 74 && mouseX < 103 && mouseY > 186 && mouseY < 194 && stampOpened ==false) {
      letterS = 160;
      letterH = 150;
      letterW = 200; 
      letterHeight = 200;
      letterOpened = true; 
    } 
    // Stamp Book mouse pressed to stamps
    else if (mouseX > 180 && mouseX < 232 && mouseY > 274 && mouseY < 282 && letterOpened == false) {
      stampS = 160;
      stampH = 150;
      stampW = 200;
      stampHeight = 200;
      stampOpened = true;
    }
  }
}

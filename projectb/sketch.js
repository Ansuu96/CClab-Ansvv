let h;
let a;
let img;
let harvaa;
let barildaan;
let tsereg;
let tsam;
let uraldaan;
let sukhbaatar;

let bgSound;
let mySound;
let gSound;
let text_placeholder ="";
//card objects
let card = [];

let curChest;

let fingerX = 0;
let fingerY = 0;

//index for images
let curHarvaa = 0;
let curBarildaan = 0;
let curTsereg = 0;
let curTsam = 0;
let curUraldaan = 0;
let curSukhbaatar = 0;

let checkRemove = 0;
let letterS = 32;
let letterH = 10;
let letterW = 88;
let letterHeight = 190;
let stampS = 32;
let stampH = 10;
let stampW = 200;
let stampHeight = 280;

let imgSize = 50;
let letterOpened = false;
let stampOpened = false;

//position in the grid
let indexX = 0;
let indexY = 0;
let x = [];
let y = [];

let showDoor = true;


function preload() {
 // img = loadImage("../pictures/avdar.jpg");
  //sound
  gSound = loadSound("sound/tsereg.mp3");
  bgSound = loadSound("sound/background.mp3");
  tsamSound = loadSound("sound/tsam.mp3");
  harvaaSound = loadSound("sound/uraldaan.mp3");
  uraldaanSound = loadSound("sound/sersental.mp3");
barildaanSound = loadSound("sound/barildaan.mp3");
sbSound = loadSound("sound/harvaa.mp3");
  
  //images
  img = loadImage("pictures/avdar.jpg");
  for (let i = 1; i <= 2; i++) {
    img0.push(loadImage("pictures/harvaa" + i + ".jpg"));
  }
  for (let i = 1; i <= 2; i++) {
    img1.push(loadImage("pictures/barildaan" + i + ".jpg"));
  }

  for (let i = 1; i <= 2; i++) {
    img2.push(loadImage("pictures/sukhbaatar" + i + ".jpg"));
  }
  for (let i = 1; i <= 2; i++) {
    img3.push(loadImage("pictures/uraldaan" + i + ".jpg"));
  }
  for (let i = 1; i <= 3; i++) {
    img4.push(loadImage("pictures/tsam" + i + ".jpg"));
  }
  for (let i = 1; i <= 2; i++) {
    img5.push(loadImage("pictures/tsereg" + i + ".jpg"));
  }
}

function setup() {
  //console.log(bgSound.play == true);
  
  let canvas = createCanvas(400,400);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  

  imageMode(CENTER);
  for (let i = 0; i < 200 * 3; i += 200) {
    x[indexX] = 200 + i;
    indexX++;
  }
  for (let j = 0; j < 240 * 2; j += 240) {
    y[indexY] = 300 + j;
    indexY++;
    //console.log(y);
  }
    card.push(new Cards(x[0], y[0], img0));
    card.push(new Cards(x[1], y[0], img1));
    card.push(new Cards(x[2], y[0], img2));
    card.push(new Cards(x[0], y[1], img3));
    card.push(new Cards(x[1], y[1], img4));
    card.push(new Cards(x[2], y[1], img5));
  
}

function draw() {
  background(0);
  //bgSound.play();
if(chooseimage0){
  fill(255);
  textSize(15);
  textAlign(CENTER);

  text(text_placeholder, 150,350);
//text(harvaatext2,width/4,height/4);
}
if(chooseimage1){
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(text_placeholder, 150,350);
//text(harvaatext2,width/4,height/4);
}
if(chooseimage2){
  fill(255);
  textSize(15);
  textAlign(CENTER);
  
  text(text_placeholder, 150,350);
//text(harvaatext2,width/4,height/4);
}
if(chooseimage3){
  fill(255);
  textSize(15);
  textAlign(CENTER);
 
  text(text_placeholder, 150,350);
//text(harvaatext2,width/4,height/4);
}
if(chooseimage4){
  fill(255);
  textSize(15);
  textAlign(CENTER);
  
  text(text_placeholder, 150,350);
//text(harvaatext2,width/4,height/4);
}
if(chooseimage5){
  fill(255);
  textSize(15);
  textAlign(CENTER);
  
  text(text_placeholder, 150,350);

//text(harvaatext2,width/4,height/4);
}

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
    if (stampOpened) {
      
      if (mousePressed) {
        for (let i = 0; i < card.length; i++) {
          card[i].display();
        }
      }
    } else {
      rect(stampW, stampHeight, stampS, stampH);
    }

    if (stampOpened) {
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(10);
      text("STAMP BOOK", stampW, stampHeight - 10);
    }
  }

  // chest door
  h = map(mouseY, 0, height, 250, 200);
  a = map(mouseX, 0, width, width / 2, 400);

  if (mouseX >= a) checkRemove = 1;

  if (checkRemove == 1 && showDoor == true) {
    image(img, a, height / 2, 260, h);
   // (mySoundis.Playing() == true);
  }
  
  if (mouseX > width * 1.5){
    showDoor = false;
    image(img, 0, 0, 1, 1);
    //display.cards();
  }
  if(chooseimage0){
    let i = floor(frameCount/10)% img0.length
    imageMode(CENTER);
    image(img0[i],width/2,height/2,250,250);
  }
  if(chooseimage1){
    let i = floor(frameCount/10)% img1.length
    imageMode(CENTER);
    image(img1[i],width/2,height/2,250,250);
  }
if(chooseimage2){
    let i = floor(frameCount/10)% img2.length
    imageMode(CENTER);
    image(img2[i],width/2,height/2,250,250);
  }
if(chooseimage3){
    let i = floor(frameCount/10)% img3.length
    imageMode(CENTER);
    image(img3[i],width/2,height/2,250,250);
  }
if(chooseimage4){
    let i = floor(frameCount/10)% img4.length
    imageMode(CENTER);
    image(img4[i],width/2,height/2,250,250);
  }
  if(chooseimage5){
    let i = floor(frameCount/10)% img5.length
    imageMode(CENTER);
    image(img5[i],width/2,height/2,250,250);
  }
}



function updateText(){

if(chooseimage0){
text_placeholder = harvaatext1;
console.log(harvaatext1)
}
if(chooseimage1){
text_placeholder = barildaantext;
}
if(chooseimage2){
  text_placeholder = sbtext;
}
if(chooseimage3){
text_placeholder =uraldaantext;
}
if(chooseimage4){
text_placeholder =tsamtext;
 
}
if(chooseimage5){
text_placeholder =tseregtext;
}


}


function mousePressed() {
  bgSound.play();
  if (checkRemove == 1) {
    // Letter
    if (
      mouseX > 74 &&
      mouseX < 103 &&
      mouseY > 186 &&
      mouseY < 194 &&
      stampOpened == false
    ) {
      letterS = 160;
      letterH = 150;
      letterW = 200;
      letterHeight = 200;
      letterOpened = true;
    }
    // Stamp Book mouse pressed to stamps
    else if (
      mouseX > 180 &&
      mouseX < 232 &&
      mouseY > 274 &&
      mouseY < 282 &&
      letterOpened == false
    ) {
      stampS = 160;
      stampH = 150;
      stampW = 200;
      stampHeight = 200;
      stampOpened = true;
      
    }
  
}
}

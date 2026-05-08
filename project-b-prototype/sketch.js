
let h;
let a;
let img;
let tsereg;
let barildaan;
let checkRemove = 0;

let myLetter;     
let myStampBook;  

function preload() {
  img = loadImage("assets/IMG_7396.jpeg");
tsereg = loadImage("assets/IMG_7401.jpeg");
  barildaan = loadImage("assets/IMG_7399.jpeg");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  rectMode(CENTER);

  
  myLetter = new Letter();
  myStampBook = new Stamp(tsereg, barildaan);
  
}
function draw() {
  background(220);

  //  Chest 
  fill(150, 74, 0);
  stroke(101, 67, 33);
  strokeWeight(7);
  rect(width / 2, height / 2, 260, 200);

  //shelf
  strokeWeight(15);
  line(77, 150, 323, 150);
  line(77, 200, 323, 200);
  line(77, 250, 323, 250);
  line(77, 295, 323, 295);

  // door goes away
  if (checkRemove == 1) {
    
    //letter
     (myStampBook.opened == false) 
      myLetter.display();
      //fill(255);
      //myLetter.display = fill(255);
    
    // Only show the book if the letter is closed
    if (myLetter.opened == false) {
      fill(150,75,0)
      myStampBook.display();
}
  }

  //Chest Door 
  h = map(mouseY, 0, height, 250, 200);
  a = map(mouseX, 0, width, width / 2, 400);
  if (mouseX >= a) checkRemove = 1;

  if (checkRemove == 0) {
    image(img, a, height / 2, 260, h);
  }
}

function mousePressed() {
  if (checkRemove == 1) {
    
    //letter
    if (mouseX > 68 && mouseX < 103 && mouseY > 186 && mouseY < 194) {
      if (myStampBook.opened == false) {
        myLetter.opened = true;
      }
     }

   //stamp
    if (mouseX > 160 && mouseX < 232 && mouseY > 274 && mouseY < 282) {
      if (myLetter.opened == false) {
        myStampBook.opened = true;
      }
    }
  }
//} 
// let c = [];
// let l = [];
// let s = [];

// let img;
// let tsereg;
// let barildaan;



// function preload(){
//   img = loadImage("assets/IMG_7396.jpeg");
//   tsereg = loadImage("assets/IMG_7401.jpeg");
//   barildaan = loadImage("assets/IMG_7399.jpeg");
// }

// function setup() {
//   let canvas = createCanvas(800, 500);
//   canvas.parent("p5-canvas-container");
//   imageMode(CENTER);

// l= new Letter();
//   s = new Stamp();
//   c = new Chest();
// }

// function draw() {
//  background(220);
//   rectMode(CENTER);
// }
// function mousePressed() {
//   l.push(new Letter())
//   if (checkRemove == 1) {
//     // Letter 
//     // if (mouseX > 74 && mouseX < 103 && mouseY > 186 && mouseY < 194 && stampOpened ==false) {
//     //   letterS = 160;
//     //   letterH = 150;
//     //   letterW = 200; 
//     //   letterHeight = 200;
//     //   letterOpened = true; 
//     } 
//     // Stamp Book mouse pressed to stamps
//     else if (mouseX > 180 && mouseX < 232 && mouseY > 274 && mouseY < 282 && letterOpened == false) {
//       stampS = 160;
//       stampH = 150;
//       stampW = 200;
//       stampHeight = 200;
//       stampOpened = true;
//     }
//   }
// //   chest.display();
// //   letter.display();
// //   stamp.display();
// // }

// // function mousePressed() {
// //   if (chest.checkRemove == 1) {

// //     // LETTER
// //     if (
// //       mouseX > 74 && mouseX < 103 &&
// //       mouseY > 186 && mouseY < 194 &&
// //       stamp.opened == false
// //     ) {
// //       letter.s = 160;
// //       letter.h = 150;
// //       letter.w = 200;
// //       letter.y = 200;
// //       letter.opened = true;
// //     }

// //     // STAMP
// //     else if (
// //       mouseX > 180 && mouseX < 232 &&
// //       mouseY > 274 && mouseY < 282 &&
// //       letter.opened == false
// //     ) {
// //       stamp.s = 160;
// //       stamp.h = 150;
// //       stamp.w = 200;
// //       stamp.y = 200;
// //       stamp.opened = true;
// //     }
// //   }
// // }







// function draw() {
//   background(220);
//   rectMode(CENTER);
  
//   // chest background ar tal
//   stroke(101, 67, 33);
//   strokeWeight(7);
//   fill(150, 74, 0);
//   rect(width / 2, height / 2, 260, 200);

//   // Shelves
//   stroke(101, 67, 33);
//   strokeWeight(15);
//   line(77, 150, 323, 150);
//   line(77, 200, 323, 200);
//   line(77, 250, 323, 250);
//   line(77, 295, 323, 295);

//   // letter
//   letter.display();

//   // stampbook
//   if (letterOpened == false) {
//     fill(196, 164, 132);
//     stroke(0);
//     strokeWeight(2);

//     // mouse movement with stampbook
//     if (stampOpened ) {
//       if(mouseIsPressed){
//       push();
//       // Fix: Removed 'width' from translate so rects stay on screen
//       translate(width/2 - 160, height/2 - 180); 

//         image(tsereg, 100, 150,50,50);
//       image(barildaan,160, 150, 50, 50);
//       rect(100, 210, 50, 50);
//       rect(160, 210, 50, 50);
//       rect(220, 210, 50, 50);
//       rect(220, 150, 50, 50);
//       pop();
//       }
//     } else {
//       rect(stampW, stampHeight, stampS, stampH);
//     }
    
//     if (stampOpened) {
//       fill(0);
//       noStroke();
//       textAlign(CENTER);
//       textSize(10);
//       text("STAMP BOOK", stampW, stampHeight -10);
//     }
//   }

//   // chest door
//   h = map(mouseY, 0, height, 250, 200);
//   a = map(mouseX, 0, width, width/2, 400);
  
//   if (mouseX >= a) 
//     checkRemove = 1;

//   if (checkRemove == 0) {
//     image(img, a, height/2, 260, h);
//   }
// }


}

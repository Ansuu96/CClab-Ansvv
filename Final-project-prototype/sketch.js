let h;
let a;
let img;
let harvaa;
let barildaan;
let tsereg;
let tsam;
let uraldaan;
let sukhbaatar;

let harvaaImgs = [];
let barildaanImgs = [];
let tseregImgs = [];
let tsamImgs = [];
let uraldaanImgs = [];
let sukhbaatarImgs = [];

let cards =[];

let curChest;

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

function preload() {
  //images
  img = loadImage("avdar.jpeg");
  // harvaa = loadImage("harvaa1.jpeg");
  // barildaan = loadImage("barildaan1.jpeg");
  // tsereg = loadImage("tsereg1.jpeg");
  // uraldaan = loadImage("uraldaan1.jpeg");
  // tsam = loadImage("tsam1.jpeg");
  // sukhbaatar = loadImage("sukhbaatar1.jpeg")
  for (let i = 1; i <= 2; i++) {
    harvaaImgs.push(loadImage("harvaa-" + i + ".jpeg"));
  }
  for (let i = 1; i <= 2; i++) {
    harvaaImgs.push(loadImage("harvaa-" + i + ".jpeg"));
  }
    for (let i = 1; i <= 2; i++) {
      barildaanImgs.push(loadImage("barildaan-" + i + ".jpeg"));
    }

    for (let i = 1; i <= 2; i++) {
      sukhbaatarImgs.push(loadImage("sukhbaatar-" + i + ".jpeg"));
    }
    for (let i = 1; i <= 2; i++) {
      uraldaanImgs.push(loadImage("uraldaan-" + i + ".jpeg"));
    }
    for (let i = 1; i <= 3; i++) {
      tsamImgs.push(loadImage("tsam-" + i + ".jpeg"));
    }
    for (let i = 1; i <= 3; i++) {
      tseregImgs.push(loadImage("tsereg-" + i + ".jpeg"));
    }
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  
  cards[0] = new card(200, 150, harvaaImgs);
  
}

function draw() {
  background(220);
  rectMode(CENTER);

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
  shelf();

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
      if (mouseIsPressed) {
        //imgSize += 2;
        push();
        
        cards[0].update();
        cards[0].display();

        //       translate(width/2 - 160, height/2 - 180);

        //   image(harvaa, 150, 170,imgSize,imgSize);
        // image(barildaan,200, 170, imgSize, imgSize);
        // image(uraldaan,150, 250, imgSize, imgSize);
        // image(tsereg,200, 250, imgSize, imgSize);
        // image(tsam,250, 250, imgSize, imgSize);
        // image(sukhbaatar,250, 170, imgSize, imgSize);

        // image(harvaa, 110, 150,85,90);
        //       image(barildaan,200, 150, 85, 90);
        //         image(sukhbaatar,290, 150, 85,90);

        //       image(uraldaan,110, 250, 85, 90);
        //       image(tsereg,200, 250, 85,90);
        //       image(tsam,290, 250, 85, 90);

        //   image(harvaaImgs, 110, 150,85,90);
        //       image(barildaan,200, 150, 85, 90);
        //         image(sukhbaatar,290, 150, 85,90);

        //       image(uraldaan,110, 250, 85, 90);
        //       image(tsereg,200, 250, 85,90);
        //       image(tsam,290, 250, 85, 90);

        //         //harvaa
        //         push();
        //         scale(0.5);
        //         translate(200, 150);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           harvaaImgs[curHarvaa],
        //           0,
        //           0,
        //           harvaaImgs[0].width * 0.25,
        //           harvaaImgs[0].height * 0.25
        //         );

        //         pop();

        //harvaa animation
        // if (harvaaImgs.length > 0) {
        //   curHarvaa = floor((frameCount / 10) % harvaaImgs.length);
        // }

        //curHarvaa = floor((frameCount / 5) % harvaa.length);
        //pop();

        //         push();
        //         scale(0.5);
        //         translate(450, 150);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           barildaanImgs[curBarildaan],
        //           0,
        //           0,
        //           barildaanImgs[0].width * 0.25,
        //           barildaanImgs[0].height * 0.25
        //         );

        //         pop();

        //         if (barildaanImgs.length > 0) {
        //           curBarildaan = floor((frameCount / 22) % barildaanImgs.length);
        //         }

        //         push();
        //         scale(0.5);
        //         translate(700, 150);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           sukhbaatarImgs[curSukhbaatar],
        //           0,
        //           0,
        //           sukhbaatarImgs[0].width * 0.25,
        //           sukhbaatarImgs[0].height * 0.25
        //         );

        //         pop();

        //         if (sukhbaatarImgs.length > 0) {
        //           curSukhbaatar = floor((frameCount / 22) % sukhbaatarImgs.length);
        //         }

        //         push();
        //         scale(0.6);
        //         translate(583, 375);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           tsamImgs[curTsam],
        //           0,
        //           0,
        //           tsamImgs[0].width * 0.25,
        //           tsamImgs[0].height * 0.25
        //         );

        //         pop();

        //         if (tsamImgs.length > 0) {
        //           curTsam = floor((frameCount / 22) % tsamImgs.length);
        //         }

        //         push();
        //         scale(0.5);
        //         translate(200, 450);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           tseregImgs[curTsereg],
        //           0,
        //           0,
        //           tseregImgs[0].width * 0.25,
        //           tseregImgs[0].height * 0.25
        //         );

        //         pop();

        //         if (tseregImgs.length > 0) {
        //           curTsereg = floor((frameCount / 22) % tseregImgs.length);
        //         }

        //         push();
        //         scale(0.5);
        //         translate(450, 450);
        //         //rotate(radians(-90));
        //         imageMode(CENTER);
        //         image(
        //           uraldaanImgs[curUraldaan],
        //           0,
        //           0,
        //           uraldaanImgs[0].width * 0.25,
        //           uraldaanImgs[0].height * 0.25
        //         );

        //         pop();

        //         if (uraldaanImgs.length > 0) {
        //           curUraldaan = floor((frameCount / 22) % uraldaanImgs.length);
        //         }
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

  if (checkRemove == 0) {
    image(img, a, height / 2, 260, h);
  }
}

function mousePressed() {
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

function shelf() {
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
}

class card {
  constructor(x, y, cardN) {
    this.x = x;
    this.y = y;
    // this.n = n;
    this.c = cardN;
  }
  display() {
    //harvaa
    push();
    scale(0.5);
    translate(this.x, this.y);
    //rotate(radians(-90));
    imageMode(CENTER);
    image(this.c[curHarvaa], 0, 0, this.c[0].width * 0.25, this.c[0].height * 0.25);

    pop();
  }
  update() {
    if (this.c.length > 0) {
      curHarvaa = floor((frameCount / 10) % this.c.length);
    }
  }
}

// let scanned = [];
// let eyes;
// let rockets;
// let doodles1;
// let doodles2;
// let chest;
// let danzan;

// let curEye = 0;
// let curRocket = 0;
// let rocketY = 500;
// let rocketSpeedY = 0;
// let curDoodle1 = 0;
// let curDoodle2 = 0;
// let curChest = 0;
// let curDanzan = 0;


// function preload() {
//   for (let i = 1; i <= 6; i++) {
//     scanned.push(loadImage("20260311120631-" + i + ".jpg"));
//     scanned.push(loadImage("IMG_73" + i + ".jpeg"));
//   }
// }

// function setup() {
//   createCanvas(800, 500);

//   eraseBg(scanned, 10);
//   eyes = crop(scanned, 0, 0, 585, 356);
//   rockets = crop(scanned, 1600, 90, 650, 420);
//   doodles1 = crop(scanned, 1514, 1300, 830, 300);
//   doodles2 = crop(scanned, 100, 1300, 366, 311);

//   chest = crop(scanned, 1600, 90, 650, 420);
//   //danzan = crop(scanned, 0, 0, 585, 356);
// }

// function draw() {
//   background(255);

//   // examples: eye

//   image(
//     eyes[curEye],
//     mouseX,
//     mouseY,
//     eyes[0].width * 0.25,
//     eyes[0].height * 0.25
//   );

//   curEye = floor((frameCount / 20) % eyes.length);

//   //chest
//    image(
//     chest[curChest],
//     mouseY,
//     chest[0].width * 0.25,
//     chest[0].height * 0.25
//   );

//   curChest = floor((frameCount / 20) % chest.length);

//   // rocket

//   push();
//   translate(width / 2, rocketY);
//   rotate(radians(-90));
//   imageMode(CENTER);
//   image(
//     rockets[curRocket],
//     0,
//     0,
//     rockets[0].width * 0.25,
//     rockets[0].height * 0.25
//   );
//   pop();

//   // rocket animation only has 4 frames
//   curRocket = floor((frameCount / 10) % 4);

//   rocketY += rocketSpeedY;
//   rocketSpeedY += -0.1;
//   if (rocketY < -100) {
//     rocketY = 500;
//     rocketSpeedY = 0;
//   }

//   // doodles, using sin()

//   image(
//     doodles1[curDoodle1],
//     0,
//     0,
//     doodles1[0].width * 0.5,
//     doodles1[0].height * 0.5
//   );

//   curDoodle1 = floor(map(sin(frameCount / 10), -1, 1, 0, doodles1.length));

//   image(
//     doodles2[curDoodle2],
//     400,
//     300,
//     doodles2[0].width * 0.5,
//     doodles2[0].height * 0.5
//   );

//   let d = dist(mouseX, mouseY, 485, 355);
//   if (d < 100) {
//     curDoodle2 = floor(map(sin(frameCount / 10), -1, 1, 0, doodles2.length));
//   }
// }







// // You shouldn't need to modify these helper functions:

// function crop(imgs, x, y, w, h) {
//   let cropped = [];
//   for (let i = 0; i < imgs.length; i++) {
//     cropped.push(imgs[i].get(x, y, w, h));
//   }
//   return cropped;
// }

// function eraseBg(imgs, threshold = 10) {
//   for (let i = 0; i < imgs.length; i++) {
//     let img = imgs[i];
//     img.loadPixels();
//     for (let j = 0; j < img.pixels.length; j += 4) {
//       let d = 255 - img.pixels[j];
//       d += 255 - img.pixels[j + 1];
//       d += 255 - img.pixels[j + 2];
//       if (d < threshold) {
//         img.pixels[j + 3] = 0;
//       }
//     }
//     img.updatePixels();
//   }
//   // this function uses the pixels array
//   // we will cover this later in the semester - stay tuned
// }

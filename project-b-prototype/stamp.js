class Stamp {
  constructor(img1, img2) {
    this.opened = false;
    this.t = img1; // store tsereg
    this.b = img2; // store barildaan
  }

  display() {
    if (this.opened == true) {
      push();
      translate(width / 2 - 160, height / 2 - 180);
      image(this.t, 100, 150, 50, 50);
      image(this.b, 160, 150, 50, 50);
      fill(196, 164, 132);
      strokeWeight(2);
      rect(100, 210, 50, 50);
      rect(160, 210, 50, 50);
      rect(220, 210, 50, 50);
      rect(220, 150, 50, 50);
      pop();
    } else {
      fill(196, 164, 132);
      rect(200, 280, 32, 10);
    }
  }
}

// class Stamp {
//   constructor() {
//     this.s = 32;
//     this.h = 10;
//     this.w = 200;
//     this.y = 280;
//     this.opened = false;
//     this.imgTsereg = img1;
//     this.imgBarildaan = img2;
//   }

//   display() {
//     if (letter.opened == false) {
//       fill(196, 164, 132);
//       stroke(0);

//       if (this.opened && mouseIsPressed) {
//         push();
//         translate(width/2 - 160, height/2 - 180);

//         image(tsereg, 100, 150,50,50);
//         image(barildaan,160, 150, 50, 50);

//         rect(100, 210, 50, 50);
//         rect(160, 210, 50, 50);
//         rect(220, 210, 50, 50);
//         rect(220, 150, 50, 50);
//         pop();
//       } else {
//         rect(this.w, this.y, this.s, this.h);
//       }

//       if (this.opened) {
//         fill(0);
//         noStroke();
//         textAlign(CENTER);
//         textSize(10);
//         text("STAMP BOOK", this.w, this.y -10);
//       }
//     }
//   }
// }

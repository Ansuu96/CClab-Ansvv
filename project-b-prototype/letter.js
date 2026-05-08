class Letter {
  constructor() {
    this.opened = false;
  }

  display() {
    if (this.opened == false) {
      fill(255);
      rect(88, 190, 32, 10); // The small version
    } else {
      fill(255);
      rect(200, 200, 160, 150); // The big version
    }
  }
}


// class Letter {
//   constructor() {
//     this.s = 32;
//     this.h = 10;
//     this.w = 88;
//     this.y = 190;
//     this.opened = false;
//   }

//   display() {
//     if (this.opened == false) {
//       fill(255);
//       stroke(0);
//       strokeWeight(2);
//       rect(this.w, this.y, this.s, this.h);
//     } else {
//       rect(this.w, this.y, this.s, this.h);
//     }
//   }
// }

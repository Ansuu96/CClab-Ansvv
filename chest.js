// class Chest {
//   constructor() {
//     this.checkRemove = 0;
//   }
//  display() {
//   fill(150, 74, 0);
//   stroke(101, 67, 33);
//   strokeWeight(7);
//   rect(width / 2, height / 2, 260, 200);

//   strokeWeight(15);
//   line(77, 150, 323, 150);
//   line(77, 200, 323, 200);
//   line(77, 250, 323, 250);
//   line(77, 295, 323, 295);

//   // door goes away
//   updateChest();{
//   if (checkRemove == 1) {
    
//     if (myStampBook.opened == false) {
//       myLetter.display();
//     }
//     // Only show the book if the letter is closed
//     if (myLetter.opened == false) {
//       myStampBook.display();
// }
//   }
//  }
// }
//   display() {
//     stroke(101, 67, 33);
//     strokeWeight(7);
//     fill(150, 74, 0);
//     rect(width / 2, height / 2, 260, 200);

//     strokeWeight(15);
//     line(77, 150, 323, 150);
//     line(77, 200, 323, 200);
//     line(77, 250, 323, 250);
//     line(77, 295, 323, 295);

//     let h = map(mouseY, 0, height, 250, 200);
//     let a = map(mouseX, 0, width, width/2, 400);

//     if (this.checkRemove == 0) {
//       image(img, a, height/2, 260, h);
//     }

//     if (mouseX >= a) {
//       this.checkRemove = 1;
//     }
//   }
// }
//}

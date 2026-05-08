//let r = [];
// function setup() {
//   createCanvas(400, 400);
// }
// function draw() {
//   background(220);
//   if(mouseIsPressed){
//     r.push(new Rain(mouseX, mouseY));
//   }
//   for (let i = 0; i < r.length; i++) {
//     r[i].updateRain();
//     r[i].displayRain();
//     if(r[i].isOut){
//       r.splice(i, 1);
//     }
//     // while(r.length > 30){
//     //   r.splice(0,1);
//     // }
//   }
//   console.log(r.length);
// }
class Rain {
  constructor(x, y) {
    //declaring variables
    this.x = x + random(-20, 20);
    this.y = y;
    this.isOut = false;
    this.h = h;
  }
  displayRain() {
    //everything that will display the rain
    push();
    colorMode (HSB, 100);
     stroke(this.h, 30,255)
    strokeWeight(5);
    line(this.x, this.y, this.x, this.y + 5);
    pop();
  }
  updateRain() {
    //updating the Y position
    this.y = this.y + 5;
    if(this.y > height){
      this.isOut = true;
    }
  }
}

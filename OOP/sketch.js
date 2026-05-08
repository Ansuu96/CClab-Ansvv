let c = [];
let r = [];
let thunder;
function preload(){
  thunder = loadSound("thunder.mp3");
}
function setup() {
  createCanvas(400, 400);
  //sound plays
  //thunder.play();
}
function mousePressed() {
  c.push(new Cloud(mouseX, mouseY, random(0.5, 1)));
}
function draw() {
  background(220);
  //fill(random(255), random(121), random(100))
  //fill(mouseX, mouseY, random(255))
  // if(mouseIsPressed){
  //   r.push(new Rain(mouseX, mouseY));
  // }
  for (let i = 0; i < r.length; i++) {
    r[i].updateRain();
    r[i].displayRain();
    if(r[i].isOut){
      r.splice(i, 1);
    }
   
  }
//}
  for (let i = 0; i < c.length; i++) {
     for (let j = 0; j < c.length; j++) {
      if(i!=j){
c[i].checkCollision(c[j]);
      }
     }
     if (c[i].isRaining){
      r.push(new Rain(c[i].x, c[i].y, c[i].h))
     }
    c[i].update();
    c[i].display();
if (c[i].isOut){
      c.splice(i,1);
    }
  }
  console.log(c.length);
}




//   //move();
// }
// }


// class Cloud{
//   //constructor, it's like a setup
//   // the setup of our variables
//   //keep the first value
//   constructor(x,y,sc){
//      this.x = x;
//      this.y = y;
//      this.xc = this.x;
//      this.yc = this.y;
//      this.s =  screen;

//   }

//   //everything that will draw the cloud
// display(){
//  push();
//   translate(this.x, this.y);
//   scale(this.sc);
//   this.drawLeftArm();
//   this.drawRightArm();
//   noStroke();
//   //body
//   circle(0, 0, 100);
//   //circles around
//   for(let a = 0; a < 2*PI; a+=PI/6 ){
//     push();
//     rotate(a);
//     circle(50,30, 50);
//     pop();
//   }
//   //eyes
//   fill(0);
//   circle(-30, 0, 5);
//   circle(30, 0, 5);
//   arc(0, 0, 30, 30, 0, PI);
//   pop();
// }

// //updates the variables
// update(){
//  //this.y = noise(frameCount*0.01)*height;
//  this.x = this.xc + 100*cos(frameCount*0.01);
//  this.y = this.yc + 100* sin(frameCount *0.1);
//  this.s = map(sin(frameCount * 0.05), -1, 1, 0.5, 1);
// }
// drawRightArm() {
//     //Right arm
//     push();
//     beginShape();
//     let lineLength = 110;
//     noFill();
//     for (let i = 0; i <= lineLength; i += lineLength / 20) {
//       strokeWeight(10);
//       let v = 15 * sin(frameCount * 0.1 - i / 20);
//       vertex(i, v);
//     }
//     endShape();
//     pop();
    
//   }
  
//   drawLeftArm() {
//     //Left arm
//     push();
//     scale(-1,1);  //this is like a mirror!
//     beginShape();
//     let lineLength = 110;
//     noFill();
//     for (let i = 0; i <= lineLength; i += lineLength / 20) {
//       strokeWeight(10);
//       let v = 15 * sin(frameCount * 0.1 - i / 20);
//       vertex(i, v);
//     }
//     endShape();
//     pop();
//   }

//   }


// //function move(){
//   //moving this vertically with y
//   //to make the movement slow by *0.01
//   //*height makes it move
//   //  y = noise(frameCount*0.01)*height;
// //}

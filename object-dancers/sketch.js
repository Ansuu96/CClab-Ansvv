/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new BankharDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class BankharDancer {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.s = 1;
    this.dy = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour


for (let a = 0; a < 2 * PI; a += PI /4) {
  this.dy = 30 * sin(frameCount * 0.05) + 50;

  if (mouseIsPressed){
  this.x  += 1;
  this.y += 1;
}
  }
}
  display() {
    push();
    push();
    translate(this.x, this.y + this.dy);

rotate(frameCount *0.005);
this.drawEars();
this.drawFace();
this.drawBody();
pop();

    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
   // push();
    // translate(this.x, this.y + this.dy);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    

pop();
}
drawFace(){
  
  //translate(0,-40);
fill(123, 63, 0)
 ellipse(5, 5, 60, 70);
 //humsog
 push();
  fill(210, 125, 45)
  noStroke();
  translate(-10,-10);
  rotate(80);
 ellipse(0, 0, 5, 10);
 pop();

push();
 fill(210, 125, 45)
 noStroke();
 translate(10,-10);
 rotate(80);
ellipse(0, 0, 5, 10);
pop();
//eyes
 push();
 fill(0)
 noStroke();
 translate(5,0);
ellipse(0, 0, 5, 10);
pop();

push();
 fill(0)
 noStroke();
 translate(-5, 0);
ellipse(0, 0, 5, 10);
pop();

//nose

push();
 fill(0)
 noStroke();
 translate(5,15);
 rotate(80)
ellipse(0, 0, 5, 10);
pop();

}
drawBody(){
fill(123, 63, 0)
ellipse(5, 75, 80, 90);
push();
  fill(123, 63, 0);
  strokeWeight(2);
let wave = sin(frameCount * 0.05) * 5;
 ellipse(25, 50+ wave, 25, 50);

//hand2

ellipse(-20, 50- wave, 25, 50);
pop();
//dress
for (let i = 0; i < 8; i++) {
push(); 
fill(random(255), random(100), random(100));
let swing = sin(frameCount*5+i)*5
translate(-10,20)
//triangle(55, 75, 38, 40, 86, 75)
triangle(15, 48, 55 + swing, 90, -55 + swing, 90);
pop();
  }
  //legs
  push();
noStroke();
ellipse(25, 125, 25, 30);
ellipse(-20, 125, 25, 30);
pop();
}

drawEars(){
push();
fill(123, 63, 0)
let swing = sin(frameCount * 0.05) * 5;
//translate(50,0);
 triangle(-25+swing, -15, -5, -25, -40, 25); 
triangle(35-swing, -15, 15, -25, 50, 25);
pop();
}
}
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

  //   pop();
  //   pop();
   
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }

//}
// drawFace(){
  
//   //translate(0,-40);
// fill(123, 63, 0)
//  ellipse(5, 5, 60, 70);
//  //humsog
//  push();
//   fill(210, 125, 45)
//   noStroke();
//   translate(-10,-10);
//   rotate(80);
//  ellipse(0, 0, 5, 10);
//  pop();

// push();
//  fill(210, 125, 45)
//  noStroke();
//  translate(10,-10);
//  rotate(80);
// ellipse(0, 0, 5, 10);
// pop();
// //eyes
//  push();
//  fill(0)
//  noStroke();
//  translate(5,0);
// ellipse(0, 0, 5, 10);
// pop();

// push();
//  fill(0)
//  noStroke();
//  translate(-5, 0);
// ellipse(0, 0, 5, 10);
// pop();

// //nose

// push();
//  fill(0)
//  noStroke();
//  translate(5,15);
//  rotate(80)
// ellipse(0, 0, 5, 10);
// pop();

// }
// drawBody(){
// fill(123, 63, 0)
// ellipse(5, 75, 80, 90);
// push();
//   fill(123, 63, 0);
//   strokeWeight(2);
// let wave = sin(frameCount * 0.05) * 5;
//  ellipse(25, 50+ wave, 25, 50);

// //hand2

// ellipse(-20, 50- wave, 25, 50);
// pop();
// //dress
// for (let i = 0; i < 8; i++) {
// push(); 
// fill(random(255), random(100), random(100));
// let swing = sin(frameCount*5+i)*5
// translate(-10,20)
// //triangle(55, 75, 38, 40, 86, 75)
// triangle(15, 48, 55 + swing, 90, -55 + swing, 90);
// pop();
//   }
//   //legs
//   push();
// noStroke();
// ellipse(25, 125, 25, 30);
// ellipse(-20, 125, 25, 30);
// pop();
// }

// drawEars(){
// push();
// fill(123, 63, 0)
// let swing = sin(frameCount * 0.05) * 5;
// //translate(50,0);
//  triangle(-25+swing, -15, -5, -25, -40, 25); 
// triangle(35-swing, -15, 15, -25, 50, 25);
// pop();
// }
// }

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/
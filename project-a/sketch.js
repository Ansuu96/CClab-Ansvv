/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/


let s;
let speedX = 0;
let b = 0;
let c = 0;
let z = 10;
let offr = 0;
let g = 0;
let a = 5;
let u;
let scaleS = 10;
let offset;
let bc = 255;
let sep = 20;
let roff = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    function setup() {
  x = width / 2;
  y = height / 2;
  console.log(y);
}
}


function draw() {
  let d = dist(mouseX, mouseY, x, y); 
  let s = map(sin(frameCount * 0.05), -1, 1, 1, 20);
  if (mouseIsPressed) {
    bc = lerp(bc, 145, 0.05);
    background(bc);
  }else{
    bc = lerp(bc, 0, 0.1);
    background(bc);
  }
 
                  
    
  x = width*noise(frameCount*0.01);
  y = height*noise(frameCount*0.008);
                 //blue
  fill(204, 253, 255);
  noStroke();
  circle(x + b + random(-5, 5), y + c + random(-5, 5), s);
  //pink
  fill(250, 214, 255);
  circle(x + b + random(-5, 5), y + c + random(-5, 5), s);
  //yellow
  fill(249, 250, 222);
  circle(x + b + random(-5, 5), y + c + random(-5, 5), s);
  //purple
  fill(168, 61, 242);
  circle(x + b + random(-5, 5), y + c + random(-5, 5), s);
  //bg
  
   for (let angle = 0; angle < 2 * PI; angle += PI / 8) {
     for (let r = 30; r < width / 2; r += 50) {
       let xb = width / 2 + (r + offr) * cos(angle);
       let yb = height / 2 + (r + offr) * sin(angle);
       let g = dist(x, y, xb, yb);
       offr = map(g, 0, width / 2, -30, 50);
       fill(145, 200, 145);
       let off = map(noise(frameCount * 0.1 + xb + yb), 0, 1, 1, z);
       circle(xb, yb, z);
     let maxD = dist(0, 0, width, height);
       a = map(g, 0, maxD, 10, 3 * a);
      let op = map(d, 0, 100, 100, 0);
      fill(136, 8, 8);
      if (noise(yb * xb) > 0.5) {
        rect(xb, yb, z);
        if (noise(angle * r) > 0.5) {
         circle(xb, yb, z * scale);
        }
        if (mouseIsPressed == true) {
           noStroke();
          fill(136, 8, 8);
          if (noise(yb * xb) > 0.5) {
            rect(xb, yb, z);
           if (noise(angle * r) > 0.5) {
             circle(xb, yb, z * scale);
             } else {
              fill(255, 255, 255);
              stroke(255, 255, 255);
             if (noise(yb * xb) > 0.5) {
              rect(xb, yb, z);
              if (noise(angle * r) > 0.5) {
                circle(xb, yb, z * scale);
                 }
                if (mouseIsPressed == true) {
                   fill(145, 200, 145);
                   let off = map(noise(frameCount * 0.1 + xb + yb), 0, 1, 1, z);
                   circle(xb, yb, z);
                   let maxD = dist(0, 0, width, height);
                  a = map(g, 0, maxD, 10, 3 * a);
                 let op = map(d, 0, 100, 100, 0);
                 } else {
                   fill(255, 255, 255);
                  let off = map(noise(frameCount * 0.1 + xb + yb), 0, 1, 1, z);
                  circle(xb, yb, z);
                  let maxD = dist(0, 0, width, height);
                  a = map(g, 0, maxD, 10, 3 * a);
                 let op = map(d, 0, 100, 100, 0);
                }
                for (let angle = 0; angle < 2 * PI; angle += PI / 30) {
                  
  for (let r = sep; r < width; r += sep) {
      let xb = width/2 + (r) * cos(angle);
      let yb = height/ 2 + (r) * sin(angle);
      let d2 = dist(x, y, xb, yb);
      let s2 = map(d * r, 0, width * width, 5, 60);
      let dx = xb - x;
      let dy = yb - y;
      let away = 30; //how far it 

      noFill();
    if(mouseIsPressed == true){
      stroke(145, 200, 145);
      circle(xb + (away * dx) / d2, yb + (away * dy) / d2, s2);
      fill(136, 8, 8)
       rect(xb + (away * dx) / d2, yb + (away * dy) / d2, s2);
    }
    }
  }
                }

                console.log(xb);

             }
             }
          }
        }
      }
     }
   
    }


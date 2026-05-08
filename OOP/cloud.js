class Cloud {
    // constructor, this is like the setup
    //the setup of our variables
    constructor(x, y, sc) {
        this.x = x;
        this.y = y;
        this.sc = sc;
        this.x0 = this.x;
        this.y0 = this.y;
        this.speedX = map(this.sc, 0.5,1,5,1);
        this.isOut = false;
        this.h = random(100);
        this.sound = thunder;
        this.isRaining = false;
    }
    //detect collision
    checkCollision(other){
        let d = dist(this.x,this.y, other.x, other.y);
        if( d < (this.sc+other.sc)*100/2); {
            console/log("boom!");
            this.h = random(100);
            this.isRaining = true;
            if(this.sound.isPlaying() == false){
                 this.sound.play();
            }
        // } else {
        //     this.isRaining = false;
         }
    }
    //everything that will draw the cloud
    display() {
        push();
        colorMode (HSB, 100);
        translate(this.x, this.y);
        scale(this.sc);
        this.drawRightArm();
        this.drawLeftArm();
        noStroke();
        //body
        fill(this.h, 30,255)
        circle(0, 0, 100);
        //circles around
        for (let a = 0; a < 2 * PI; a += PI / 6) {
            push();
            rotate(a);
            circle(50, 30, 50);
            pop();
        }
       
//eyes
        fill(0);
        circle(-30, 0, 5);
        circle(30, 0, 5);
        arc(0, 0, 30, 30, 0, PI);
        pop();
    }
    //updates the variables
    update() {
        this.y = lerp(this.y, this.y0 - 200 * noise(frameCount * 0.01), 0.1);
        this.x = this.x + this.speedX
        if (this.x > width){
      this.isOut = true;
    }
    }

    drawRightArm() {
        //arms
        push();
        beginShape();
        let lineLength2 = 100;
        noFill();
        for (let i = 0; i <= lineLength2; i += lineLength2 / 20) {
            strokeWeight(10);
            let v = 20 * sin(frameCount * 0.1 - i / 0.1);
            vertex(i, v);
        }
        endShape();
        pop();
    }
drawLeftArm() {
        //arms
        push();
        scale(-1, 1);
        beginShape();
        let lineLength2 = 100;
        noFill();
        for (let i = 0; i <= lineLength2; i += lineLength2 / 20) {
            strokeWeight(10);
            let v = 20 * sin(frameCount * 0.1 - i / 0.1);
            vertex(i, v);
        }
        endShape();
        pop();
    }
}



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

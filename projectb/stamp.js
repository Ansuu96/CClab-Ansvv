//card images
let img0 = []; //harvaaImgs
let img1 = []; //barildaanImgs
let img2 = []; //tseregImgs
let img3 = []; //tsamImgs
let img4 = []; //uraldaanImgs
let img5 = []; //sukhbaatarImgs

let chooseimage0 = false;
let chooseimage1 = false;
let chooseimage2 = false;
let chooseimage3 = false;
let chooseimage4 = false;
let chooseimage5 = false;

let harvaatext1 = "Mongolian Archery, Sur Harvaa in Mongolian ";  
// let harvaatext2 = "It reflects the historical importance of archery in hunting for our history.";
let barildaantext = "Mongolian wrestling";
let uraldaantext = "Horse Racing";
let sbtext = "historic figure";
let tseregtext = "Revolution of 1921";
let tsamtext= "Tsam masked dance";

class Cards{
  constructor(x, y, pixArray){
    this.x = x;
    this.y = y;
    this.pixArray = pixArray;
    this.index = 0;
  }
  display(){
    //animation
        push();
        scale(0.5);
        translate(this.x, this.y);
        //rotate(radians(-90));
        imageMode(CENTER);
        image(
          this.pixArray[this.index],
          0,
          0,
          this.pixArray[0].width * 0.25,
          this.pixArray[0].height * 0.25
        );
 
        pop();

        //harvaa animation
        if (this.pixArray.length > 0) {
          this.index = floor((frameCount / 20) % this.pixArray.length);
        }
    
  }
}
function keyPressed (){
   
  if (key === 'a') {
   chooseimage0 = true;
    //this.index = floor((frameCount / 40) % this.pixArray.length);
   //gSound.play();
   bgSound.stop()
   //text(harvaatext1, 50,50);
    //bgsound.stop();
    updateText();
    harvaaSound.play();
    //text(harvaatext,350,350);
  }else if (key === 'b') {
   chooseimage1 = true;
   barildaanSound.play();
   updateText();
   bgSound.stop()
   harvaaSound.pause();
}else if (key === 'c') {
   chooseimage2 = true;
   sbSound.play();
   updateText();
   bgSound.stop()
   harvaaSound.pause();
   barildaanSound.pause();
}else if (key === 'd') {
   chooseimage3 = true;
   uraldaanSound.play();
   updateText();
   bgSound.stop();
   barildaanSound.pause();
   sbSound.stop();
   harvaaSound.pause();
   gSound.pause();
}else if (key === 'e') {
   chooseimage4 = true;
   tsamSound.play();
   bgSound.stop();
   updateText();
   gSound.pause();
harvaaSound.pause();
sbSound.stop();
barildaanSound.pause();
uraldaanSound.pause();
}else if (key === 'r') {
   chooseimage5 = true;
   tseregSound.play();
   bgSound.stop()
   updateText();
   tsamSound.stop();
   gSound.pause();
   sbSound.stop();
harvaaSound.pause();
barildaanSound.pause();
uraldaanSound.pause();
}
}


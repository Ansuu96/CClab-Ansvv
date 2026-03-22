let scanned = [];
let HorseImgs = [];
let sunImgs = [];
let moonImgs = [];
let rockets;
let sun;
let moon;
let horse;
let sep = 30;
let angle = 0;
let mySound;
let mySound1;

let curSun = 0;
let curMoon = 0;
let curHorse = 0;
let horseX = 0;
let horseY = 300;
let horseSpeedX = 2;
//let sunY= 500;
//let moonY = 500;


function preload() {
  for (let i = 1; i <= 6; i++) {
    console.log("Loading frame" +i);
    scanned.push(loadImage("20260311120631-" + i + ".jpg"));
  }
    for(let i = 1; i<=5; i++){
     HorseImgs.push(loadImage("Horse-" + i + ".png"));
  }
    for(let i = 1; i<=3; i++){
      sunImgs.push(loadImage("sun-" + i + ".jpg"));
  }
    for(let i = 1; i<=3; i++){
    moonImgs.push(loadImage("moon-" + i + ".jpg"));
  }
  mySound = loadSound("bbc_animals--h_07024178.mp3");
mySound1 = loadSound("bbc_horses---h_07039333.mp3");
}

function setup() {
  createCanvas(800, 500);

   eraseBg(scanned, 10);
   eraseBg(HorseImgs);
eraseBg(sunImgs,200);
eraseBg(moonImgs,240);
 
  sun = crop(sunImgs,0,0, sunImgs[0].width, sunImgs[0].height);
  horse = crop(HorseImgs,0,0, HorseImgs[0].width, HorseImgs[0].height);
  moon = crop(moonImgs,0,0, moonImgs[0].width, moonImgs[0].height);
//  horse = HorseImgs;
//   sun = sunImgs;
//   moon = moonImgs;
}

function draw() {

  //background
  if(mouseIsPressed){
    background(0)
  }else{
  background(210,210,207);
  }
fill(9, 121, 105)
noStroke();
triangle(0,400,10,50,170,400);
triangle(50,400,200,150,350,400);
triangle(200,400,350,200,500,400);
triangle(350,400,500,250,650,400);
triangle(500,400,650,300,800,400);

rect(0,380,800,150);

 //grass 
for (let i = 0; i< 800; i+= sep) {
for (let j = 400; j < 500; j+=sep){
  
push();
translate(i, j);
  let d= dist(horseX , horseY, i,j)
  //let D= dist(0,0,800,500)
  let f= map(d,0,width,2,1)
  angle= map(d,0,width,0,-PI);
  colorMode(HSB, 100)
  let h= map(d,0,width,30,60)
rotate(-angle);
  
  scale(f)
  stroke(h,80,90,60)
  strokeWeight(5)
  line(0,0,sep*0.1, sep*0.1)
  pop();
}
}
//horse
push();
  translate(horseX, horseY);
  scale(3)
   //rotate(radians(-90));
  imageMode(CENTER);
  image(
   horse[curHorse],
   0,
   0,
   horse[0].width * 0.25,
   horse[0].height * 0.25
    );
  pop();
//update horse position
  horseX = mouseX;

//horse animation
curHorse = floor((frameCount / 5) % horse.length);
//sun
//moon

//push();
// imageMode(CENTER);
// image(
//     sun[curSun],
//     0,
//     0,
//     //mouseX,
//    //mouseY,
//     sun[0].width ,
//     sun[0].height ,
//   );
// curSun = floor((frameCount / 25) % sun.length);
// //pop();
if (keyIsPressed == true){
//moon
  //push();
  imageMode(CENTER);
  scale(0.8)
  image(
    moon[curMoon],
    0,
    0,
    //mouseX,
    //mouseY,
    moon[0].width *0.5,
    moon[0].height *0.5
  );

  curMoon = floor((frameCount /35) % moon.length)
  //pop();
}else{
imageMode(CENTER);
  scale(0.5)
translate(horseX, horseY);
image(
    sun[curSun],
    0,
    0,
    //mouseX,
   //mouseY,
    sun[0].width ,
    sun[0].height ,
  );
curSun = floor((frameCount / 25) % sun.length);
//pop();
}
//}

// function keyPressed() {
//   curMoon = (curMoon + 1)%moon.length;

// }




// You shouldn't need to modify these helper functions:

function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 10) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
}
  // this function uses the pixels array
  // we will cover this later in the semester - stay tuned
}
function mousePressed() {
  if (mySound.isPlaying() == false) {
    mySound.play();
  } else {
    mySound.stop();
  }
}
  function keyPressed() {
    if (mySound1.isPlaying() == false) {
mySound1.play();
  }else{
    mySound1.stop();
  }
  }


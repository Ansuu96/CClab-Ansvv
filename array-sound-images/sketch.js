let backSound;
let sounds = []
let img;


function preload() {
  img = loadImage("images/asterisk.png");
  backSound = loadSound("my-sounds/00.mp3");
  for (let i=1; i<= 8; i++){
    //sounds[i] = ;loadSound("my-sounds/0"+i+".mp3")
    //soundFormats.push(loadSound("my-sounds/0" +i+ ".mp3"))
sounds.push(loadSound("my-sounds/0" + i + ".mp3"));

  }
}


let x = [];
let y = [];


function setup() {
  createCanvas(400, 400);
  //backSound.loop();
}

function draw() {
  background(220);
  for (let i=0; i < x.length; i++) {
    drawCircle(x[i], y[i]);
  }
}
function drawCircle(u,v){
  fill(0);
  //circle(u, v, 50);
  image(img, u, v, img.width*0.5, img.height*0.5);
}

function mousePressed(){
  x.push(mouseX);
  y.push(mouseY);
  //let index = (x.length - 1)%sounds.length;
  let index = floor(map(mouseY,0, height, 0 , sounds.length))
  sounds[index],play();
  console.log(index);
  sounds[index].play()
} 

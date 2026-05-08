let sound;
let sound1;
let x;
let speedX = 5;
let s = 50;

function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();
  x = s/2;
}

function draw() {
  background(220);
 let level = mic.getLevel();
 let f = map(level,0,1,0,10);
 text (level, width/2,height/2);
  fill(0);
  circle(x,height/2,50);
  x+= speedX;
  if( x<s/2){
    speedX = -speedX;
    sound.play();
  }
  if ( x>width-s/2){
    speedX = -speedX
    sound.play();
  }
}
function preload(){
sound = loadSound("sounds/kick.mp3")
}
function mousePressed(){
  if(sound.isPlaying()==false){
    sound.play();
}else{
  sound.pause();
}
}
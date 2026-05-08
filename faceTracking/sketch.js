//faceTracking
let faceMesh;
let video;
let faces = [];
let x,y; //circle on the screen
let options = { maxFaces: 1, refineLandmarks: false, flipped: true};
function setup() {
  createCanvas(640, 480);
// push();
//   translate(width,0);
//   scale(-1,1);
//   image(video, 0, 0, width, height);
// pop();
    // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}
function preload() {
  faceMesh = ml5.faceMesh(options);
}
// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
function draw() {
  background(220);
  push();
translate(width,0);
scale(-1,1);
 image(video, 0, 0, width, height);
 pop();
//image(video, 0, 0, width, height);
      
  // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    let p1 = face.keypoints[0];
    let p2= face.keypoints[14];

    fill(0,255,0);
    circle(p1.x,p1.y,5);
    circle(p2.x,p2.y,5);

    let d = dist(p1.x, p1.y, p2.x, p2.y);
    console.log(d);
    if(d >40){
      x = lerp(x,p1.x, 0.1);
      y = lerp(y,p1.y, 0.1);
    }
    // let op = map(d,10,60,0,255);
    // background(0,op);
    // let myPoint = face.keypoints[168];
    // rectMode(CENTER);
    // fill(255);
    // rect(myPoint.x, myPoint.y, 150,50);

    // for (let j = 0; j < face.keypoints.length; j++) {
    //   let keypoint = face.keypoints[j];
    //   fill(0, 255, 0);
    //   noStroke();

    //   let d =dist(mouseX,mouseY,keypoint.x,keypoint.y);
    //   if(d<5){
    //   text(j,keypoint.x, keypoint.y, 5);
    
    // }
  }
}
 
function preload(){   
}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(100, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
    rect(20, 30, 300, 300);
describe('yellow rect with black outline in mid-right of canvas');
ellipse(56, 46, 200, 250);
describe('green ellipse with black outline in middle of a gray canvas');
}
   
function take_snapshot(){
    save('Kaarthik.png');
}
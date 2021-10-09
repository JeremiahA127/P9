var btn_red;
var btn_green;

var r = 0;
var g = 255;
var b = 0;

function setup() {
  createCanvas(400, 400); 
 buttonRed = createButton("Red")
 buttonRed.position(365,350)
  buttonRed.mousePressed(changeRed)
}

function draw() {
  background(r,g,b);
}
function changeRed(){
 r = 255
 g = 0 
 b = 0
}

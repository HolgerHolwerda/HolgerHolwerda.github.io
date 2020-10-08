let CX = 0;
let radius = 50;
let hastighed = 5;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  
  
  fill(0)  
  circle(CX,200,radius)
  
  if (CX > width - radius/2) {position = -hastighed}
  if (CX < 0 + radius/2) {position = hastighed}
 
  if (position <= 0) {if (keyIsPressed) {position = hastighed -4} }
  if (position >= 0) {if (keyIsPressed) {position = hastighed +4} }

  print(position)

  CX = CX + position
}
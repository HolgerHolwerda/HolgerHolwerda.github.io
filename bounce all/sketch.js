let radius = 50;
let hastighed = 3;

function setup() {
  createCanvas(600, 500);
  
}

function draw() {
  background(200);
  
  
  let CX = 100;

  if (CX < radius/2 || CX > width - radius/2) {hastighed=-hastighed};
  
  CX = CX + hastighed;

  circle(CX,200,radius)
}
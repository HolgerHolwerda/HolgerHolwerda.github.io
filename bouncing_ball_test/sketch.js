let CX = 100;
let radius = 50;
let hastighed = 3;
let hastighed_ændring = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //tegn cirkel:

  fill(0)  
  circle(CX,200,radius);
  
  // bevægelse:

  //if (CX > width - radius/2) {position = -hastighed;}
  //if (CX < radius/2) {position = hastighed;} 
  
  //ændring:
  
  //if (position >= 0) {if (mouseIsPressed) {position = hastighed + hastighed_ændring};}
  //if (position <= 0)  {if (mouseIsPressed) {position = hastighed - hastighed_ændring} ;}
  
  //print(position)

  //  || betyder eller && betyder og 
  
  if (CX < radius/2 || CX > width - radius/2) {hastighed=-hastighed};
 
  CX = CX + hastighed; //position
}
let CX = 0;
let radius = 50;
let hastighed = 5;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  
  //__________________________________________________
  
  // op og ned:
  // fill(150,100,400)  
  // circle(200,CX,radius)
  
  // if (CX < length + radius/2) {hastighed = 5}
  // if (CX > 400 - radius/2) {hastighed = -5}
  
  // CX = CX + hastighed
  
  //__________________________________________________
  
  // frem og tilbage:
  // fill(0)  
  // circle(CX,200,radius)
  
  // if (CX > width - radius/2) {hastighed = -3}
  // if (CX < 0 + radius/2) {hastighed = 3}
  
  // CX = CX + hastighed
  
  //_________________________________________________

fill(150,100,400)  
circle(200,CX,radius)

if (CX < 0 + radius/2) {hastighed = 5}
if (CX > mouseY - radius/2) {hastighed = -5}

CX = CX + hastighed



let rectL = 100;
let rectB = 15;

fill(0)
rect(mouseX - rectL/2,mouseY - rectB/2,rectL,rectB)


}
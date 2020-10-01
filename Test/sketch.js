let CX = 200;
let retning = 10

function setup() {
  createCanvas(400, 450);
}

function draw() {
  background(220);
  
let radius = 100

circle(CX,200,radius)

if (CX < width+radius) { CX = CX + 3} 
else if (CX > width) {CX=CX-400-radius}


}
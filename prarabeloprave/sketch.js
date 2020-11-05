function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(220);

  let x1 = width/2-150
  let x2 = width/2+150
  let x3 = width/2
  let y1 = 60
  let y2 = 60
  let y3 = mouseY

  let n = mouseX


point(x1,y1);
point(x2,y2);
point(x3,y3);


line(x1,y1,x3,y3);
line(x2,y2,x3,y3);

let a = 1
let b = 1
let x = 1
let y = a*x+b

map(y,10,300,10,300,true)

}
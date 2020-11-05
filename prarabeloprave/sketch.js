function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(220);

  let x1 = 100
  let x2 = 210
  let x3 = 150
  let y1 = 100
  let y2 = 100
  let y3 = mouseY


point(x1,y1);
point(x2,y2);
point(x3,y3);

point(sqrt(20),100);

line(x1,y1,x3,y3);
line(x2,y2,x3,y3);

map()

}
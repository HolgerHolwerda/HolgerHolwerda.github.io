function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

if(mouseX > width/2 && mouseY > height/2 || mouseX < width/2 && mouseY < height/2) {
  fill ('white');
}
  else {fill('red')}
  
  line(width/2,0,width/2,height)
  line(0,height/2,width,height/2)
  
  circle(mouseX,mouseY,30);

}
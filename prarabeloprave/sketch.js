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

  
  
  point(x1,y1);
  point(x2,y2);
  point(x3,y3);
  
  line(x1,y1,x3,y3);
  line(x2,y2,x3,y3);
  
  let n = map(mouseX,0,width,2,10,true)
  n = round(n)
  

for(let i = 0; i <= n; i++ ){
  const x = map(i,0,n,x1,x3,true)
  const y = map(i,0,n,y1,y3,true)
  
  circle(x,y,10)
  
}

}
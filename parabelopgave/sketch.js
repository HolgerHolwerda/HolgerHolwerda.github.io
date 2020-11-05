function setup() {
  createCanvas(600, 500);

}

function draw() {
  background(0);

  let px1 = width/2-150
  let px2 = width/2+150
  let px3 = width/2
  let py1 = 60
  let py2 = 60
  let py3 = mouseY
  let radius = 5

  
  line(px1,py1,px3,py3);
  line(px2,py2,px3,py3);
  
  let n = map(mouseX,0,width,2,20,true)
  n = round(n)
  

for(let i = 0; i <= n; i++ ){
  const x1 = map(i,0,n,px1,px3,true)
  const y1 = map(i,0,n,py1,py3,true)
  
  const x2 = map(i,0,n,px3,px2,true)
  const y2 = map(i,0,n,py3,py2,true)
  
  
  circle(x1,y1,radius)
  circle (x2,y2,radius)
  
  stroke(255)
  line(x1,y1,x2,y2)
  
}

}
function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(220);

  let px1 = width/2-150
  let px2 = width/2+150
  let px3 = width/2
  let py1 = 60
  let py2 = 60
  let py3 = mouseY

  
  
  point(px1,py1);
  point(px2,py2);
  point(px3,py3);
  
  line(px1,py1,px3,py3);
  line(px2,py2,px3,py3);
  
  let n = map(mouseX,0,width,2,10,true)
  n = round(n)
  

for(let i = 0; i <= n; i++ ){
  const x1 = map(i,0,n,px1,px3,true)
  const y1 = map(i,0,n,py1,py3,true)
  const x2 = map(i,0,n,px2,px3,true)
  const y2 = map(i,0,n,py2,py3,true)

  circle(x1,y1,10)
  circle (x2,y2,10)
 // line(y1,y2,x1,x2)
  
}


}
let diameter = 50;
let radius = diameter/2;

let xSpeed = [-1,5,3];
let ySpeed = [2,-4,1];
let xValues = [50,150,200];
let yValues = [100,200,300];

function setup() {
  createCanvas(600, 500);
  
}

function draw() {
  background(200);
  
  for(let i = 0 ; i < xValues.length && i < yValues.length; i++){
      if(xValues[i] > width - radius || xValues[i] < 0 + radius){
        xSpeed[i] = -xSpeed[i]
      }
      
       if(yValues[i] > height - radius || yValues[i] < 0 + radius){
         ySpeed[i] = -ySpeed[i]
         }
    
        xValues[i] += xSpeed[i];
        yValues[i] += ySpeed[i];
        
        circle(xValues[i],yValues[i],diameter);
      }
      
  
  
  
}
let radius = 50;
let hastighed = 15;
let xValues = [50,150,200];
let yValues = [100,200,300];

function setup() {
  createCanvas(600, 500);
  
}

function draw() {
  background(200);
  
  
  //circle(xValues,200,radius)
  
  for(let i = 0 ; i < xValues.length ; i++){
    
    xValues[i] += hastighed;
    //yValues[i] += hastighed;
    
    
    circle(xValues[i],yValues[i],radius)
    if(xValues[i] < radius/2 || xValues[i] > width - radius/2) {hastighed=-hastighed};
    
  }

}
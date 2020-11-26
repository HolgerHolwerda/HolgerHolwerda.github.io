let balls = new Array(20);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new Ball(width / 2, height / 2);
}
}

function draw() {
  background(200);
 
  for (let i = 0; i < balls.length; i++){
    const b = balls[i];
    b.render();
    b.update();
  }
}

class Ball {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = random(5,50)

    const sMax = 20
    this.speedX = random(-sMax,sMax)
    this.speedY = random(-sMax,sMax)
  } 

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  render() {
    circle(this.x, this.y, this.r*2);
  }
}
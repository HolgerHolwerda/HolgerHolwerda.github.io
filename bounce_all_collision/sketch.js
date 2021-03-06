let number_of_balls = 2;
let balls = new Array(number_of_balls);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new CollidingBouncingBall(100+i*300,200);
  }
}

function draw() {
  background(200);
 
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    b.render();
    b.update();
    b.collide();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(80, 100)

    const speedMax = 10
    this.speedX = random(-speedMax, speedMax)
    this.speedY = random(-speedMax, speedMax)
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  render() {
    circle(this.x, this.y, this.r * 2);
  }
}

class BouncingBall extends Ball {

  update() {
    super.update()
    if (this.x + this.r > width || this.x - this.r < 0) {
      this.speedX = -this.speedX

    }
    if (this.y + this.r > height || this.y - this.r < 0) {
      this.speedY = -this.speedY
    }
  }
}

class RandomBouncingBall extends BouncingBall {
  constructor(x, y) {
    super(x, y)
    const red = random(0, 255)
    const green = random(0, 255)
    const blue = random(0, 255)

    this.sc = color(blue, red, green)
    this.sw = random(1, 10)
    this.color = color(red, green, blue)
  }


  render() {
    stroke(this.sc)
    strokeWeight(this.sw)
    fill(this.color)

    super.render()
  }
}

class CollidingBouncingBall extends BouncingBall {

  collide() {   
    if(dist(this.x,this.y,this.x,this.y) < this.r){
      this.speedX = -this.speedX
      this.speedY = -this.speedY   


  }
  }
}
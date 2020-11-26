let number_of_balls = 10;
let balls = new Array(number_of_balls);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new RandomBouncingBall(width / 2, height / 2);
  }
}

function draw() {
  background(200);

  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    b.render();
    b.update();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(5, 50)

    const speedMax = 15
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
    this.sw = random(1,10)
    this.sc = random(1, 200)
    this.color = color(random(1, 200))
  }
  render() {
    fill(this.color)
    strokeWeight(this.sw)
    stroke(this.sc)
    super.render()
  }
}


function setup() {
  createCanvas(400, 400);

// udskriver for ligningen: 3*x*x+6*x+9 værdien af y for x = 10 til 100

let x = 0
let y = 0
let z = 10

do {

  y = 3*x*x+6*x+9
  console.log(y)
  x = x + z

} while (x<=100)

}


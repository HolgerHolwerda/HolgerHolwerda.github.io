

function setup() {
  createCanvas(400, 400);

// udskriver for ligningen: 3*x*x+6*x+9 værdien af y for x = 0 til 10

let x = 0
let y = 0

do {

  y = 3*x*x+6*x+9
  console.log(y)
  x++

} while (x<=10)

}
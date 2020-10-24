

function setup() {
  createCanvas(400, 400);

// udskriver 2-10 tabellerne

let x = 2
let y = 1
let z = 0

do { 

  if (y<=10) {
    z = x*y
    y++
    console.log(z)
  }
  
  else {
    x++
    y = 1
  }

}while (x<=10)

}
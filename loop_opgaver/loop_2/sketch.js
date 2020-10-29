

function setup() {
  createCanvas(400, 400);

// udskriver værdien af 1+2+3+...+n

let n = 20
let x = 1
let y = 1

do {
  x++
  y = y+x
} while (x<n)

console.log(y)

}

// med for lykke
// let sum = 0
// for (let i = 1; i<=20;i++) {
//   sum +=i
// }
// alert(sum);


function setup() {
  createCanvas(400, 400);

// udskriver 2-10 tabellerne

let tabel = 2
let y = 1
let produkt = 0

do { 

  if (y<=10) {
    produkt = tabel*y
    y++
    console.log(produkt)
  }
  
  else {
    tabel++
    y = 1
  }

}while (tabel<=10)

}

// med en for løkke

// for (let i = 2; i<=10; i++){
//   console.log('tabel: ${i}')
//   for (let j = 1; j<=10;j++){
//     let produkt = i*j;
//     console.log(produkt)
//   }
// }
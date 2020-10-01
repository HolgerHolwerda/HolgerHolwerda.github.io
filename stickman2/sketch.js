function setup() {
  createCanvas(400, 450);
}

function draw() {
  background(1);
  strokeWeight(2)

  let hovedradius = 70
  let position = 300
  let hovedfarve = color(189, 161, 123)
  let kropsfarve = ('lightblue')
  let øjenfarve = ('white')
 
  let kropsbredde = (30)
  let kropshøjde = (80)
  let kropsmidteX = 200 //(mouseX)
  let kropsmidteY = 200 //(mouseY)
  let x = (mouseX)
  let y = (mouseY)

  line(kropsmidteX - kropsbredde / 2, kropsmidteY, 140, 300); //armV
  line(kropsmidteX + kropsbredde / 2, kropsmidteY, 260, 300); //armH

  fill(hovedfarve)
  circle(200, 100, hovedradius);

  line(200, 135, kropsmidteX, kropsmidteY - kropshøjde / 2); //hals

  line(kropsmidteX - 5, kropsmidteY + kropshøjde / 2,150, 400); //benV
  line(kropsmidteX + 5, kropsmidteY + kropshøjde / 2, 250, 400); //benH
  
  //ansigt:
  //fill(øjenfarve)
  circle(190, 100, 10);
  circle(210, 100, 10);
  point(190, 100);
  point(210, 100);
  curve(50, 60, 185, 120, 215, 120, 200, 100);

  fill(kropsfarve)
  ellipse(kropsmidteX, kropsmidteY, kropsbredde, kropshøjde); //krop

stroke(width);
}

var d;

function draw() {
  d = random (10,100)
  fill (239, 254, 1);
  stroke (255, 136, 0);
  strokeWeight(4);
  ellipse (mouseX, mouseY, d, d);
}
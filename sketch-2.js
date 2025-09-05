var x = 0;
var y = 0;
var canvas; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
}

function draw() {
  colorMode (HSB, 365, 100, 100);
  background (map(mouseX, 0, windowWidth, 0, 360), 100, map(mouseY, 0, windowHeight, 50, 100));
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  text("🐾",x,y);
  textSize(100,200)
}


function mouseDragged() {
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 0, 360);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
function setup() {
  createCanvas(600,600);
}

function draw() {
  // random https://p5js.org/reference/#/p5/random
  // noise https://p5js.org/reference/#/p5/noise
  strokeWeight(2+(noise(mouseX)*random(10)));
  ellipse(mouseX, mouseY, 100, 100);
}

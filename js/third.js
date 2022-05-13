var dim;

function setup() {
  dim = width/2;
  colorMode(HSB, 360, 100, 100);
  noStroke();
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  background("black");
}

function draw() {
  var x = mouseX/8;
  var y= mouseY/8;
  drawGradient(mouseX, mouseY);
}

function drawGradient(x, y) {
  var radius = dim;
  for (r = radius; r > 0; --r) {
    fill(random(255), random(255), random(255));
    // ellipse(x+random(50), y+random(50), r, r);
    // ellipse(x+random(-50), y+random(-50), r, r);
    // ellipse(x+random(50), y+random(-50), r, r);
    // ellipse(x+random(-50), y+random(50), r, r);
    ellipse(x, y, r, r);
    //ellipse(x+random(50), y+random(50), r-random(10), r-random(10));
  }
}

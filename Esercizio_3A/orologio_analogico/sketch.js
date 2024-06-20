function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let radius = min(width, height) / 6;
  
  // Orologio dei minuti
  push();
  translate(width / 4, height / 2);
  drawClock(m, 60, radius);
  pop();

  // Orologio delle ore
  push();
  translate(width / 2, height / 2);
  drawClock(h % 12, 12, radius);
  pop();

  // Orologio dei secondi
  push();
  translate(3 * width / 4, height / 2);
  drawClock(s, 60, radius);
  pop();
}

function drawClock(currentTime, totalUnits, radius) {
  for (let i = 0; i < totalUnits; i++) {
    let angle = map(i, 0, totalUnits, 0, 360);
    let x = radius * cos(angle - 90);
    let y = radius * sin(angle - 90);
    if (i < currentTime) {
      fill(255);
    } else {
      fill(50);
    }
    noStroke();
    rectMode(CENTER);
    square(x, y, 10);
  }
}

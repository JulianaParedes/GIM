let snowflakes = []; 
let numSnowflakes = 10; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numSnowflakes; i++) {
    snowflakes.push(createSnowflake());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);

  for (let flake of snowflakes) {
    updateSnowflake(flake);
    drawSnowflake(flake.x, flake.y, flake.size, flake.opacity);
  }
}

function createSnowflake() {
  return {
    x: random(width),
    y: random(height),
    size: random(10, 30),
    speed: random(0.5, 2), // Velocità casuale per caduta lenta
    opacity: random(100, 255) // Opacità casuale tra 100 e 255
  };
}

function updateSnowflake(flake) {
  flake.y += flake.speed;

  // Se il fiocco di neve esce dallo schermo, ricomincia dall'alto
  if (flake.y > height) {
    flake.y = -flake.size;
    flake.x = random(width);
  }
}

function drawSnowflake(x, y, size, opacity) {
  push();
  translate(x, y);
  strokeWeight(2);
  stroke(255, 255, 255, opacity); // Imposta il colore con opacità

  // Disegna i bracci dell'asterisco
  for (let i = 0; i < 6; i++) {
    line(0, 0, 0, -size);
    rotate(PI / 3); // 60 gradi per creare un asterisco
  }

  pop();
}

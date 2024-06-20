let posX, posY;
let velX, velY;
let colore;
let glifi = ['*', '#', '@', '&', '%', '$', '!', '?']; 
let glifoCorrente;

function setup() {
  createCanvas(windowWidth, windowHeight);

  posX = width / 2;
  posY = height / 2;

  velX = random(1, 5); // 
  velY = random(1, 5);
  
  colore = color(random(256)); 
  glifoCorrente = random(glifi); 

  dimensione = 60; 
  dimensione_incremento = 0.5; 

  background(0);
}

function keyPressed() {
  if (key == 's') {
    save('pattern.png');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Non cancellare lo sfondo per lasciare una scia
  posX = posX + velX;
  posY = posY + velY;

  if (posX >= width || posX < 0) {
    velX = -velX;
    glifoCorrente = random(glifi); // Cambia glifo quando rimbalza
  }

  if (posY >= height || posY < 0) {
    velY = -velY;
    glifoCorrente = random(glifi); // Cambia glifo quando rimbalza
  }

  // Aggiorna la dimensione del glifo
  dimensione += dimensione_incremento;

  // Inverto la direzione del cambiamento della dimensione se raggiungo uno dei limiti
  if (dimensione >= 100 || dimensione <= 50) {
    dimensione_incremento = -dimensione_incremento;
  }

  colore = color(random(256)); // Cambia colore in scala di grigio ad ogni spostamento

  fill(colore); // Utilizza il colore aggiornato
  noStroke();
  textSize(dimensione);
  textAlign(CENTER, CENTER);
  text(glifoCorrente, posX, posY); // Disegna il glifo corrente
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
	stroke(255);
  
	// Disegna gocce di pioggia
	for (let i = 0; i < 70; i++) {
	  let lunghezza = random(24, 90);
	  let gocciax = random(0, width);
	  let gocciay = random(-lunghezza, height);
	  strokeWeight(random(1, 3));
	  line(gocciax, gocciay, gocciax, gocciay + lunghezza);
	}
	
  
	if (random(100) < 0.1) background(255);
  }

  
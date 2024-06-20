function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	textAlign(CENTER, CENTER);
  }
  
  function draw() {
	background(0, 0, 0);
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
  
	let spacing = width / 60;
  
	// ore
	textSize(14);
	for (let i = 0; i < 24; i++) {
	  let x = i * spacing + spacing / 2;
	  if (i === h) {
		fill(255, 255, 255); 
	  } else {
		fill(0);
	  }
	  text(i, x, height / 4);
	}
  
	// minuti
	textSize(14);
	for (let i = 0; i < 60; i++) {
	  let x = i * spacing + spacing / 2;
	  if (i === m) {
		fill(255, 255, 255);
	  } else {
		fill(0);
	  }
	  text(i, x, height / 2);
	}
  
	// secondi
	textSize(14);
	for (let i = 0; i < 60; i++) {
	  let x = i * spacing + spacing / 2;
	  if (i === s) {
		fill(255, 255, 255); 
	  } else {
		fill(0);
	  }
	  text(i, x, height * 3 / 4);
	}
  }
  
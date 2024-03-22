let noiseScale = 0.01; // Scale factor for Perlin noise
let timeOffset = 0; // Time offset for animation

function setup() {
  createCanvas(600, 600); // Create a canvas
  colorMode(HSB, 300, 100, 100); // Set color mode to HSB
}

function draw() {
  background(0); // Set background color

  timeOffset += 0.01; // Increment time offset

  for (let x = 0; x < width; x += 20) { // Loop over x-coordinate
    for (let y = 0; y < height; y += 20) { // Loop over y-coordinate
      
      // Generate Perlin noise value at current position with time offset
      let noiseVal = noise(x * noiseScale, y * noiseScale, timeOffset);

      // Map noise value to hue and saturation
      let hue = map(noiseVal, 0, 1, 0, 360);
      let saturation = map(noiseVal, 0, 1, 50, 100);

      // Set fill color using hue and saturation
      fill(hue, saturation, 100);

      // Add variation to rectangle size based on Perlin noise
      let sizeOffset = map(noiseVal, 0, 1, -5, 5);
      let rectSize = 20 + sizeOffset;
      
      // Draw a rectangle
      rectMode(CENTER);
      rect(x + 10, y + 10, rectSize, rectSize);
    }
  }
}
//resources I used to help me 
//https://www.youtube.com/watch?v=Qf4dIN99e2w&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=1
//https://natureofcode.com/random/


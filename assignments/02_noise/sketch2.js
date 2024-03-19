let noiseScale = 0.02;
let colors = ['#ff9900', '#ccff00', '#33ccff', '#ff33cc'];
let timeOffset = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  timeOffset += 0.01; // Increment time offset

  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let noiseVal = noise(x * noiseScale, y * noiseScale, timeOffset); // Add time offset to Perlin noise
      let bright = map(noiseVal, 0, 1, 0, 100);
      let colorIndex = floor(map(bright, 0, 100, 0, colors.length));
      fill(colors[colorIndex]);
      rect(x, y, 10, 10);
    }
  }
}


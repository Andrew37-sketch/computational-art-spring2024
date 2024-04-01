let count = 0; // Global variable to track recursive calls

function setup() {
  createCanvas(400, 400); // Create a canvas
  background(30, 30, 30); // Set background color to dark gray
  noFill(); // No fill for shapes
  drawCircle(width / 2, height / 2, 200); // Start drawing circles from the center
}

function draw() {
  // Uncomment the line below to animate the background
  // background(30, 30, 30, 10); 
}

function drawCircle(x, y, diameter) {
  if (diameter < 4 || count > 5) return; // Base case: stop recursion when diameter is too small or recursive limit reached
  
  let colorStrength = map(diameter, 4, 200, 100, 255); // Map diameter to stroke color strength
  
  stroke(255, colorStrength, 0); // Orange stroke color with dynamic brightness
  
  ellipse(x, y, diameter); // Draw a circle
  
  let newDiameter = diameter * 0.7; // Reduce diameter for the next circle
  
  // Recursive calls to draw smaller circles
  drawCircle(x + diameter * 0.3, y, newDiameter); // Right circle
  drawCircle(x - diameter * 0.3, y, newDiameter); // Left circle
  drawCircle(x, y + diameter * 0.3, newDiameter); // Bottom circle
  drawCircle(x, y - diameter * 0.3, newDiameter); // Top circle
  
  count++; // Increment count
}


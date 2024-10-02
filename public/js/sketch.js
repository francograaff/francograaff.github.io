let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let prevMinute = -1;

function setup() {
    // Get the width of the element with class mw6
    let containerWidth = select('.mw6').width;
    createCanvas(containerWidth, 400); // Set canvas width to mw6 max width
    colorMode(HSB);
    noStroke();
    textOutput();
  }
  
  function draw() {
    background(90, 1, 98);

    // Scale the mouseX value from 0 to 720 to a range between 0 and 360
    let circleHue = map(mouseX, 0, width, 0, 360);

    // Scale the mouseY value from 0 to 400 to a range between 20 and 300
    let diameter = map(mouseY, 0, height, 20, 300);

    fill(circleHue, 80, 90);
    circle(width / 2, height / 2, diameter / 1.5);
  }
  

  
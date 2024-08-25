const width = 125;
const height = 125;
setDocDimensions(width, height);

const numSkyScrapers = 24;
const SecLayerNumSkyScrapers = 12;
const skyScraperRandomizer = bt.randInRange;
var fullWidth;

const skyScrapers = [];
const scraperGen = [];

function createSkyScrapers() {
  const turtle = new bt.Turtle()
  fullWidth = 0;
while (fullWidth < width) {
  turtle.setAngle(90);
  const tempHeight = skyScraperRandomizer(10,50)
  turtle.forward(tempHeight);
  turtle.setAngle(0);
  const tempDivider = skyScraperRandomizer(numSkyScrapers - 18, numSkyScrapers +25)
  if (fullWidth + (width / tempDivider) >= width) {
    turtle.forward(width - fullWidth);
    turtle.setAngle(-90);
    turtle.forward(tempHeight);
    break;
      } else {
    turtle.forward(width / tempDivider);
    turtle.setAngle(-90);
  turtle.forward(tempHeight);
  }
  
  fullWidth = fullWidth + (width / tempDivider)
}
  return turtle.lines();
}


const u = createSkyScrapers()
const t = createSkyScrapers()
drawLines(u, {fill:"#FFF"});
drawLines(u);
drawLines(t, {fill:"#FFF"});
drawLines(t);

// Made with ❤ by Creeperlulu
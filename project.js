const width = 125;
const height = 125;
setDocDimensions(width, height);

// Edit these values to change the look of the artwork!
const skyScrapersIntensity = 12;



const skyScraperRandomizer = bt.randInRange;
var fullWidth;
const skyScrapers = [];
const scraperGen = [];

// Generate skyscrapers
function createSkyScrapers() {
  const turtle = new bt.Turtle()
  fullWidth = 0;
while (fullWidth < width) {
  turtle.setAngle(90);
  const tempHeight = skyScraperRandomizer(10,50)
  turtle.forward(tempHeight);
  turtle.setAngle(0);
  const tempDivider = skyScraperRandomizer(skyScrapersIntensity, skyScrapersIntensity +25)
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

function createStars(nbr){
  for (let i = 0; i < nbr; i++) {
    
  }
}

const star = bt.nurbs([[0, 0], [1, 0], [1, 1]], { steps: 4, degree: 2 });
const star2 = bt.nurbs([[0, 0], [0, -1], [1, -1]], { steps: 4, degree: 2 });
const star3 = bt.nurbs([[0, 0], [-1, 0], [-1, -1]], { steps: 4, degree: 2 });
const star4 = bt.nurbs([[0, 0], [1, 0], [1, 1]], { steps: 4, degree: 2 });

// Print the skyscrapers lines
const u = createSkyScrapers()
const t = createSkyScrapers()
//const stars = createStars(nbrStars)
drawLines(u, {fill:"#FFF"});
drawLines(u);
drawLines(t, {fill:"#FFF"});
drawLines(t);
drawLines([star]);

// Made with ❤ by Creeperlulu
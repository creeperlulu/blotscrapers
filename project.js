const width = 125;
const height = 125;
setDocDimensions(width, height);

// Edit these values to change the look of the artwork!
const skyScrapersIntensity = 12;



const randomizer = bt.randInRange;
var fullWidth;
const skyScrapers = [];
const scraperGen = [];

// Generate skyscrapers
function createSkyScrapers() {
  const turtle = new bt.Turtle()
  fullWidth = 0;
while (fullWidth < width) {
  turtle.setAngle(90);
  const tempHeight = randomizer(10,50)
  turtle.forward(tempHeight);
  turtle.setAngle(0);
  const tempDivider = randomizer(skyScrapersIntensity, skyScrapersIntensity +25)
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
  fullWidth = fullWidth + (width / tempDivider);
}
  return turtle.lines();
}

function createStar(x, y, size){
    const star = bt.nurbs([[(-1*size)+x, (0*size)+y], [(0*size)+x, (0*size)+y], [(0*size)+x, (1*size)+y]], { steps: 8, degree: 2 });
    const star2 = bt.nurbs([[(0*size)+x, (1*size)+y], [(0*size)+x, (0*size)+y], [(1*size)+x, (0*size)+y]], { steps: 8, degree: 2 });
    const star3 = bt.nurbs([[(1*size)+x, (0*size)+y], [(0*size)+x, (0*size)+y], [(0*size)+x, (-1*size)+y]], { steps:8, degree: 2 });
    const star4 = bt.nurbs([[(0*size)+x, (-1*size)+y], [(0*size)+x, (0*size)+y], [(-1*size)+x, (0*size)+y]], { steps: 8, degree: 2 });
    var starshape = [];
    starshape.push(star, star2, star3, star4);
    return starshape;
}

function createStars(nbr){
  var stars = [];
  var tempX = 0;
  var tempY = 0;
  var tempSize = 0;
  var genstar = [];
  for (let i = 0; i < nbr; i++) {
    tempSize = randomizer(0.2,3);
    tempX = randomizer(0+tempSize/2,width-tempSize/2);
    tempY = randomizer(0+tempSize/2,height-tempSize/2);
    genstar = createStar(tempX, tempY, tempSize);
    console.log(genstar)
    stars.push(genstar);
  }
  return stars;
}



// Print the skyscrapers lines
const u = createSkyScrapers();
const t = createSkyScrapers();
//const stars = createStars(nbrStars);
drawLines(u, {fill:"#FFF"});
drawLines(u);
drawLines(t, {fill:"#FFF"});
drawLines(t);
const starrySky = createStars(5);
drawLines(starrySky);

// Made with ❤ by Creeperlulu
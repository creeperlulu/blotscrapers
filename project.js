/*
@title: Skyscrapers in the starry sky
@author: Creeperlulu
@snapshot: skyscrapersinstarrysky.png
*/

// Edit these values to change the look of the artwork!
const width = 125;
const height = 125;
const skyScrapersIntensity = 12;
const minSkyScraperHeight = 10;
const maxSkyScraperHeight = 50;
const nbrStars = 200;
const minStarSize = 0.1;
const maxStarSize = 1;
const moonQuality = 50
const moonRadius = 28;
const nbrCraters = 5;
const waterRepeats = 10;
const waterHeight = 2


// Initialize scene
setDocDimensions(width, height);
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
  const tempHeight = randomizer(minSkyScraperHeight,maxSkyScraperHeight)
  turtle.forward(tempHeight);
  turtle.setAngle(0)
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

// Creates a single star
function createStar(x, y, size){
    const star = bt.nurbs([[(-1*size)+x, (0*size)+y], [(0*size)+x, (0*size)+y], [(0*size)+x, (1*size)+y]], { steps: 8, degree: 2 });
    const star2 = bt.nurbs([[(0*size)+x, (1*size)+y], [(0*size)+x, (0*size)+y], [(1*size)+x, (0*size)+y]], { steps: 8, degree: 2 });
    const star3 = bt.nurbs([[(1*size)+x, (0*size)+y], [(0*size)+x, (0*size)+y], [(0*size)+x, (-1*size)+y]], { steps:8, degree: 2 });
    const star4 = bt.nurbs([[(0*size)+x, (-1*size)+y], [(0*size)+x, (0*size)+y], [(-1*size)+x, (0*size)+y]], { steps: 8, degree: 2 });
    var starshape = [];
    starshape.push(star, star2, star3, star4);
    return starshape;
}

// Creates the starry sky
function createStarrySky(nbr){
  var stars = [];
  var tempX = 0;
  var tempY = 0;
  var tempSize = 0;
  var genstar = [];
  for (let i = 0; i < nbr; i++) {
    tempSize = randomizer(minStarSize,maxStarSize);
    tempX = randomizer(0+tempSize,width-tempSize);
    tempY = randomizer(0+tempSize,height-10-tempSize);
    genstar = createStar(tempX, tempY+10, tempSize);
        stars.push(genstar[0], genstar[1], genstar[2], genstar[3]);
    
  }
  return stars;
}

function createWater(){
    // The only time you'll see me use the Pythagorean theorem
  const turtle = new bt.Turtle()
  turtle.down();
  turtle.goTo([0, 10]);
  turtle.up();
  for (let i = 0; i < waterRepeats; i++) {
    turtle.goTo([turtle.pos[0]+((width/waterRepeats)/2),waterHeight])
    turtle.goTo([turtle.pos[0]+((width/waterRepeats)/2),waterHeight/2])
  }
  return turtle.lines()
  
}

// Creates the moon (really just a simple circle) 
function createCircle(x, y, radius, nbrPoints) {
  const circle = [];
  for (let i = 0; i <= nbrPoints; i++) {
    const angle = (i / nbrPoints) * 2 * Math.PI;
    circle.push([x+radius*Math.cos(angle), y+radius*Math.sin(angle)]);
  }
  return circle;
}




// Print the scene
const u = createSkyScrapers();
const t = createSkyScrapers();
const starrySky = createStarrySky(nbrStars);
const moon = createCircle(width-moonRadius-width/20, height-moonRadius-height/20, moonRadius, moonQuality);
//Craters
const craters = []
for (let i = 0; i < nbrCraters; i++){
  var crater = createCircle(randomizer(150-moonRadius-125/20, 110-moonRadius-125/20), randomizer(110-moonRadius-125/20, 140-moonRadius-125/20), randomizer(moonRadius/30, moonRadius/12), moonQuality);
    craters.push(crater);
}
drawLines(starrySky);
drawLines([moon], {fill:"#FFF"});
drawLines([moon]);
drawLines(craters);
drawLines(u, {fill:"#FFF"});
drawLines(u);
drawLines(t, {fill:"#FFF"});
drawLines(t);
console.log(createWater())
drawLines(createWater());


// Made with ❤ by Creeperlulu
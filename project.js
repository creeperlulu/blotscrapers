const width = 125;
const height = 125;
setDocDimensions(width, height);
const t = new bt.Turtle()
const u = new bt.Turtle()

const numSkyScrapers = 24;
const SecLayerNumSkyScrapers = 24;
const skyScraperHeight = bt.randInRange;

const skyScrapers = [];
const scraperGen = [];

const bg = [
    [0,0],
    [0,height],
    [height, width],
    [height, 0],
    [0,0]
];

for (let i = 0; i < numSkyScrapers; i++) {
  t.setAngle(90);
  const tempHeight = skyScraperHeight(10,50)
  t.forward(tempHeight);
  t.setAngle(0);
  t.forward(width / numSkyScrapers);
  t.setAngle(-90);
  t.forward(tempHeight);
}

for (let i = 0; i < numSkyScrapers; i++) {
  u.setAngle(90);
  const tempHeight = skyScraperHeight(10,50)
  u.forward(tempHeight);
  u.setAngle(0);
  u.forward(width / numSkyScrapers);
  u.setAngle(-90);
  u.forward(tempHeight);
}

drawLines([bg], {fill:"#000"});
drawLines(t.lines(), {fill:"#FFF"});

// Made with ❤ by Creeperlulu
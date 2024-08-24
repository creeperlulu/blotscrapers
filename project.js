const width = 125;
const height = 125;
setDocDimensions(width, height);
const t = new bt.Turtle()
const u = new bt.Turtle()

const numSkyScrapers = 24;
const SecLayerNumSkyScrapers = 12;
const skyScraperRandomizer = bt.randInRange;
const fullWidth = 0;

const skyScrapers = [];
const scraperGen = [];

for (let i = 0; i < numSkyScrapers; i++) {
  t.setAngle(90);
  const tempHeight = skyScraperRandomizer(10,50)
  t.forward(tempHeight);
  t.setAngle(0);
  const tempDivider = skyScraperRandomizer(numSkyScrapers - 18, numSkyScrapers +25)
  t.forward(width / tempDivider);
  t.setAngle(-90);
  t.forward(tempHeight);
  fullWidth = fullWidth + (width / tempDivider)
}

for (let i = 0; i < SecLayerNumSkyScrapers; i++) {
  u.setAngle(90);
  
  const tempHeight = skyScraperRandomizer(10,50)
  u.forward(tempHeight);
  u.setAngle(0);
  u.forward(width / SecLayerNumSkyScrapers);
  u.setAngle(-90);
  u.forward(tempHeight);
}

const BackScrapersLines = bt.offset(u.lines(), 0.2);

drawLines(u.lines(), {fill:"#525252"});
drawLines(BackScrapersLines, {fill:"#000"});
drawLines(t.lines(), {fill:"#FFF"});
drawLines(t.lines());

// Made with ❤ by Creeperlulu
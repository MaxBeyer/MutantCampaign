let thickWoods = {
  environment: "Thick Woods",
  ruin: false,
  artifact: false
};
let scrublands = {
  environment: "Scrublands",
  ruin: false,
  artifact: false
};
let marshlands = {
  environment: "Marshlands",
  ruin: false,
  artifact: false
};
let deadWoods = {
  environment: "Dead Woods",
  ruin: false,
  artifact: false
};
let ashDesert = {
  environment: "Ash Desert",
  ruin: false,
  artifact: false
};
let hugeCrater = {
  environment: "Huge Crater",
  ruin: false,
  artifact: false
};
let glasifiedField = {
  environment: "Glasified Field",
  ruin: false,
  artifact: false
};
let overgrownRuins = {
  environment: "Overgrown Ruins",
  ruin: true,
  artifact: true
};
let crumblingRuins = {
  environment: "Crumbling Ruins",
  ruin: true,
  artifact: true
};
let decayedRuins = {
  environment: "Decayed Ruins",
  ruin: true,
  artifact: true
};
let unscathedRuins = {
  environment: "Unscathed Ruins",
  ruin: true,
  artifact: true
};
let derelictIndustries = {
  environment: "Derelict Industries",
  ruin: true,
  artifact: true
};
let settlement = {
  environment: "Settlement",
  ruin: true,
  artifact: true
};

let sectorData = new Map();
sectorData.set(11, thickWoods);
sectorData.set(12, thickWoods);
sectorData.set(13, scrublands);
sectorData.set(14, scrublands);
sectorData.set(15, scrublands);
sectorData.set(16, marshlands);
sectorData.set(21, marshlands);
sectorData.set(22, deadWoods);
sectorData.set(23, deadWoods);
sectorData.set(24, deadWoods);
sectorData.set(25, ashDesert);
sectorData.set(26, ashDesert);
sectorData.set(31, hugeCrater);
sectorData.set(32, glasifiedField);
sectorData.set(33, overgrownRuins);
sectorData.set(34, overgrownRuins);
sectorData.set(35, overgrownRuins);
sectorData.set(36, crumblingRuins);
sectorData.set(41, crumblingRuins);
sectorData.set(42, crumblingRuins);
sectorData.set(43, decayedRuins);
sectorData.set(44, decayedRuins);
sectorData.set(45, decayedRuins);
sectorData.set(46, decayedRuins);
sectorData.set(51, decayedRuins);
sectorData.set(52, unscathedRuins);
sectorData.set(53, unscathedRuins);
sectorData.set(54, unscathedRuins);
sectorData.set(55, unscathedRuins);
sectorData.set(56, unscathedRuins);
sectorData.set(61, derelictIndustries);
sectorData.set(62, derelictIndustries);
sectorData.set(63, derelictIndustries);
sectorData.set(64, derelictIndustries);
sectorData.set(65, settlement);
sectorData.set(66, settlement);

export { sectorData };

module.exports.getBandInfo = (req, res) => {
  return {};
};

const getBandsNeeded = (pipeLength) => {
  let numberOfBands = pipeLength / 12;
  // adding one to the number because you will always need one more
  return numberOfBands + 1;
};

const findWasteLevel = (cutOutLevel) => {
  let wasteLevel;
  if (cutOutLevel === "normal") {
    wasteLevel = 1.1;
  } else if (cutOutLevel === "medium") {
    wasteLevel = 1.15;
  } else {
    wasteLevel = 1.2;
  }
  return wasteLevel;
};

const calculateBands = (circumference, pipeLength, cutOutLevel) => {
  const bandLength = circumference + 10;
  const totalBandsNeeded = getBandsNeeded(pipeLength);
  const totalBandLength =
    bandLength * totalBandsNeeded * findWasteLevel(cutOutLevel);
  return totalBandLength;
};

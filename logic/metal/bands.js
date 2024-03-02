function calculatePipeBands(circumference, pipeLength) {
  const bandLength = circumference + 10;
  let bandQuantity = Math.ceil(pipeLength / 12) + 1;
  let totalBandLength = bandLength * bandQuantity;
  return { totalBandLength, bandQuantity, bandLength };
}

function calculateNinetyBands(bandLength, ninetyQuantity, goreQuantity) {
  if (ninetyQuantity === 0 && goreQuantity === 0) return { totalBandLength: 0 };
  let bandQuantity = ninetyQuantity * goreQuantity + 1;
  let totalBandLength = bandLength * bandQuantity;
  return { totalBandLength, bandQuantity, bandLength };
}

export { calculatePipeBands, calculateNinetyBands };

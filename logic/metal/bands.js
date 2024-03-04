function calculateBands(circumference, pipeLength, ninety) {
  const bandLength = parseInt(circumference) + 10;
  let bandQuantity = parseInt(pipeLength) + 1;

  let totalBandLength = bandLength * bandQuantity;
  if (ninety.ninetyQuantity && ninety.ninetyQuantity > 0) {
    const ninetyBanduantity =
      parseInt(ninety.ninetyQuantity) * parseInt(ninety.goreQuantity) + 1;
    bandQuantity += ninetyBanduantity;
    totalBandLength += bandLength * ninetyBanduantity;
  }
  return { totalBandLength, bandQuantity, bandLength };
}


export { calculateBands };

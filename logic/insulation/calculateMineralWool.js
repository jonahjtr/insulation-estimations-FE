function calculatePipeWithMineralWool(circumference, pipeLength, thickness) {
  const circumferenceAdjustment = Math.ceil(
    parseInt(circumference) + (5 * parseInt(thickness)) / 12
  );
  const totalSquareFeet = circumferenceAdjustment * parseInt(pipeLength);

  return { totalSquareFeet };
}

export { calculatePipeWithMineralWool };

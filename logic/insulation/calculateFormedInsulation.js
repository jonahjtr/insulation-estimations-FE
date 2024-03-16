function calculateFormedInsulation(pipeLength, stickLength) {
  const peices = Math.ceil(pipeLength / stickLength) * 2;
  const linearFeet = pipeLength * 2;

  return { peices, linearFeet };
}

export { calculateFormedInsulation };

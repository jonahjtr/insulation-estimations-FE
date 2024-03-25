// function CalculateFormedInsulation(pipeLength, stickLength) {
//   const numberOfSticks = Math.ceil(pipeLength / stickLength) * 2;
//   const linearFeet = pipeLength * 2;
//   return { linearFeet, numberOfSticks };
// }

// console.log("hardinsulation : ", CalculateFormedInsulation(45, 3));

export function CalculateMetalJacketing(circumference, pipeLength, sheetWidth) {
  const numberOfSheets = Math.ceil(
    parseInt(pipeLength) / (parseInt(sheetWidth) - 0.25)
  );
  let lengthOfSheet = parseInt(circumference) + 3;
  const totalMetalNeeded = Math.ceil((numberOfSheets * lengthOfSheet) / 12);

  const totalSquareFeet = Math.ceil(numberOfSheets * parseInt(sheetWidth));

  return {
    numberOfSheets,
    lengthOfSheet,
    totalSquareFeet,
  };
}

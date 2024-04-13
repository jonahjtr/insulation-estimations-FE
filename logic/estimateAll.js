// everything is in inches except for pipelength
// const INITIAL_DATA = {
//   nineties: "true",
//   insulation: {
//     type: "mineral wool",
//     thickness: "2",
//     length: "",
//     width: "48",
//   },
//   equipmentToInsulate: {
//     difficulty: "2",
//     length: "200",
//     circumference: "135",
//   },
//   ninety: {
//     quantityOfNineties: "1",
//     numberOfGores: "4",
//   },
// };

export const estimateAllSheetInsulation = (data) => {
  const { insulation, equipmentToInsulate, ninety } = data;
  const pipeLength = parseInt(equipmentToInsulate.length);
  const insulationWidth = parseInt(insulation.width);
  const insulationData = calculateSheetInsulation(
    parseInt(equipmentToInsulate.circumference),
    pipeLength,
    parseInt(insulation.thickness),
    parseInt(insulation.width),
    ninety
  );
  const bandData = calculateBands(
    insulationData.sheetLength,
    pipeLength,
    ninety
  );
  const metalData = CalculateMetalJacketing(
    insulationData.sheetLength,
    pipeLength,
    insulationWidth
  );

  return { insulationData, bandData, metalData };
};

//------------------------------------------------formed insulation ------------------------------------------------------
export const estimateAllFormedInsulation = (data) => {
  const { insulation, equipmentToInsulate, ninety } = data;

  const pipeLength = parseInt(equipmentToInsulate.length);
  const insulationWidth = parseInt(insulation.width);

  const insulationData = calculateFormedInsulation(
    parseInt(pipeLength),
    insulationWidth
  );

  const pipeDiameter = equipmentToInsulate.circumference / Math.PI;
  const fullDiameter =
    Math.ceil(pipeDiameter) + parseInt(insulation.thickness) * 2;
  const outerCircumference = Math.ceil(fullDiameter * Math.PI);

  const bandData = calculateBands(outerCircumference, pipeLength, ninety);

  const metalData = CalculateMetalJacketing(outerCircumference, pipeLength, 36);

  return { insulationData, bandData, metalData };
};
//-----------------------------------------formed insulation^^^^^ ------------------------------------------------------

//-----------------------------------------helper functions ------------------------------------------------------

function calculateFormedInsulation(pipeLength, insulationWidth) {
  const widthInFeet = Math.ceil(parseInt(insulationWidth) / 12);
  const numberOfSticks = parseInt(pipeLength) / widthInFeet;
  const totalLinearFeet = parseInt(pipeLength) * 2;
  return {
    numberOfSticks: Math.ceil(numberOfSticks * 2),
    totalLinearFeet,
  };
}
function CalculateMetalJacketing(circumference, pipeLength, sheetWidth) {
  const lengthOfSheet = parseInt(circumference) + 3;
  const sheetWidthAfterLap = (parseInt(sheetWidth) - 4) / 12;

  const numberOfSheets = parseInt(pipeLength) / sheetWidthAfterLap;

  const totalSquareFeet = Math.ceil(numberOfSheets * parseInt(sheetWidth));

  return {
    numberOfSheets: Math.ceil(numberOfSheets),
    lengthOfSheet,
    totalSquareFeet,
  };
}

function calculateSheetInsulation(circumference, pipeLength, thickness, width) {
  const calculateSheetLength = (thickness, circumference) => {
    let extra = 6 * thickness;
    return circumference + extra;
  };

  const sheetLength = calculateSheetLength(
    parseInt(thickness),
    parseInt(circumference)
  );
  const totalSquareFeet = sheetLength * parseInt(pipeLength);
  const widthInFeet = Math.ceil(parseInt(width) / 12);
  const numberOfSheets = parseInt(pipeLength) / widthInFeet;
  return { sheetLength, totalSquareFeet, numberOfSheets };
}

function calculateBands(circumference, pipeLength, ninety) {
  const bandLength = parseInt(circumference) + 10;
  let bandQuantity = parseInt(pipeLength) + 1;

  let totalBandLength = bandLength * bandQuantity;
  if (ninety.quantityOfNineties && ninety.quantityOfNineties > 0) {
    const ninetyBanduantity =
      parseInt(ninety.quantityOfNineties) * parseInt(ninety.numberOfGores) + 1;
    bandQuantity += ninetyBanduantity;
    totalBandLength += bandLength * ninetyBanduantity;
  }
  if (circumference / Math.PI > 12) {
    return {
      totalBandLength: totalBandLength * 2,
      bandQuantity: bandQuantity * 2,
      bandLength,
    };
  }
  return { totalBandLength, bandQuantity, bandLength };
}

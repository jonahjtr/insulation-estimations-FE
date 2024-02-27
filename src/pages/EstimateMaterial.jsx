import { useState, useEffect } from "react";

import EstimationForm from "../components/estimateMaterial/EstimationForm";

const EstimateMaterial = () => {
  const [cutOutDifficulty, setcutOutDifficulty] = useState("normal");
  const [circumference, setCircumference] = useState(0);
  const [pipeLength, setPipeLength] = useState(0);
  const [ninety, setNinety] = useState({ quantity: 0, goreQuantity: 0 });

  const [shownData, setShownData] = useState({});
  const [lengthOfBanding, setLengthOfBanding] = useState("");

  console.log("setShownData", shownData);
  const getBandsNeeded = (pipeCirc, pipeLength) => {
    let numberOfBands = pipeLength / 12;
    let bandLength = pipeCirc + 10;
    return bandLength * numberOfBands;
  };
  useEffect(() => {
    const { pipeLength, circumference, numberOf90s, goreQuantity } = shownData;
    setCircumference(circumference);
    setPipeLength(pipeLength * 12);
    setNinety({ quantity: numberOf90s, goreQuantity: goreQuantity });
  }, [shownData]);

  const calculateBandsOf90 = (
    gores,
    circumference,
    numberOf90s,
    cutOutLevel
  ) => {
    const bandLength = circumference + 10;
    const totalBandLength =
      gores * bandLength * numberOf90s * findWasteLevel(cutOutLevel);

    return totalBandLength / 12;
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
    const totalBandsNeeded = pipeLength / 12;
    const lengthBeforeWaste = bandLength * totalBandsNeeded;
    const totalBandLength = lengthBeforeWaste * findWasteLevel(cutOutLevel);
    return totalBandLength / 12;
  };

  // const circumference = 135;
  // const pipeLength = 600;
  // const ninety = {
  //   quantity: 3,
  //   goreQuantity: 16,
  // };
  // const cutOutDifficulty = "alot";
  console.log(
    "straightPipe",
    calculateBands(circumference, pipeLength, cutOutDifficulty)
  );
  console.log(
    "bands for 90s",
    calculateBandsOf90(
      ninety.goreQuantity,
      circumference,
      ninety.quantity,
      cutOutDifficulty
    )
  );

  const totalBandLengthForProject =
    calculateBands(circumference, pipeLength, cutOutDifficulty) +
    calculateBandsOf90(
      ninety.goreQuantity,
      circumference,
      ninety.quantity,
      cutOutDifficulty
    );

  console.log(totalBandLengthForProject);

  return (
    <div className="bg-slate-700	h-screen w-screen">
      <EstimationForm shownData={shownData} setFormData={setShownData} />
      <div className="mx-auto w-fit ">
        {isNaN(lengthOfBanding) ? <p>result: 0</p> : <p>{lengthOfBanding}</p>}
      </div>
      <div className="mx-auto w-fit text-slate-300	 ">
        total Feet Of bands needed:
        <br />
        {Math.ceil(totalBandLengthForProject)}
        <br />
        Each Band is :{circumference + 10} inches
        <br />
        number Of Bands Needed :{Math.ceil(pipeLength / 12)}
        <br />
      </div>
    </div>
  );
};

export default EstimateMaterial;

// console.log("Hello, World!");

// const calculateBandsOf90 = (gores, circumference, numberOf90s, cutOutLevel) => {
//   const bandLength = circumference + 10;
//   const totalBandLength =
//     gores * bandLength * numberOf90s * findWasteLevel(cutOutLevel);

//   return totalBandLength / 12;
// };

// const findWasteLevel = (cutOutLevel) => {
//   let wasteLevel;
//   if (cutOutLevel === "normal") {
//     wasteLevel = 1.1;
//   } else if (cutOutLevel === "medium") {
//     wasteLevel = 1.15;
//   } else {
//     wasteLevel = 1.2;
//   }
//   return wasteLevel;
// };

// const calculateBands = (circumference, pipeLength, cutOutLevel) => {
//   const bandLength = circumference + 10;
//   const totalBandsNeeded = pipeLength / 12;
//   const lengthBeforeWaste = bandLength * totalBandsNeeded;
//   const totalBandLength = lengthBeforeWaste * findWasteLevel(cutOutLevel);
//   return totalBandLength / 12;
// };

// const circumference = 135;
// const pipeLength = 1200;
// const ninety = {
//   quantity: 2,
//   goreQuantity: 14,
// };

// console.log(
//   "straightPipe",
//   calculateBands(circumference, pipeLength, "normal")
// );
// console.log(
//   "bands for 90s",
//   calculateBandsOf90(
//     ninety.goreQuantity,
//     circumference,
//     ninety.quantity,
//     "normal"
//   )
// );

// const totalBandsForProject =
//   calculateBands(circumference, pipeLength, "normal") +
//   calculateBandsOf90(
//     ninety.goreQuantity,
//     circumference,
//     ninety.quantity,
//     "normal"
//   );

// console.log(totalBandsForProject);

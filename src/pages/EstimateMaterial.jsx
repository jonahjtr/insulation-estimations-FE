import { useState, useEffect } from "react";

import EstimationForm from "../components/estimateMaterial/EstimationForm";

const EstimateMaterial = () => {
  const [cutOutDifficulty, setcutOutDifficulty] = useState("normal");
  const [circumference, setCircumference] = useState(0);
  const [pipeLength, setPipeLength] = useState(0);
  const [ninety, setNinety] = useState({ quantity: 0, goreQuantity: 0 });

  const [shownData, setShownData] = useState({});
  const [lengthOfBanding, setLengthOfBanding] = useState("");

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
    let totalBandsNeeded = pipeLength / 12;
    const lengthBeforeWaste = bandLength * totalBandsNeeded;
    const totalBandLength = lengthBeforeWaste * findWasteLevel(cutOutLevel);
    return totalBandLength / 12;
  };

  const totalBandLengthForProject =
    calculateBands(circumference, pipeLength, cutOutDifficulty) +
    calculateBandsOf90(
      ninety.goreQuantity,
      circumference,
      ninety.quantity,
      cutOutDifficulty
    );
  let NumberOfBandsForNinety;
  if (ninety.quantity && ninety.gores) {
    NumberOfBandsForNinety = ninety.quantity * ninety.gores;
  } else {
    NumberOfBandsForNinety = 0;
  }
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
        {isNaN(totalBandLengthForProject) ? (
          <p>0</p>
        ) : (
          <p>{Math.ceil(totalBandLengthForProject)}</p>
        )}
        <br />
        Each Band is :
        {isNaN(circumference) ? <p>0</p> : <p>{circumference + 10}inches</p>}
        <br />
        number Of Bands Needed :
        {isNaN(pipeLength) ? (
          <p>0</p>
        ) : (
          <p>{Math.ceil(pipeLength / 12) + NumberOfBandsForNinety} </p>
        )}{" "}
        <br />
      </div>
    </div>
  );
};

export default EstimateMaterial;

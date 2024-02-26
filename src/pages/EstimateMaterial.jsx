import { useState, useEffect } from "react";

import EstimationForm from "../components/estimateMaterial/EstimationForm";

const EstimateMaterial = () => {
  const [shownData, setShownData] = useState({});
  const [lengthOfBanding, setLengthOfBanding] = useState("");
  console.log("setShownData", shownData);
  const getBandsNeeded = (pipeCirc, pipeLength) => {
    let numberOfBands = pipeLength / 12;
    let bandLength = pipeCirc + 10;
    return bandLength * numberOfBands;
  };
  useEffect(() => {
    const { pipeCircumference, pipeLength } = shownData;
    console.log(
      "getBandsNeeded",
      getBandsNeeded(pipeCircumference, pipeLength)
    );
    setLengthOfBanding(getBandsNeeded(pipeCircumference, pipeLength));
  }, [shownData]);

  return (
    <div className="bg-slate-700	h-screen w-screen">
      <EstimationForm shownData={shownData} setFormData={setShownData} />
      <div className="mx-auto w-fit ">
        {isNaN(lengthOfBanding) ? <p>result: 0</p> : <p>{lengthOfBanding}</p>}
      </div>
    </div>
  );
};

export default EstimateMaterial;

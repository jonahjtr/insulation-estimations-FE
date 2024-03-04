import { useState, useEffect } from "react";
// import { calculatePipeBands } from "../../logic/metal/bands";

import EstimationForm from "../components/estimateMaterial/EstimationForm";

const EstimateMaterial = () => {
  const [bandresults, setBandResults] = useState({});

  return (
    <div className="bg-slate-700	h-screen w-screen">
      <EstimationForm
        setBandResults={setBandResults}
        bandresults={bandresults}
      />
      <div className="mx-auto w-fit text-slate-300	 ">
        total Feet Of bands needed:
        <br />
        {isNaN(bandresults.totalBandLength) ? (
          <p>0</p>
        ) : (
          <p>{Math.ceil(bandresults.totalBandLength)}</p>
        )}
        <br />
        Each Band is :
        {isNaN(bandresults.bandLength) ? (
          <p>0</p>
        ) : (
          <p>{bandresults.bandLength} inches</p>
        )}
        <br />
        number Of Bands Needed :
        {bandresults.bandQuantity ? (
          <p>{bandresults.bandQuantity} </p>
        ) : (
          <p>0</p>
        )}{" "}
        <br />
      </div>
    </div>
  );
};

export default EstimateMaterial;

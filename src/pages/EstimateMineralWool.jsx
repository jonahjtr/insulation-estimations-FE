import React, { useState, useEffect } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import EstimateMineralWoolForm from "../components/EstimationForms/insulation/EstimateMineralWoolForm";
import { calculatePipeWithMineralWool } from "../../logic/insulation/calculateMineralWool";
import NavBar from "../components/Nav/NavBar";
const INITIAL_DATA = {
  pipeLength: "",
  circumference: "",
  thickness: "",
};
const initialInsulationResults = {
  totalSquareFeet: 0,
};
const EstimateMineralWool = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [insulationResults, setInsulationResults] = useState(
    initialInsulationResults
  );

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    steps,
    currentStep,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goToStep,
  } = useMultiStepForm([
    <EstimateMineralWoolForm {...data} updateFields={updateFields} />,
  ]);
  function reset() {
    setData(INITIAL_DATA);
    // setBandResults(initialBandResults);
    goToStep(0);
    setSubmitted(false);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      const { totalSquareFeet } = calculatePipeWithMineralWool(
        data.circumference,
        data.pipeLength,
        data.thickness
      );
      setInsulationResults({ totalSquareFeet: totalSquareFeet });
      setSubmitted(!submitted);
    }
  }
  return (
    <div className="bg-slate-700 w-screen h-screen">
      <NavBar />
      <div className="bg-slate-600 relative max-w-[80%] lg:max-w-[600px] mx-auto pt-10 pb-4">
        {submitted == false ? (
          <form onSubmit={onSubmit} className="w-full  h-full">
            <div className="absolute top-0.5 right-0.5">
              {currentStep + 1} / {steps.length}
            </div>
            {step}
            <div className=" w-full flex justify-end  mt-10">
              {" "}
              {!isFirstStep && (
                <button className="border px-2" type="button" onClick={back}>
                  back
                </button>
              )}
              <button className="ml-3 mr-2 border px-2" type="submit">
                {isLastStep ? "submit" : "next"}
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full h-full bg-blue">
            <h1 className="w-fit mx-auto text-2xl text-white font-bold">
              Estimation Calculated!
            </h1>
            <div className=" w-[60%] text-lg   mt-10 mx-auto text-white">
              <p className="">
                Total Square Feet of mineral wool :{" "}
                <span className="text-xl float-right">
                  {insulationResults.totalSquareFeet}
                </span>
              </p>
            </div>
            <div className="w-fit mx-auto h-fit mt-8">
              <button
                className="border w-fit mx-auto px-3 mb-4"
                type="button"
                onClick={reset}
              >
                reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateMineralWool;

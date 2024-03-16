import React, { useState } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import EstimateFormedPipeForm from "../components/EstimationForms/insulation/EstimateFormedPipeForm";
import { calculateFormedInsulation } from "../../logic/insulation/calculateFormedInsulation";
import NavBar from "../components/Nav/NavBar";
const INITIAL_DATA = {
  pipeLength: "",
  stickLength: "",
};
const initialInsulationResults = {
  peices: 0,
  linearFeet: 0,
};
const EstimateFormedinsulation = () => {
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
    <EstimateFormedPipeForm {...data} updateFields={updateFields} />,
  ]);
  function reset() {
    setData(INITIAL_DATA);
    goToStep(0);
    setSubmitted(false);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      if (isNaN(data.pipeLength) || isNaN(data.stickLength)) {
        alert("Please use numbers only");
        reset();
      }
      const { peices, linearFeet } = calculateFormedInsulation(
        data.pipeLength,
        data.stickLength
      );

      setInsulationResults({ peices: peices, linearFeet: linearFeet });
      setSubmitted(!submitted);
    }
  }
  return (
    <div className="bg-slate-700 w-screen h-screen">
      <NavBar />
      <div className="h-[calc(20dvh)] w-full"></div>
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
                Total Peices :{" "}
                <span className="text-xl float-right">
                  {insulationResults.peices}
                </span>
              </p>
              <p className="">
                Total linear feet :
                <span className="text-xl float-right">
                  {insulationResults.linearFeet}
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

export default EstimateFormedinsulation;

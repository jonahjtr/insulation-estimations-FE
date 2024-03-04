import React, { useState, useEffect } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { calculateBands } from "../../logic/metal/bands";
import EstimateStraightPipeBands from "../components/estimateMaterial/EstimateStraightPipeBands";
import Estimate90Bands from "../components/estimateMaterial/Estimate90Bands";

const INITIAL_DATA = {
  pipeLength: "",
  circumference: "",
  ninetyQuantity: "",
  goreQuantity: "",
};
const initialBandResults = {
  totalBandLength: 0,
  bandQuantity: 0,
  bandLength: 0,
};
const EstimateBands = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
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
    <EstimateStraightPipeBands {...data} updateFields={updateFields} />,
    <Estimate90Bands {...data} updateFields={updateFields} />,
  ]);

  const [bandResults, setBandResults] = useState(initialBandResults);

  function reset() {
    setData(INITIAL_DATA);
    setBandResults(initialBandResults);
    goToStep(0);
    setSubmitted(false);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      const { totalBandLength, bandQuantity, bandLength } = calculateBands(
        data.circumference,
        data.pipeLength,
        {
          ninetyQuantity: data.ninetyQuantity,
          goreQuantity: data.goreQuantity,
        }
      );
      setBandResults({
        totalBandLength: totalBandLength,
        bandQuantity: bandQuantity,
        bandLength: bandLength,
      });
      setSubmitted(!submitted);
    }
  }
  return (
    <div className="bg-slate-700 w-screen h-screen">
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
              Submitted!
            </h1>
            <div className=" w-[60%] text-lg   mt-10 mx-auto text-white">
              <p className="">
                total band length needed:{" "}
                <span className="text-xl float-right">
                  {bandResults.totalBandLength}
                </span>
              </p>
              <p className="mt-4">
                Ammount of bands needed:{" "}
                <span className="text-xl float-right">
                  {bandResults.bandQuantity}
                </span>
              </p>
              <p className="mt-4">
                Length per band:{" "}
                <span className="text-xl float-right">
                  {bandResults.bandLength}
                </span>
              </p>
              <p></p>
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

export default EstimateBands;

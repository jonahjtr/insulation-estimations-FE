import React, { useState, useEffect } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { CalculateMetalJacketing } from "../../logic/metal/metalJacketing";
import EstimateMetalForm from "../components/EstimationForms/metal/EstimateMetalForm";
import NavBar from "../components/Nav/NavBar";
const INITIAL_DATA = {
  circumference: "",
  pipeLength: "",
  sheetWidth: "",
};

const initialMetalResults = {
  numberOfSheets: 0,
  lengthOfSheet: 0,
  totalMetalNeeded: 0,
  totalLengthAfterWaste: 0,
};
const EstimateMetal = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [metalResults, setmetalResults] = useState(initialMetalResults);

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
    <EstimateMetalForm {...data} updateFields={updateFields} />,
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
      const {
        numberOfSheets,
        lengthOfSheet,
        totalMetalNeeded,
        totalLengthAfterWaste,
      } = CalculateMetalJacketing(
        data.circumference,
        data.pipeLength,
        data.sheetWidth
      );
      setmetalResults({
        numberOfSheets: parseInt(numberOfSheets),
        lengthOfSheet: parseInt(lengthOfSheet),
        totalMetalNeeded: parseInt(totalMetalNeeded),
        totalLengthAfterWaste: parseInt(totalLengthAfterWaste),
      });
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
                Total number of sheets :{" "}
                <span className="text-xl float-right">
                  {metalResults.numberOfSheets}
                </span>
              </p>
              <p className="">
                Each sheet will be :{" "}
                <span className="text-xl float-right">
                  {metalResults.lengthOfSheet} inches
                </span>
              </p>
              <p className="">
                Total length of metal Needed :{" "}
                <span className="text-xl float-right">
                  {metalResults.totalMetalNeeded} ft.
                </span>
              </p>
              <p className="">
                Total with waste material:{" "}
                <span className="text-xl float-right">
                  {metalResults.totalLengthAfterWaste} ft.
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

export default EstimateMetal;

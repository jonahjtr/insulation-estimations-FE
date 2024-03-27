import React, { useState, useEffect } from "react";

const FormWithSteps = ({
  onSubmit,
  currentStep,
  steps,
  step,
  isFirstStep,
  next,
  back,
  isLastStep,
  finishedPage,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const shouldSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      setSubmitted(true);
      onSubmit(e);
    }
  };

  useEffect(() => {}, [steps]);
  return (
    <div>
      {!submitted ? (
        <form onSubmit={shouldSubmit} className="w-full  h-full">
          <div className=" absolute text-white pr-2 top-0.5 right-0.5">
            {currentStep + 1} / {steps.length}
          </div>
          {step}
          <div className=" w-full flex justify-end  mt-10">
            {" "}
            {!isFirstStep && (
              <button
                className=" text-white px-2 mr-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-2 "
                type="button"
                onClick={back}
              >
                back
              </button>
            )}
            <button
              className="ml-3 mr-4   text-white px-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-2 "
              type="submit"
            >
              {isLastStep ? "submit" : "next"}
            </button>
          </div>
        </form>
      ) : (
        <div>{finishedPage}</div>
      )}
    </div>
  );
};

export default FormWithSteps;

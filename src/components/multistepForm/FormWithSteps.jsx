import React, { useState } from "react";

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
  return (
    <div>
      {!submitted ? (
        <form onSubmit={shouldSubmit} className="w-full  h-full">
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
        <div>{finishedPage}</div>
      )}
    </div>
  );
};

export default FormWithSteps;

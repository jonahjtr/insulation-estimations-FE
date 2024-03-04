import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((i) => {
      if (i > steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }
  function back() {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goToStep(index) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    next,
    back,
    goToStep,
  };
}

import React, { useState } from "react";
import NavBar from "../components/Nav/NavBar";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormWithSteps from "../components/multistepForm/FormWithSteps";
import EstimateStraightPipeBands from "../components/EstimationForms/bands/EstimateStraightPipeBands";
import Estimate90Bands from "../components/EstimationForms/bands/Estimate90Bands";
import ChooseCover from "../components/EstimationForms/EstimateAll/ChooseCover";
const INITIAL_DATA = {
  insulation: {
    type: "",
    thickness: "",
    length: "",
    width: "",
  },
  equipmentToInsulate: {
    difficulty: "",
    length: "",
    circumference: "",
  },
  ninety: {
    quantity: "",
    numberOfGores: "",
  },
};

const EstimateAll = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateNestedObject(fields, nestedName) {
    setData((prev) => {
      return {
        ...prev,
        [nestedName]: {
          ...prev.nestedName,
          ...fields,
        },
      };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSubmitted(!submitted);
    console.log(data);
  }
  return (
    <div className="bg-slate-700 w-screen h-screen">
      <NavBar />
      <div className="h-[calc(20dvh)] w-full"></div>
      <div className="bg-slate-600 relative max-w-[80%] lg:max-w-[600px] mx-auto pt-10 pb-4">
        <FormWithSteps
          {...useMultiStepForm([
            <ChooseCover
              {...data}
              updateFields={updateFields}
              updateNestedObject={updateNestedObject}
            />,
          ])}
          onSubmit={onSubmit}
          finishedPage={<h1>finished!</h1>}
        />
      </div>
    </div>
  );
};

export default EstimateAll;

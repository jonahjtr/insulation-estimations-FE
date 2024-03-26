import React, { useState, useEffect } from "react";
import NavBar from "../components/Nav/NavBar";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormWithSteps from "../components/multistepForm/FormWithSteps";
import ChooseCover from "../components/EstimationForms/EstimateAll/ChooseCover";
import MeasurementsForm from "../components/EstimationForms/EstimateAll/SheetMeasurementsForm";
const INITIAL_DATA = {
  nineties: "",
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
    quantityOfNineties: "",
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
          ...prev[nestedName],
          ...fields,
        },
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(!submitted);
    console.log(data);
    console.log(data);

    //calculate here
  }
  // <NinetyInfoForm
  //   {...data}
  //   updateFields={updateFields}
  //   updateNestedObject={updateNestedObject}
  // />,
  const formArray = [
    <ChooseCover
      {...data}
      updateFields={updateFields}
      updateNestedObject={updateNestedObject}
    />,
    <MeasurementsForm
      {...data}
      updateFields={updateFields}
      updateNestedObject={updateNestedObject}
    />,
  ];

  return (
    <div className="bg-slate-700 w-screen h-screen">
      <NavBar />
      <div className="h-[calc(20dvh)] w-full"></div>
      <div className="bg-slate-600 relative max-w-[80%] lg:max-w-[900px] xl:max-w-[70%]  mx-auto pt-10 pb-4">
        <FormWithSteps
          {...useMultiStepForm(formArray)}
          onSubmit={onSubmit}
          finishedPage={<h1>finished!</h1>}
        />
      </div>
    </div>
  );
};

export default EstimateAll;

import React, { useState, useEffect } from "react";
import NavBar from "../components/Nav/NavBar";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormWithSteps from "../components/multistepForm/FormWithSteps";
import ChooseCover from "../components/EstimationForms/EstimateAll/ChooseCover";
import FormedMeasurementsForm from "../components/EstimationForms/EstimateAll/FormedMeasurementsForm";
import { estimateAllFormedInsulation } from "../../logic/estimateAll";
import AllResultsFormedPage from "../components/EstimationForms/EstimateAll/AllResultsFormedPage";

const INITIAL_DATA = {
  nineties: false,
  insulation: {
    type: "",
    thickness: "",
    length: "",
    width: "36",
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

const EstimateEverythingFormedInsulation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [results, setResults] = useState({});

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
    const { insulationData, bandData, metalData } =
      estimateAllFormedInsulation(data);

    setResults({
      insulation: insulationData,
      bands: bandData,
      metal: metalData,
    });
  }

  const formArray = [
    <ChooseCover
      {...data}
      updateFields={updateFields}
      updateNestedObject={updateNestedObject}
    />,
    <FormedMeasurementsForm
      {...data}
      updateFields={updateFields}
      updateNestedObject={updateNestedObject}
    />,
  ];

  return (
    <div className="bg-slate-700 w-screen h-screen">
      <NavBar />
      <div className="h-[2dvh] lg:h-[10dvh] w-full"></div>
      <div className="bg-slate-600 relative w-[90%] pt-2 sm:max-w-[80%] lg:max-w-[900px] xl:max-w-[70%]  mx-auto pt-10 pb-4">
        <FormWithSteps
          {...useMultiStepForm(formArray)}
          onSubmit={onSubmit}
          finishedPage={<AllResultsFormedPage data={results} />}
        />
      </div>
    </div>
  );
};

export default EstimateEverythingFormedInsulation;

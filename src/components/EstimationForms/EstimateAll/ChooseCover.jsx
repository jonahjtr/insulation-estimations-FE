import React from "react";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";
import SelectInput from "../SelectInput";
import RadioInput from "../RadioInput";

const ChooseCover = ({
  nineties,
  equipmentToInsulate,
  updateNestedObject,
  updateFields,
}) => {
  const difficultyOptions = [
    { label: "", value: "" },
    { label: "Almost no cutouts", value: "1" },
    { label: "Few Cutouts", value: "2" },
    { label: "More Cutouts, may require adjustments", value: "3" },
    { label: "Lots of cutouts, will need additional materials", value: "4" },
  ];
  const RadioOptions = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ];

  return (
    <FormWrappers
      title={"How difficult is the job?"}
      subtext={"This affects the estimation of waste material you may need."}
    >
      <div className="">
        <SelectInput
          type="number"
          nestedName="equipmentToInsulate"
          fieldName="difficulty"
          updateFields={updateNestedObject}
          label="Difficulty to insulate"
          value={equipmentToInsulate.difficulty}
          options={difficultyOptions}
        />
        <RadioInput
          fieldName="nineties"
          updateFields={updateFields}
          label="Are there 90-degree corners?"
          value={nineties}
          options={RadioOptions}
        />
      </div>
    </FormWrappers>
  );
};

export default ChooseCover;

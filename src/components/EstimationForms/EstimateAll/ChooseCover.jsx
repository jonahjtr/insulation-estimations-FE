import React from "react";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";
import SelectInput from "../SelectInput";

const ChooseCover = ({
  equipmentToInsulate,
  insulation,
  updateNestedObject,
}) => {
  const difficultyOptions = [
    { label: "Almost no cutouts", value: "1" },
    { label: "Few Cutouts", value: "2" },
    { label: "More Cutouts, may mess up a bit ", value: "3" },
    { label: "Lots of cutouts, will need more ", value: "4" },
  ];
  const typeOfinsulation = [
    { label: "bricks or sheets", value: "sheet" },
    { label: "preformed pipe shaped", value: "preformed" },
  ];

  return (
    <FormWrappers
      title={"How hard is the job? "}
      subtext={"This is how we calculate the waste material you may need."}
    >
      <SelectInput
        nestedName="equipmentToInsulate"
        fieldName="difficulty"
        updateFields={updateNestedObject}
        label="difficulty to insulate"
        value={equipmentToInsulate.difficulty}
        options={difficultyOptions}
      />
      <SelectInput
        nestedName="insulation"
        fieldName="type"
        updateFields={updateNestedObject}
        label="What type of insulation?"
        value={insulation.type}
        options={typeOfinsulation}
      />
    </FormWrappers>
  );
};

export default ChooseCover;

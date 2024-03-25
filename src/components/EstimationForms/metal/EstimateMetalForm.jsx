import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const EstimateMetalForm = ({
  pipeLength,
  circumference,
  sheetWidth,
  updateFields,
}) => {
  return (
    <FormWrappers title={"Estimate Metal"}>
      <FormInputs
        fieldName="circumference"
        updateFields={updateFields}
        label="Circumference (in)"
        value={circumference}
      />
      <FormInputs
        fieldName="pipeLength"
        updateFields={updateFields}
        label="Pipe Length (ft)"
        value={pipeLength}
      />

      <FormInputs
        fieldName="sheetWidth"
        updateFields={updateFields}
        label="Sheet Width (ft)"
        value={sheetWidth}
      />
    </FormWrappers>
  );
};

export default EstimateMetalForm;

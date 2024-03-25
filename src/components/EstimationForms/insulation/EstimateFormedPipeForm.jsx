import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const EstimateFormedPipeForm = ({ pipeLength, stickLength, updateFields }) => {
  return (
    <FormWrappers title={"Estimate Formed Insulation"}>
      <FormInputs
        fieldName="pipeLength"
        updateFields={updateFields}
        label="Stick Length(ft)"
        value={pipeLength}
      />
      <FormInputs
        fieldName="stickLength"
        updateFields={updateFields}
        label="Pipe Length (ft)"
        value={stickLength}
      />
    </FormWrappers>
  );
};

export default EstimateFormedPipeForm;

import React from "react";
import FormWrappers from "../../reusables/FormWrappers";
import FormInputs from "../../reusables/FormInputs";

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

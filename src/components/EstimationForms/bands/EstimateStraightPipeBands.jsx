import React, { useState } from "react";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const EstimateStraightPipeBands = ({
  pipeLength,
  circumference,
  updateFields,
}) => {
  return (
    <FormWrappers title={"Estimate Bands"}>
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
    </FormWrappers>
  );
};

export default EstimateStraightPipeBands;

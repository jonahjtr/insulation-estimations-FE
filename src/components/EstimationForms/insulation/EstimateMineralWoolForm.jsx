import React from "react";
import FormWrappers from "../../reusables/FormWrappers";
import FormInputs from "../../reusables/FormInputs";

const EstimateMineralWoolForm = ({
  pipeLength,
  circumference,
  thickness,
  updateFields,
}) => {
  return (
    <FormWrappers title={"Estimate Sheet Insulation"}>
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
        fieldName="thickness"
        updateFields={updateFields}
        label="Thickness (in)"
        value={thickness}
      />
    </FormWrappers>
  );
};

export default EstimateMineralWoolForm;

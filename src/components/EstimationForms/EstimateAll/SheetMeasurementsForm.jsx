import React from "react";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const SheetMeasurementsForm = ({
  nineties,
  ninety,
  equipmentToInsulate,
  insulation,
  updateNestedObject,
}) => {
  return (
    <FormWrappers title={"Now for the measurements."}>
      <FormInputs
        type="number"
        nestedName="insulation"
        fieldName="width"
        updateFields={updateNestedObject}
        label="What is the width of the insulation?(inches)"
        value={insulation.width}
      />
      <FormInputs
        type="number"
        nestedName="insulation"
        fieldName="thickness"
        updateFields={updateNestedObject}
        label="What is the insulation thickness?(inches)"
        value={insulation.thickness}
      />
      <FormInputs
        type="number"
        nestedName="equipmentToInsulate"
        fieldName="circumference"
        updateFields={updateNestedObject}
        label="What is the circumference of the pipe?(inches)"
        value={equipmentToInsulate.circumference}
      />
      <FormInputs
        type="number"
        nestedName="equipmentToInsulate"
        fieldName="length"
        updateFields={updateNestedObject}
        label="What is the length of the pipe?(feet)"
        value={equipmentToInsulate.length}
      />
      {nineties == "true" && (
        <FormInputs
          type="number"
          nestedName="ninety"
          fieldName="quantityOfNineties"
          updateFields={updateNestedObject}
          label="How Many Nineties?"
          value={ninety.quantityOfNineties}
        />
      )}
      {nineties == "true" && (
        <FormInputs
          type="number"
          nestedName="ninety"
          fieldName="numberOfGores"
          updateFields={updateNestedObject}
          label="How Many gores per ninety?"
          value={ninety.numberOfGores}
        />
      )}
    </FormWrappers>
  );
};

export default SheetMeasurementsForm;

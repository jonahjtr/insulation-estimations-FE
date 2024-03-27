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
        label={
          <span>
            insulation width <em>(inches)</em>
          </span>
        }
        value={insulation.width}
      />
      <FormInputs
        type="number"
        nestedName="insulation"
        fieldName="thickness"
        updateFields={updateNestedObject}
        label={
          <span>
            insulation thickness <em>(inches)</em>
          </span>
        }
        value={insulation.thickness}
      />
      <FormInputs
        type="number"
        nestedName="equipmentToInsulate"
        fieldName="circumference"
        updateFields={updateNestedObject}
        label={
          <span>
            Pipe circumference <em>(inches)</em>
          </span>
        }
        value={equipmentToInsulate.circumference}
      />
      <FormInputs
        type="number"
        nestedName="equipmentToInsulate"
        fieldName="length"
        updateFields={updateNestedObject}
        label={
          <span>
            Pipe length <em>(inches)</em>
          </span>
        }
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

import React from "react";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const FormedM = ({
  nineties,
  ninety,
  equipmentToInsulate,
  insulation,
  updateNestedObject,
}) => {
  return (
    <FormWrappers title={"Measurements"}>
      <div className="lg:w-1/2 mx-auto">
        <FormInputs
          type="number"
          nestedName="equipmentToInsulate"
          fieldName="circumference"
          updateFields={updateNestedObject}
          label={
            <span>
              Pipe circumference <sup>(in)</sup>
            </span>
          }
          value={equipmentToInsulate.circumference}
        />
      </div>
      <div className="lg:w-1/2 mx-auto">
        <FormInputs
          type="number"
          nestedName="equipmentToInsulate"
          fieldName="length"
          updateFields={updateNestedObject}
          label={
            <span>
              Pipe length <sup>(ft)</sup>
            </span>
          }
          value={equipmentToInsulate.length}
        />
      </div>

      <div className="lg:w-1/2 mx-auto">
        <FormInputs
          type="number"
          nestedName="insulation"
          fieldName="thickness"
          updateFields={updateNestedObject}
          label={
            <span>
              Insulation thickness <sup>(in)</sup>
            </span>
          }
          value={insulation.thickness}
        />
      </div>

      {nineties === "true" && (
        <div className="lg:w-1/2 mx-auto">
          <FormInputs
            type="number"
            nestedName="ninety"
            fieldName="quantityOfNineties"
            updateFields={updateNestedObject}
            label="How many Nineties?"
            value={ninety.quantityOfNineties}
          />
        </div>
      )}
      {nineties === "true" && (
        <div className="lg:w-1/2 mx-auto">
          <FormInputs
            type="number"
            nestedName="ninety"
            fieldName="numberOfGores"
            updateFields={updateNestedObject}
            label="How many gores per Ninety?"
            value={ninety.numberOfGores}
          />
        </div>
      )}
    </FormWrappers>
  );
};

export default FormedM;

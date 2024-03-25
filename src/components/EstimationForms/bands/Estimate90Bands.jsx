import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";
import FormWrappers from "../FormWrappers";
import FormInputs from "../FormInputs";

const Estimate90Bands = ({ ninetyQuantity, goreQuantity, updateFields }) => {
  return (
    <FormWrappers title={"How many 90's ?"}>
      <FormInputs
        fieldName="ninetyQuantity"
        updateFields={updateFields}
        label="How Many Nineties?"
        value={ninetyQuantity}
      />
      <FormInputs
        fieldName="goreQuantity"
        updateFields={updateFields}
        label="How Many gores per ninety?"
        value={goreQuantity}
      />
    </FormWrappers>
  );
};

export default Estimate90Bands;

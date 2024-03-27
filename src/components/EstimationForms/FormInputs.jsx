import React from "react";

const FormInputs = ({
  fieldName,
  updateFields,
  placeHolder,
  label,
  value,
  type,
  nestedName,
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (type != "number ") {
      updateFields(
        {
          [fieldName]: inputValue,
        },
        nestedName
      );
    }
    if (type === "number " && !isNaN(inputValue) && Number(inputValue) >= 0) {
      updateFields(
        {
          [fieldName]: inputValue,
        },
        nestedName
      );
    }
  };
  const handleKeyDown = (e) => {
    // prevent the minus sign '-' from being typed
    if (
      e.key === "-" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "e" ||
      e.key === "E"
    ) {
      e.preventDefault();
    }
  };
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type || "text"}
        name={fieldName}
        id={fieldName}
        value={value}
        onKeyDown={type == "number" ? handleKeyDown : null}
        onChange={handleChange}
        className={inputClass}
        placeholder={placeHolder || ""}
        required
      />
      <label htmlFor={fieldName} className={labelClass}>
        {label}
      </label>
    </div>
  );
};

export const inputClass =
  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block py-2.5 pt-5 px-0 w-full text-[1.5rem] lg:text-3xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer";
export const labelClass =
  "peer-focus:font-medium whitespace-nowrap  lg:text-3xl absolute text-[1.5rem] text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default FormInputs;

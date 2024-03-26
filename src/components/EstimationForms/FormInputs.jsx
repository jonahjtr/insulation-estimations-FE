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
  return (
    <div className="relative  z-0 w-full mb-5 group">
      <input
        type={type || "text"}
        name={fieldName}
        id={fieldName}
        value={value}
        onChange={(e) =>
          updateFields({ [fieldName]: e.target.value }, nestedName)
        }
        className={inputClass}
        placeholder={placeHolder}
        required
      />
      <label htmlFor={fieldName} className={labelClass}>
        {label}
      </label>
    </div>
  );
};

export const inputClass =
  "block py-2.5 pt-5 px-0 w-full text-[1rem] lg:text-3xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer";
export const labelClass =
  "peer-focus:font-medium  lg:text-3xl absolute text-[1rem] text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default FormInputs;

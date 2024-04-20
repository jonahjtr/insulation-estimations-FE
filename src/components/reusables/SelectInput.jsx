import React from "react";

const SelectInput = ({
  nestedName,
  fieldName,
  updateFields,
  options,
  label,
  value,
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label htmlFor={fieldName} className={labelClass}>
        {label}
      </label>
      <select
        name={fieldName}
        id={fieldName}
        value={value}
        onChange={(e) =>
          updateFields(
            {
              [fieldName]: e.target.value,
            },
            nestedName
          )
        }
        className={selectClass}
        required
      >
        {options.map((option, index) =>
          index === 0 ? (
            <option disabled hidden key={option.value} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export const selectClass =
  "block  pt-2.5 px-0 w-full text-[1rem] lg:text-[1.3rem]  lg:h-[3.8rem] text-white bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer";
export const labelClass =
  "absolute  text-gray-400 text-[1rem] lg:text-[1.5rem]  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 lg:top1 -z-10 origin-[0]";

export default SelectInput;

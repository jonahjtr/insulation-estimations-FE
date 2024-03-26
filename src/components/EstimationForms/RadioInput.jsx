import React from "react";

const RadioInput = ({
  nestedName,
  fieldName,
  updateFields,
  options,
  label,
  value,
}) => {
  return (
    <div className="mb-5">
      <fieldset className="flex items-center">
        <legend className="text-[1rem] mb-2 lg:text-[1rem]  text-gray-400 dark:text-gray-400">
          {label}
        </legend>
        {options.map((option, index) => (
          <label key={option.value} className="inline-flex  items-center mr-4">
            <input
              type="radio"
              name={fieldName}
              id={`${fieldName}_${index}`}
              value={option.value}
              checked={value === option.value}
              onChange={(e) =>
                updateFields({ [fieldName]: e.target.value }, nestedName)
              }
              className="peer sr-only"
            />
            <span className="block peer-checked:bg-blue-600  peer-checked:border-transparent peer-checked:ring-0 h-4 w-4 border border-gray-300 rounded-full dark:border-gray-500 dark:checked:bg-blue-500 dark:checked:border-transparent dark:checked:ring-0"></span>
            <span className="ml-2 text-sm lg:text-[1rem]  text-gray-400 dark:text-gray-400">
              {option.label}
            </span>
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default RadioInput;

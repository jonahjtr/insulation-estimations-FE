import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";

const EstimateMetalForm = ({
  pipeLength,
  circumference,
  sheetWidth,
  updateFields,
}) => {
  return (
    <div className="text-white">
      <h1 className="w-full text-center text-2xl mb-10 text-white font-bold">
        Estimate <br />
        Metal
      </h1>
      <div className="max-w-md mx-auto">
        {" "}
        <div className="grid md:grid-cols-2 md:gap-6 mx-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="circumference"
              id="circumference"
              value={circumference}
              onChange={(e) => updateFields({ circumference: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="circumference" className={labelClass}>
              Circumference (in)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="pipeLength"
              id="pipeLength"
              value={pipeLength}
              onChange={(e) => updateFields({ pipeLength: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="pipeLength" className={labelClass}>
              Pipe Length (ft)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="sheetWidth"
              id="sheetWidth"
              value={sheetWidth}
              onChange={(e) => updateFields({ sheetWidth: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="sheetWidth" className={labelClass}>
              SheetWidth (ft)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateMetalForm;

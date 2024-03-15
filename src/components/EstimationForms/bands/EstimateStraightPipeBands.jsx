import React, { useState } from "react";
import { inputClass, labelClass } from "../../reusables/formCss";

const EstimateStraightPipeBands = ({
  pipeLength,
  circumference,
  updateFields,
}) => {
  return (
    <div>
      {" "}
      <h1 className="w-full text-center text-2xl mb-10 text-white font-bold">
        Estimate <br />
        Bands
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
        </div>
      </div>
    </div>
  );
};

export default EstimateStraightPipeBands;

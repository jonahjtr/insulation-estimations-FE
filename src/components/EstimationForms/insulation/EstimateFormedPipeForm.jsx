import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";

const EstimateFormedPipeForm = ({ pipeLength, stickLength, updateFields }) => {
  return (
    <div className="text-white">
      <h1 className="w-full text-center  text-2xl mb-10 text-white font-bold">
        Estimate <br /> Formed Insulation
      </h1>
      <div className="max-w-md mx-auto">
        {" "}
        <div className="grid md:grid-cols-2 md:gap-6 mx-4">
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
              name="stickLength"
              id="stickLength"
              value={stickLength}
              onChange={(e) => updateFields({ stickLength: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="stickLength" className={labelClass}>
              stickLength (ft)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateFormedPipeForm;

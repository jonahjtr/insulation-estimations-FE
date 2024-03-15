import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";

const EstimateMineralWoolForm = ({
  pipeLength,
  circumference,
  thickness,
  updateFields,
}) => {
  return (
    <div>
      <h1 className="w-full text-center  text-2xl mb-10 text-white font-bold">
        Estimate <br /> Mineral Wool
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
              name="thickness"
              id="thickness"
              value={thickness}
              onChange={(e) => updateFields({ thickness: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="thickness" className={labelClass}>
              Thickness (in)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateMineralWoolForm;

import React from "react";
import { inputClass, labelClass } from "../../reusables/formCss";

const Estimate90Bands = ({ ninetyQuantity, goreQuantity, updateFields }) => {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="w-full text-center text-2xl mb-10 text-white font-bold">
          <h1>How many 90's ?</h1>
          <div className="flex justify-center mx-auto">
            <p className="text-4xl">(</p>
            <p className="text-gray-300 text-xs px-2 pt-1">
              Put 0 if no 90's or <br />
              if gores don't need bands
            </p>
            <p className="text-4xl">)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 mx-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="ninetyQuantity"
              id="ninetyQuantity"
              value={ninetyQuantity}
              onChange={(e) => updateFields({ ninetyQuantity: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="ninetyQuantity" className={labelClass}>
              How Many Nineties?
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="goreQuantity"
              id="goreQuantity"
              value={goreQuantity}
              onChange={(e) => updateFields({ goreQuantity: e.target.value })}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="goreQuantity" className={labelClass}>
              How Many gores per ninety?
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate90Bands;

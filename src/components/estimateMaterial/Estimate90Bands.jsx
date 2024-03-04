import React, { useState } from "react";

const Estimate90Bands = ({ ninetyQuantity, goreQuantity, updateFields }) => {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6 mx-4">
          <h1 className="w-fit mx-auto text-2xl text-white font-bold">
            How many 90's ?
          </h1>
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
const inputClass =
  " block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const labelClass =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default Estimate90Bands;

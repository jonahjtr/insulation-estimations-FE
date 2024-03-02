import React, { useState } from "react";
import { calculateNinetyBands } from "../../../logic/metal/bands";

const Estimate90Bands = ({ bandResults, setBandResults }) => {
  const [formData, setFormData] = useState({
    circumference: "",
    ninetyQuantity: "",
    goreQuantity: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value);
    setFormData({ ...formData, [name]: numericValue || "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let addedBands = calculateNinetyBands(
      bandResults.bandLength,
      formData.ninetyQuantity,
      formData.goreQuantity
    );
    // totalBandLength, bandQuantity, bandLength;
    setBandResults({
      totalBandLength: bandResults.totalBandLength + addedBands.totalBandLength,
      bandQuantity: bandResults.bandQuantity + addedBands.bandQuantity,
      bandLength: bandResults.bandLength + addedBands.bandLength,
    });
    console.log("bandResults ", bandResults);
  };
  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="ninetyQuantity"
              id="ninetyQuantity"
              value={formData.ninetyQuantity}
              onChange={handleChange}
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
              value={formData.goreQuantity}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="goreQuantity" className={labelClass}>
              How Many gores per ninety?
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
const inputClass =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const labelClass =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default Estimate90Bands;

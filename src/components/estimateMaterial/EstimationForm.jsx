import { useState } from "react";
// import { calculatePipeBands } from "../../../logic/metal/bands";
// import { calculateNinetyBands } from "../../../logic/metal/bands";

const EstimationForm = ({ bandresults, setBandResults }) => {
  const [open90modal, setOpen90Modal] = useState(false);
  const [pipeBandData, setPipeBandData] = useState({
    pipeLength: 0,
    circumference: 0,
  });
  const [ninetyBandData, setNinetyBandData] = useState({
    ninetyQuantity: 0,
    goreQuantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value);
    setPipeBandData({ ...pipeBandData, [name]: numericValue || "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { totalBandLength, bandQuantity, bandLength } = calculatePipeBands(
      pipeBandData.circumference,
      pipeBandData.pipeLength
    );
    setBandResults({
      totalBandLength,
      bandQuantity,
      bandLength,
    });
  };

  const handleOpen90Modal = () => {
    setOpen90Modal(!open90modal);
  };
  const handleClose90Modal = () => {
    console.log("pipeBandData before", pipeBandData);

    setPipeBandData({
      ...pipeBandData,
      ninetyQuantity: "",
      goreQuantity: "",
    });
    console.log("pipeBandData after", pipeBandData);
    setOpen90Modal(!open90modal);
  };

  return (
    <div className="bg-slate-700 max-w-[80%] mx-auto pt-10">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="circumference"
              id="circumference"
              value={pipeBandData.circumference}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="circumference" className={labelClass}>
              circumference
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="pipeLength"
              id="pipeLength"
              value={pipeBandData.pipeLength}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="pipeLength" className={labelClass}>
              Pipe Length
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          {" "}
          {open90modal && (
            <div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  inputMode="numeric"
                  name="ninetyQuantity"
                  id="ninetyQuantity"
                  value={pipeBandData.ninetyQuantity}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=" "
                  required
                />
                {/* Label */}
                <label htmlFor="ninetyQuantity" className={labelClass}>
                  ninetyQuantity
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  inputMode="numeric"
                  name="goreQuantity"
                  id="goreQuantity"
                  value={localFormData.goreQuantity}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=" "
                  required
                />

                <label htmlFor="goreQuantity" className={labelClass}>
                  goreQuantity
                </label>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center items-center	">
        {open90modal ? (
          <button
            onClick={handleOpen90Modal}
            className="bg-red-800 dark:bg-red-800  dark:hover:bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
          >
            Click here if you DON'T have 90&apos;s.
          </button>
        ) : (
          <button
            onClick={handleClose90Modal}
            className="bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
          >
            Click here if you have 90&apos;s.
          </button>
        )}
      </div>
    </div>
  );
};
const inputClass =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const labelClass =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default EstimationForm;

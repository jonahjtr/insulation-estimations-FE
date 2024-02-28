import { useState } from "react";

const EstimationForm = ({ shownData, setFormData }) => {
  const [hasNineties, setHasNineties] = useState(false);
  const [formData, setLocalFormData] = useState({
    pipeLength: "",
    circumference: "",
    numberOf90s: "",
    goreQuantity: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value);
    setLocalFormData({ ...formData, [name]: numericValue || "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };
  const handleClose90Options = () => {
    setHasNineties(!hasNineties);
    setLocalFormData({ ...formData, numberOf90s: "" });
    setLocalFormData({ ...formData, goreQuantity: "" });
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
              value={formData.circumference}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {/* Label */}
            <label
              htmlFor="circumference"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              circumference
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              inputMode="numeric"
              name="pipeLength"
              id="pipeLength"
              value={formData.pipeLength}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="pipeLength"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pipe Length
            </label>
          </div>
          {hasNineties && (
            <div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  inputMode="numeric"
                  name="numberOf90s"
                  id="numberOf90s"
                  value={formData.numberOf90s}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                {/* Label */}
                <label
                  htmlFor="numberOf90s"
                  className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  numberOf90s
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  htmlFor="goreQuantity"
                  className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  goreQuantity
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center	">
          {hasNineties ? (
            <button
              onClick={() => setHasNineties(!hasNineties)}
              className="bg-red-800 dark:bg-red-800  dark:hover:bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
            >
              Click here if you DON'T have 90&apos;s.
            </button>
          ) : (
            <button
              onClick={handleClose90Options}
              className="bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
            >
              Click here if you have 90&apos;s.
            </button>
          )}
        </div>

        {/* Phone Number and Company Fields */}
        <div className="grid md:grid-cols-2 md:gap-6"></div>

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

export default EstimationForm;

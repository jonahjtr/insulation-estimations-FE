import React, { useState } from "react";

const AllResultsSheetPage = ({ data }) => {
  const { bands, insulation, metal } = data;

  const [showMaterialDetails, setShowMaterialDetails] = useState(false);

  const toggleMaterialDetails = () => {
    setShowMaterialDetails(!showMaterialDetails);
  };

  return (
    <div className="w-full h-full bg-blue">
      <h1 className="w-fit mx-auto text-4xl md:text-4xl text-white font-bold">
        Results for Job
      </h1>
      <div className="w-[90%] flex flex-col justify-center items-center text-lg mx-auto text-white">
        <h2 className="text-2xl font-bold mt-6 text-center md:text-4xl">
          Bands
        </h2>
        <div className="w-fit">
          <p>Band Quantity: {bands.bandQuantity}</p>
          <p>
            Each band's Length: {bands.bandLength}
            <sup>in</sup>
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-center md:text-4xl">
          Insulation
        </h2>
        <div className="w-fit">
          <p>
            Sheet Length (if it's not pre-cut): {insulation.sheetLength}{" "}
            <sup>in</sup>
          </p>
          <p>Number of sheets: {Math.ceil(insulation.numberOfSheets)}</p>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-center md:text-4xl">
          Metal (not including nineties)
        </h2>
        <div className="w-fit">
          <p>
            Length for the metal: {metal.lengthOfSheet} <sup>in</sup>
          </p>
          <p>Number of sheets: {metal.numberOfSheets}</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="flex justify-center items-center w-fit my-5 mx-auto text-2xl md:text-4xl text-white font-bold cursor-pointer"
            onClick={toggleMaterialDetails}
          >
            For ordering material :
            {showMaterialDetails ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
          {showMaterialDetails && (
            <div className="w-fit">
              <p>
                Total metal jacketing to order: {metal.totalSquareFeet}{" "}
                <sup>Sqft</sup>
              </p>
              <p>
                Total insulation to order: {insulation.totalSquareFeet}{" "}
                <sup>Sqft</sup>
              </p>
              <p>
                Total Bands to order: {bands.totalBandLength} <sup>ft</sup>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllResultsSheetPage;

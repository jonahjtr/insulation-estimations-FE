import React, { useState } from "react";
import EstimateStraightPipeBands from "../components/estimateMaterial/EstimateStraightPipeBands";
import Estimate90Bands from "../components/estimateMaterial/Estimate90Bands";
const EstimateBands = () => {
  const [open90modal, setOpen90Modal] = useState(false);
  const [bandResults, setBandResults] = useState({
    totalBandLength: 0,
    bandQuantity: 0,
    bandLength: 0,
  });

  return (
    <div className="bg-slate-700 w-screen h-screen">
      <div className="bg-slate-600 max-w-[80%] mx-auto pt-10">
        <EstimateStraightPipeBands
          setBandResults={setBandResults}
          open90modal={open90modal}
        />
      </div>
      <section className="bg-slate-600 max-w-[80%] mx-auto pt-10">
        {open90modal ? (
          <button
            className="bg-red-800 dark:bg-red-800  dark:hover:bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
            onClick={() => setOpen90Modal(!open90modal)}
          >
            close
          </button>
        ) : (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setOpen90Modal(!open90modal)}
          >
            open
          </button>
        )}

        {open90modal && (
          <Estimate90Bands
            bandResults={bandResults}
            setBandResults={setBandResults}
          />
        )}
      </section>
      <section className="w-fit mx-auto mt-10">
        <div>total band length needed: {bandResults.totalBandLength}</div>
        <div>how many bands needed: {bandResults.bandQuantity}</div>
        <div>how long are each bands: {bandResults.bandLength}</div>
      </section>
    </div>
  );
};

export default EstimateBands;

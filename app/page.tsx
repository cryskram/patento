import React from "react";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* heading section */}
      <div className="mt-10">
        <h1 className={`${dosis.className} text-6xl text-textColor font-bold`}>
          PATEN<span className="bg-textColor text-black rounded-xl">TO</span>
        </h1>
        <p className="text-gray-400 mt-2">An AI Patent Aggregator</p>
      </div>

      {/* input section */}
      <div className="w-full mt-50">
        <input
          className="w-3/4 md:w-3/5 mt-12 px-2 py-2 rounded-xl bg-[#4a4e69] outline-none"
          type="text"
          name="input"
          id="input"
          placeholder="Search about drones?"
        />
        <button className="bg-textColor p-2 m-2 rounded-xl text-black">
          Go!
        </button>
      </div>
    </div>
  );
};

export default HomePage;

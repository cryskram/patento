"use client";

import React, { useState } from "react";
import { Dosis } from "next/font/google";
import { IoSend } from "react-icons/io5";

const dosis = Dosis({ subsets: ["latin"] });

const HomePage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const submitInput = (p: string) => {
    setOutput(input);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* heading section */}
      <div className="mt-10">
        <h1 className={`${dosis.className} text-7xl text-textColor font-bold`}>
          PATEN<span className="bg-textColor text-black rounded-xl">TO</span>
        </h1>
        <p className="text-gray-400 mt-2">The AI Patent Aggregator</p>
      </div>

      {/* input section */}
      <div className="w-full mt-50">
        <input
          className="w-3/4 md:w-3/5 mt-12 px-2 py-2 rounded-xl bg-[#4a4e69] outline-none"
          type="text"
          name="input"
          id="input"
          placeholder="Search about drones?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => submitInput(input)}
          className="bg-textColor hover:bg-[#96e1f1] p-2 rounded-xl ml-2 text-black"
        >
          <IoSend className="text-2xl" />
        </button>
      </div>

      <div
        className={`${
          !output ? "hidden p-0" : ""
        }w-3/4 md:3/5 text-left px-3 py-2 bg-[#5c5f78] mt-10 rounded-xl`}
      >
        <h1>{output}</h1>
      </div>
    </div>
  );
};

export default HomePage;

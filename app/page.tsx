"use client";

import React, { useState } from "react";
import { Silkscreen } from "next/font/google";
import { IoSend } from "react-icons/io5";
import Spinner from "@/components/Spinner";
import axios from "axios";
import Link from "next/link";
const silkScreen = Silkscreen({ weight: "400", subsets: ["latin"] });

interface ResultProp {
  Title: String;
  Abstract: String;
  "Publication Year": String;
  URL: String;
}

const HomePage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitInput = async () => {
    // setOutput(input);

    setLoading(true);
    const res = await axios.post(
      "http://127.0.0.1:5000/api/search",
      {
        question: input,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = res.data;
    console.log(data);
    setLoading(false);
    setOutput(data.results);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* heading section */}
      <div className="mt-10">
        <h1
          className={`${silkScreen.className} text-7xl text-textColor font-bold`}
        >
          PATEN<span className="bg-textColor text-black rounded-xl">TO</span>
        </h1>
        <p className={` text-gray-400 mt-4`}>The AI Patent Aggregator</p>
      </div>

      {/* input section */}
      <div className="w-full mt-12 flex  items-center justify-center">
        <input
          className="w-3/4 md:w-3/5 px-2 py-2 rounded-xl bg-[#4a4e69] outline-none"
          type="text"
          name="input"
          id="input"
          placeholder="Search about drones?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={submitInput}
          className="bg-textColor hover:bg-[#96e1f1] p-2 rounded-xl ml-2 text-black"
        >
          <IoSend className="text-2xl" />
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div>
          {output.map((result: ResultProp, index) => (
            <div
              key={index}
              className={`${
                !output ? "hidden p-0" : ""
              }w-3/4 md:3/5 mx-auto text-left px-3 py-2 bg-[#5c5f78] m-5 rounded-xl hover:bg-[#494c60]`}
            >
              <Link href={result.URL as string}>
                <div className="flex justify-between items-center">
                  <h1
                    className={`${silkScreen.className} text-2xl font-semibold`}
                  >
                    {result["Title"]}
                  </h1>
                  <h1 className="bg-bg px-2 py-1 rounded-xl">
                    {result["Publication Year"]}
                  </h1>
                </div>
                <p className="text-sm text-justify mt-4 text-gray-200">
                  {result["Abstract"]}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

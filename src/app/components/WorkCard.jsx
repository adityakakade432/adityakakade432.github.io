"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});


const Card = ({ company, logo, description, onMoreInfo }) => {
  return (
    <div className={`rounded-xl shadow-lg bg-[#faedcd] ${poppins.className}`}>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <h2 className="font-bold text-2xl text-[#bc6c25]">{company}</h2>
        </div>
        <p className="text-[#dda15e] text-base mt-6">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onMoreInfo}
          className="bg-gradient-to-br from-[#344e41] via-[#a3b18a] to-[#ccd5ae] text-white font-bold py-2 px-4 rounded mb-4"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;

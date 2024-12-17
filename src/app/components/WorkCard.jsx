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
        <p className="text-[#dda15e] text-base mt-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
};

export default Card;

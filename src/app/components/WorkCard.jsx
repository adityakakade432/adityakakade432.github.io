"use client";
import React from "react";

const Card = ({ company, logo, description, onMoreInfo }) => {
  return (
    <div className="rounded-xl shadow-lg bg-[#311e42]">
      <div className="px-6 py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <h2 className="font-bold text-xl">{company}</h2>
        </div>
        <p className="text-white text-base mt-6">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onMoreInfo}
          className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded mb-4"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;

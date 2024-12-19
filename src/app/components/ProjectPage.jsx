"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"], // Add styles as needed
});

export default function ProjectPage({ images, title, description, skills, githubLink }) {
  return (
    <div className="container mx-20 bg-[#d5dfb7] max-h-screen flex flex-col md:flex-row items-start justify-start gap-12">
      <div className="w-full md:w-2/3 flex justify-center">
        <img
          src={images[0]}
          alt={`${title} - preview`}
          className="w-full max-w-[90%] max-h-[90vh] rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className={`w-full md:w-1/3 flex flex-col font-bold ${poppins.className}`}>
        <h1 className="text-5xl text-[#52796f] mb-4 hover:text-[#0fa3b1] hover:scale-105 transition-all duration-300 ease-in-out">
          {title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#bc6c25] text-[#faedcd] text-sm font-medium py-1 px-3 rounded-full shadow hover:bg-[#faedcd] hover:text-[#bc6c25] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded bg-gradient-to-br from-[#344e41] via-[#588157] to-[#84a98c] text-white font-medium shadow-md hover:brightness-110 hover:shadow-lg transition duration-300 text-center"
        >
          View on GitHub
        </a>

        <p className="text-md text-gray-800 font-normal mt-6">{description}</p>
      </div>
    </div>
  );
}

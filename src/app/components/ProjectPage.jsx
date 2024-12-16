"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export default function ProjectPage({ images, title, description }) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    spacing: 10,
    slides: {
      perView: 1,
    },
  });

  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  return (
    <div className="container mx-20 py-10 px-4 bg-[#d5dfb7] min-h-screen flex flex-col items-center justify-center">
      {/* Project Title */}
      <h1 className="text-5xl text-[#52796f] mb-6 text-center">{title}</h1>

      {/* Centered Keen-Slider */}
      <div className="relative w-[80%]">
        <div ref={sliderRef} className="keen-slider flex overflow-hidden rounded-lg shadow-lg">
          {images.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex-shrink-0 w-200 h-100 bg-gray-100"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-600"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-600"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>

      {/* Project Description */}
      <p className="text-lg text-gray-800 mt-8 text-center">{description}</p>
    </div>
  );
}

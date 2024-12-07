"use client";
import React from "react";
import WorkCard from "./WorkCard";

const WorkExperiences = () => {
  const workExperiences = [
    {
      company: "Company A",
      logo: "/images/no-image.jpg",
      description: "Worked on X, Y, Z projects with a focus on frontend development.",
    },
    {
      company: "Company B",
      logo: "/images/no-image.jpg",
      description: "Led a team to develop a scalable backend for e-commerce.",
    },
    {
      company: "Company C",
      logo: "/images/no-image.jpg",
      description: "Designed and deployed cloud solutions to improve reliability.",
    },
  ];

  const handleMoreInfo = (company) => {
    alert(`More info about ${company}`);
    // You can add a modal or navigate to another page for more details
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div className="mt-20 flex items-center justify-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
          {workExperiences.map((experience) => (
            <WorkCard
              key={experience.company}
              company={experience.company}
              logo={experience.logo}
              description={experience.description}
              onMoreInfo={() => handleMoreInfo(experience.company)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkExperiences;

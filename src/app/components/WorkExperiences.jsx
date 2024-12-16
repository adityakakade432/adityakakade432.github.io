"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});


const WorkExperiences = () => {
  const workExperiences = [
    {
      company: "Cornell Electric Vehicles",
      logo: "/images/cev-logo.png",
      description: ` Hajde ta vallzojna vallen e rugoves hajde ta vallzojna Vallen e rugoves. Dej te molla kuqe kufiri Kosoves o dej te molla kuqe
            kufiri Kosoves. Hajde ta vallzojna vallen me shamia, hajde ta vallzojna vallen me shamia e jona kosova. E jona Shqipnia
            e jona Kosova e jona Shqipnia hajde ta vallzojna vallen me shamia sa bukur vallzon ne Kosove rinia.`,
    },
    {
      company: "MITRE",
      logo: "/images/mitre-logo.jpg",
      description: ` Hajde ta vallzojna vallen e rugoves hajde ta vallzojna Vallen e rugoves. Dej te molla kuqe kufiri Kosoves o dej te molla kuqe
            kufiri Kosoves. Hajde ta vallzojna vallen me shamia, hajde ta vallzojna vallen me shamia e jona kosova. E jona Shqipnia
            e jona Kosova e jona Shqipnia hajde ta vallzojna vallen me shamia sa bukur vallzon ne Kosove rinia.`,
    },
    {
      company: "MITRE",
      logo: "/images/mitre-logo.jpg",
      description: ` Hajde ta vallzojna vallen e rugoves hajde ta vallzojna Vallen e rugoves. Dej te molla kuqe kufiri Kosoves o dej te molla kuqe
            kufiri Kosoves. Hajde ta vallzojna vallen me shamia, hajde ta vallzojna vallen me shamia e jona kosova. E jona Shqipnia
            e jona Kosova e jona Shqipnia hajde ta vallzojna vallen me shamia sa bukur vallzon ne Kosove rinia.`,
    },
  ];

  const handleMoreInfo = (company) => {
    alert(`More info about ${company}`);
    // You can add a modal or navigate to another page for more details
  };

  return (
    <section id = "work">
      <h2 className={`text-center text-5xl font-bold text-[#52796f] mt-8 mb-8 md:mb-12 ${poppins.className}`}>
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
    </section>
  );
};

export default WorkExperiences;

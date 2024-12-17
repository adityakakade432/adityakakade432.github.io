"use client";
import React, { useState, useEffect, useRef } from "react";
import WorkCard from "./WorkCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"], // Add styles as needed
});

const WorkExperiences = () => {
  const workExperiences = [
    {
      company: "Cornell Electric Vehicles",
      logo: "/images/cev-logo.png",
      description: `<strong>Lead of the Data Applications and Analysis subteam</strong>.

      Led a team of 5 developers in creating and maintaining a network of <strong>web dashboards</strong> that served live data from our electric vehicle's drive sensors. 
       
      Developed an <strong>Android application</strong> in <strong>React Native</strong> that acted as the in vehicle dashboard for the driver (displayed data such as speed, battery percentage, and location on the track), and implemented a web application and <strong>RESTful API</strong> showcasing historical competition data and allowing access to it.`,
    },
    {
      company: "MITRE",
      logo: "/images/mitre-logo.jpg",
      description: `<strong>Software Engineer for Mission Planning & Advanced Development</strong>
      
      Developed a <strong>full stack ASP.NET application</strong> allowing end users to access custom mission file types.  Application enabled <strong>online and offline access</strong> to geospatially indexed resources, in low connectivity scenarios such as flights.`,
    },
    {
      company: "MITRE",
      logo: "/images/mitre-logo.jpg",
      description: ` <strong>Software Engineer for Secure Artificial Intelligence</strong>

      Developed <strong>backend architecture</strong> of internal web application enabling <strong>identification and standardization of AI-related cyber attack methods</strong>.

      Transformed internally existing web application from static to dynamic with <strong>development of hosted server</strong>.

      Implemented <strong>database model</strong> compatible with 150+ preexisting incident report objects, custom ATLAS format, and STIX format.`,
    },
  ];

  const handleMoreInfo = (company) => {
    alert(`More info about ${company}`);
  };

  // Fade-in effect logic
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation triggers
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (observer && sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2
        className={`text-center text-5xl font-bold text-[#52796f] mt-8 mb-8 md:mb-12 ${poppins.className}`}
      >
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

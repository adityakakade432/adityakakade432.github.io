"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"], // Add styles as needed
});

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation triggers
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (observer && sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="projects"
    >
      <h2
        className={`text-center text-5xl font-bold text-[#52796f] mt-24 mb-8 md:mb-12 ${poppins.className}`}
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            imgUrl={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

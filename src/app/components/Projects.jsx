import React from 'react'
import ProjectCard from './ProjectCard'
import { Poppins } from "next/font/google";
import projectsData from '../data/projectsData';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});


function Projects() {
  return (
    <>
      <h2 className={`text-center text-5xl font-bold text-[#52796f] mt-24 mb-8 md:mb-12 ${poppins.className}`} id = "projects">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} id={project.id} imgUrl={project.image} link={project.link} />)}
      </div>
    </>
  )
}

export default Projects
import React from 'react'
import ProjectCard from './ProjectCard'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});


const projectsData = [
  {
    id: 1,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  },
  {
    id: 2,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  },
  {
    id: 3,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  },
  {
    id: 4,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  },
  {
    id: 5,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  },
  {
    id: 6,
    title: "Blah",
    description: "Blah Blah",
    image: "/images/no-image.jpg",
  }
]

function Projects() {
  return (
    <>
      <h2 className={`text-center text-5xl font-bold text-[#52796f] mt-24 mb-8 md:mb-12 ${poppins.className}`}>
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}
      </div>
    </>
  )
}

export default Projects
import React from 'react'
import ProjectCard from './ProjectCard'

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
      <h2 className="text-center text-4xl font-bold text-white mt-24 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}
      </div>
    </>
  )
}

export default Projects
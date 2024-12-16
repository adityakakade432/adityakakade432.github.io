"use client";

import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ProjectPage from '../components/ProjectPage';

export default function ProjectInfoPage() {
  const router = useRouter();

  // Example project data
  const projectData = {
    images: [
      "/images/onefiller.jpg",
      "/images/twofiller.jpg",
      "/images/threefiller.jpg",
    ],
    title: "Project3",
    description:
      "Blah Blah Blahhhhhhhhhhh!",
  };

  return (
    <main className='flex min-h-screen flex-col bg-[#d5dfb7]'>
      <NavBar />
      <div className="container py-20 px-20 bg-[#d5dfb7] min-h-screen">
        <ProjectPage 
          images={projectData.images}
          title={projectData.title}
          description={projectData.description}
        />
      </div>
    </main>
  );
}

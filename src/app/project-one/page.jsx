"use client";

import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ProjectPage from '../components/ProjectPage';

export default function ProjectInfoPage() {
  const router = useRouter();

  // Example project data
  const projectData = {
    images: [
      "/images/project-cev-app.png",
      "/images/twofiller.jpg",
      "/images/threefiller.jpg",
    ],
    title: "Electric Vehicle Dashboard",
    description:
      "Developed an Android application that provided real-time sensor data from an electric vehicle to the driver during on-track performance. The app interfaced with the car&apos;s data acquisition boards via TCP to receive live telemetry, while simultaneously streaming data to a database and a historical dashboard through a custom API. This project involved close collaboration with electrical engineers to ensure seamless integration and usability, including designing software workflows that supported their understanding of and interaction with the system. The solution enabled enhanced performance monitoring and post-race analysis, empowering both drivers and engineers with actionable insights.",
    skills:
      ['React Native', 'Python', 'REST APIs', 'TCP', 'HTTPS', 'Node.js'],
    githublink: "https://github.com/adityakakade432/MobileDash2023"
  };

  return (
    <main className='flex min-h-screen flex-col bg-[#d5dfb7]'>
      <NavBar />
      <div className="container py-[100px] bg-[#d5dfb7] min-h-screen">
        <ProjectPage 
          images={projectData.images}
          title={projectData.title}
          description={projectData.description}
          skills={projectData.skills}
          githubLink={projectData.githublink}
        />
      </div>
    </main>
  );
}

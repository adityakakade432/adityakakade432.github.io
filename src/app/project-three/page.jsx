"use client";

import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ProjectPage from '../components/ProjectPage';

export default function ProjectInfoPage() {
  const router = useRouter();

  // Example project data
  const projectData = {
    images: [
      "/images/project-dashboard.png"],
    title: "United States Mental Health Dashboard",
    description:
      "Leveraging HTML, CSS, and D3.js, I designed and developed an interactive web dashboard that highlights mental health statistics across the United States, correlating them with factors such as average sunlight, household income, and depression rates across all 50 states. This project required extensive data preparation, utilizing Python libraries like Pandas and NumPy to clean and transform raw datasets into actionable insights. With D3.js, I implemented dynamic data parsing and visually compelling charts, creating an intuitive and engaging platform for exploring complex relationships within mental health data. This work showcases a fusion of technical expertise and creative data storytelling to make impactful information accessible.",
    skills: ["HTML", "CSS", "Javascript", "D3.js", "Pandas", "Numpy"],
    githublink : "https://github.com/adityakakade432/mental_health_dashboard/tree/main"
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

"use client";

import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"], // Add styles as needed
});

export default function ProjectInfoPage() {
  const router = useRouter();

  // Example project data
  const projectData = {
    githubLink: "https://github.coecis.cornell.edu/cs4701-24fa-projects/PC_Caffeinated-Coders_apk67_gff29_rs929_rsh256",
  };

  return (
    <main className={`flex min-h-screen flex-col bg-[#d5dfb7] ${poppins.className}`}>
      <NavBar />
      <div className="py-20 px-6 bg-[#d5dfb7] min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-[#52796f] mb-6">
          This project is in its final stages of development!
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-8">
          The project page is not finished yet. View the current progress on GitHub!
        </p>
        <a
          href={projectData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-br from-[#344e41] via-[#588157] to-[#84a98c] text-white font-medium shadow-md hover:brightness-110 hover:shadow-lg transition duration-300"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}

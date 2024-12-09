"use client";

import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';

export default function ProjectPage() {
  const router = useRouter();

  return (
    <>
    <NavBar/>
    <div className = "container, py-20 px-20 bg-[#d5dfb7] min-h-screen">
      <h1 className = "text-5xl text-[#52796f]">Project Info Here</h1>
    </div>
    </>
  );
}

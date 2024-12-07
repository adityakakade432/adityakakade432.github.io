import Image from "next/image";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperiences from "./components/WorkExperiences";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <IntroSection />
        <AboutMe />
        <WorkExperiences />
        <Projects />
      </div>
    </main>
  );
}

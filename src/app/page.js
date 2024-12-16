import Image from "next/image";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperiences from "./components/WorkExperiences";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#d5dfb7]'>
      <NavBar />
      <div className="container" id = "landing">
        <IntroSection />
      </div>
      <div className="container mt-24 mx-auto py-4 px-12">
        <AboutMe></AboutMe>
        <WorkExperiences></WorkExperiences>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperiences from "./components/WorkExperiences";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d5dfb7] overflow-x-hidden">
      <NavBar />
      {/* Remove the container class here */}
      <div id="landing">
        <IntroSection />
      </div>
      {/* Adjust container settings for consistent alignment */}
      <div className="container mx-auto mt-24 py-4 px-12">
        <AboutMe />
        <WorkExperiences />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

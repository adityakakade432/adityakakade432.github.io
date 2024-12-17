"use client";

import React, { useState, useEffect, useRef, useTransition } from 'react';
import Image from 'next/image';
import AboutMeButton from './AboutMeButton';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});

const AM_CONT = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="font-semibold">
        <li>- BS, Computer Science | Cornell University | May 2025</li>
        <li><br /></li>
        <li>- M.Eng, Computer Science | Cornell University | Dec 2025</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="font-semibold">
        <li>Skills Here</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) observer.disconnect();
    };
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`text-[#283618] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="about"
    >
      <div
        className={`md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ${poppins.className}`}
      >
        <Image src="/images/about-me-cornell.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-[#52796f] mb-4">About Me</h2>
          <p className="text-base md:text-md font-semibold">
            Hello! I am a current Senior at Cornell University&apos;s College of Engineering, about to graduate with my Bachelor of Science in Computer Science with a minor in Data Science. As a software
            engineer, my primary area of expertise is in Full Stack Development -- I have experience building full stack applications for client needs that range from electric vehicle dashboards to
            artificial intelligence cyber threat tracking. However, I am also extremely interested in using ML and Data Science to obtain insight into customer bases and communities. In my spare time
            I love reading novels by John Grisham, listening to country music, hiking, and collecting vinyl records!
          </p>
          <div className="flex flex-row mt-8">
            <AboutMeButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education
            </AboutMeButton>
            <AboutMeButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills
            </AboutMeButton>
          </div>
          <div>
            <div className="mt-8">{AM_CONT.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

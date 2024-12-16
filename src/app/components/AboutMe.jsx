"use client";

import React, { useState, useTransition } from 'react';
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
      <ul>
        <li>Blah</li>
        <li>Blah</li>
        <li>Blah</li>
        <li>Blah</li>
      </ul>
    )
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Blah2</li>
        <li>Blah2</li>
        <li>Blah2</li>
        <li>Blah2</li>
      </ul>
    )
  }
]

const AboutMe = () => {

  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section className="text-white"  id = "about">
      <div className={`md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ${poppins.className}`}>
        <Image
          src="/images/about-me-cornell.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-[#52796f] mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hajde ta vallzojna vallen e rugoves hajde ta vallzojna Vallen e rugoves. Dej te molla kuqe kufiri Kosoves o dej te molla kuqe
            kufiri Kosoves. Hajde ta vallzojna vallen me shamia, hajde ta vallzojna vallen me shamia e jona kosova. E jona Shqipnia
            e jona Kosova e jona Shqipnia hajde ta vallzojna vallen me shamia sa bukur vallzon ne Kosove rinia.
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
            <div className="mt-8">{AM_CONT.find((t) => t.id == tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
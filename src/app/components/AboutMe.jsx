"use client";

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import AboutMeButton from './AboutMeButton';

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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me-cornell.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hajde ta vallzojna Vallen e Rugoves Hajde ta vallzojna Vallen e Rugoves Dej te molla kuqe Kufiri Kosoves O dej te molla kuqe
            Kufiri Kosoves Hajde ta vallzojna Vallen me shamia Hajde ta vallzojna Vallen me shamia E jona Kosova E jona Shqipnia
            E jona Kosova E jona Shqipnia Hajde ta vallzojna Vallen me shamia Sa bukur vallzon Ne Kosove rinia
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
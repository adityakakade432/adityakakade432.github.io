import React from 'react'
import clsx from 'clsx'
import { InformationCircleIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});

function ProjectCard({ id, imgUrl, title, description, link }) {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <div
          className={clsx("overlay items-center justify-center absolute",
            "top-0 left-0 w-full h-full",
            "bg-[#52796f] bg-opacity-0 hidden group-hover:flex shadow-lg",
            "group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl")}>
          <Link href={`${link}`} className="h-14 w-14 border-2 relative rounded-full border-[#283618] hover:border-white group/link">
            <InformationCircleIcon
              className="h-10 w-10 text-[#283618] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </Link>

        </div>
      </div>
      <div
        className={`text-white rounded-b-xl bg-[#344e41] py-6 px-4 ${poppins.className} shadow-xl`}
      >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
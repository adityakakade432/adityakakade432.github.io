import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const navLinks = [
  {
    title: "About",
    link: "#about"
  },
  {
    title: "Work",
    link: "#work"
  },
  {
    title: "Projects",
    link: "#projects"
  },
  {
    title: "Contact",
    link: "#contact"
  }
]
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-op-acity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">ADITYA</Link>
        <div className="menu">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.link} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
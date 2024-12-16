import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const Contact = () => {
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between my-24 px-8 py-4 bg-[#52796f] rounded-md shadow-lg ${poppins.className}`} id = "contact">
      <div className="flex-1 mb-12 md:mb-0">
        <h2 className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-[#d5bdaf] via-[#e3d5ca] to-[#f5ebe0] inline-block text-transparent bg-clip-text">
          Contact
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-around md:justify-end gap-8">
        {/* GitHub */}
        <a
          href="https://github.com/adityakakade432"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aditya-praveen-kakade/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/_adikakade_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:apk67@cornell.edu"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;

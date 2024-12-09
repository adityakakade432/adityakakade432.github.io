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
    <section className={`flex flex-col md:flex-row items-center justify-between my-24 px-8 py-4 bg-[#52796f] rounded-md shadow-lg ${poppins.className}`}>
      <div className="flex-1 mb-12 md:mb-0">
        <h2 className="text-6xl md:text-6xl font-bold text-[#e9edc9]">
          Contact
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-around md:justify-end gap-8">
        {/* GitHub */}
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:your-email@example.com"
          className="text-[#e9edc9] hover:text-[#344e41] text-4xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;

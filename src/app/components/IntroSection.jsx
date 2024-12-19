import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const IntroSection = () => {
  return (
    <section className={`w-full min-h-screen bg-[url('/images/foggy-bg.jpg')] bg-cover bg-center bg-no-repeat ${poppins.className} overflow-hidden`}>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-12 min-h-screen items-center">
          <div className="col-span-7 text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#e9c46a]">
              Hello, I&#39;m
            </h1>
            <h1 className="bg-gradient-to-r from-[#e76f51] via-[#f4a261] to-[#e9c46a] inline-block text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-2">
              Aditya Kakade!
            </h1>
            <p className="text-[#ddefb6] text-base sm:text-lg lg:text-xl mb-6 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#faedcd]">
              I am a student currently pursuing both my Bachelor of Science <br />
              and Master of Engineering in Computer Science at Cornell University!
            </p>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#faedcd] via-[#e9edc9] to-[#84a98c] text-[#52796f] hover:brightness-110 transition duration-200">
                Download Resume
              </button>
            </div>
          </div>
          <div className="col-span-5 flex justify-center">
            <div className="rounded-full bg-[#52796f] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/images/flannel-image-circle.png"
                alt="Aditya's Profile Picture"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 hover:rotate-6 transition-all duration-500 ease-in-out"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

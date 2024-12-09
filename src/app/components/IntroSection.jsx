import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});

//https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46
//https://coolors.co/palette/d8e2dc-ffe5d9-ffcad4-f4acb7-9d8189
//https://coolors.co/palette/ccd5ae-e9edc9-fefae0-faedcd-d4a373

const IntroSection = () => {
  return (
    <section  className={`w-screen min-h-screen bg-[url('/images/foggy-bg.jpg')] bg-cover bg-center bg-no-repeat px-[150px] ${poppins.className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-12 min-h-screen items-center">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hello, I&#39;m
          </h1>
          <h1 className = "text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">Aditya Kakade!</h1>
          <p className="text-[#ddefb6] text-base sm:text-lg lg:text-xl mb-6">
            I am a student currently pursuing both my Bachelor of Science <br />
            and Master of Engineering in Computer Science at Cornell University!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full hover:bg-white bg-gradient-to-br from-[#faedcd] via-[#e9edc9] to-[#84a98c] text-[#52796f]">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center">
          <div className="rounded-full bg-[#52796f] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/flannel-image-circle.png"
              alt="Aditya's Profile Picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

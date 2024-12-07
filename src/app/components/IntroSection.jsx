import React from 'react';
import Image from 'next/image';

const IntroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold'>
            Hello, I am Aditya Kakade!
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            I am a student currently pursuing both my Bachelor of Science
            and Master of Engineering in Computer Science at Cornell University!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full hover:bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">Download Resume</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative'>
            <Image
              src='/images/my-picture.png'
              alt="Aditya's Profile Picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>);
};

export default IntroSection;
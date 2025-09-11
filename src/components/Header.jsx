import React, { useRef } from 'react';
import useBlobAnimation from './useBlobAnimation';

const Header = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  
  // Use the custom hook
  const dimensions = useBlobAnimation(pathRef, containerRef);

  return (
    <div className="flex-1 w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-24 p-4 sm:p-8 light-beam-container">
      <div className="text-center lg:text-left flex-1 space-y-6 lg:space-y-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight glow-heading">
          Hello, I'm Dinesh Ingale, a Software developer
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-gray-300 glow-heading">
          And part time writer
        </p>
        <p className="max-w-xl text-sm sm:text-base text-gray-400 mx-auto lg:mx-0 mb-4">
          I design and develop software. I have developed most of the projects around web application, mobile application, and SaaS.
          a passionate software developer and a student with a keen interest in building web and mobile applications. 
          My journey into software development started with a curiosity for how things work, which quickly evolved into a love for creating and solving problems with code.
        </p>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <a href="https://www.youtube.com/@dineshingale10" className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition-colors duration-300">
           YouTube
          </a>
          <a href="../resume.pdf" target="_blank" className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition-colors duration-300">
           Download Resume
          </a>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div 
            ref={containerRef} 
            className="relative w-full aspect-square md:w-[600px] shadow-2xl z-10 rounded-blob"
          >          
          <svg 
            className="absolute top-0 left-0 w-full h-full" 
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop id="gradientStop1" offset="0%" />
                <stop id="gradientStop2" offset="100%" />
              </linearGradient>
              <clipPath id="blob-clip">
                <path ref={pathRef} d="" />
              </clipPath>
            </defs>
          </svg>
          <img
            src="../photo.jpg"
            alt="Profile Picture"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto"
            style={{ clipPath: 'url(#blob-clip)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
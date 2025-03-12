import React from "react";
import { FaUser } from "react-icons/fa"; // Importing user icon as a logo

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 bg-black">
      
      {/* About Me Heading with Icon */}
      <div className="flex items-center gap-3 mb-5 animate-fade-in">
        <FaUser className="text-cyan-400 text-5xl sm:text-6xl drop-shadow-lg" /> 
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-gray-300 text-transparent bg-clip-text">
          About Me
        </h2>
      </div>

      {/* Soft Glowing Divider */}
      <div className="w-28 sm:w-40 h-1 bg-gradient-to-r from-cyan-300 to-gray-300 rounded-full shadow-md mb-6"></div>

      {/* About Description with Glass Effect */}
      <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-3xl shadow-2xl max-w-[90vw] sm:max-w-3xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed border border-white/10 transition-transform duration-300 hover:scale-105">
        I am a{" "}
        <span className="font-extrabold text-cyan-300">
          results-driven full-stack developer
        </span>{" "}
        with{" "}
        <span className="font-bold text-gray-300">1+ years of experience</span>,
        specializing in{" "}
        <span className="font-semibold text-cyan-400">
          JavaScript, Node.js, and React
        </span>
        . I have expertise in building{" "}
        <span className="font-bold text-gray-200">
          scalable web applications
        </span>{" "}
        and <span className="font-bold text-teal-300">RESTful APIs</span>. With
        a strong foundation in the{" "}
        <span className="font-semibold text-cyan-400">
          MERN stack (MongoDB, Express.js, React, and Node.js)
        </span>
        , I develop high-performance applications that deliver seamless user
        experiences. My expertise extends to{" "}
        <span className="font-bold text-gray-200">
          database management with SQL
        </span>{" "}
        and{" "}
        <span className="font-bold text-gray-300">
          backend development using .NET Core MVC
        </span>
        . I also integrate advanced{" "}
        <span className="font-semibold text-cyan-400">
          JavaScript libraries like Chart.js
        </span>{" "}
        for data visualization. Passionate about{" "}
        <span className="italic text-gray-400">
          clean code, performance optimization, and scalable architecture
        </span>
        , I create{" "}
        <span className="font-extrabold text-cyan-300">
          efficient, maintainable, and cutting-edge web solutions
        </span>
        .
      </div>

      {/* Modern Download CV Button */}
      <div className="mt-6">
        <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-gray-200 to-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition duration-300 transform hover:scale-110 hover:shadow-xl">
          DOWNLOAD MY CV
        </button>
      </div>

    </div>
  );
}

export default About;

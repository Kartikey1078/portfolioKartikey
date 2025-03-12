import React, { useState } from "react";
import vedio from "../assets/BGVedio.mp4";
import { useContext } from "react";
import { DataContext } from "./UserContext";
import { Menu, X } from "lucide-react"; // Icons for menu
import "./LandingPage.css";
const LandingPage = () => {
  const { isTrue } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isTrue && (
        <div className="relative">
          {/* ✅ Navbar */}
          <nav className="fixed top-0 left-0 w-full text-amber-50 p-4 z-50">
            <div className="flex items-center justify-between w-[95%] mx-auto">
              <div>
                <p className="text-cyan-50 border-2 border-white rounded-full p-3 w-[200px] text-center text-xl">
                  KARTIKEY TYAGÎ
                </p>
              </div>

              {/* ✅ Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={32} />
              </button>

              {/* ✅ Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="hover:text-white">
                  About
                </a>
                <a href="#skills" className="hover:text-white">
                  Skills
                </a>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          {/* ✅ Sidebar (Mobile Menu) */}
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 md:hidden`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Sidebar Links */}
            <ul className="flex flex-col items-start p-6 space-y-6 mt-16">
              <li>
                <a
                  href="#about"
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="font-medium w-[80%] sm:w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <p className="flex items-baseline">
              <span
                style={{ fontStyle: "italic" }}
                className="text-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mr-2 sm:mr-4 flex flex-col sm:flex-row items-center sm:items-start"
              >
                <span className="textItalic">I'm</span>
                <span className="textItalic ml-5">a</span>
              </span>

              <span className="text-wrap text-5xl sm:text-wrap sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl textFont">
                <div>
                  <span>FULL</span>-<span>STACK</span>
                </div>
              </span>
            </p>
            <p className="text-nowrap text-right textFont">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap">
                DEVELOPER
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-2 sm:ml-4">
                &
              </span>
            </p>
            <p className="text-nowrap text-left textFont">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap">
                SOFTWARE
              </span>
            </p>
            <p className="text-nowrap text-right textFont">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap">
                ENGINEER
              </span>
            </p>
          </div>

          {/* ✅ Background Video */}
          <video
            className="w-screen h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={vedio} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default LandingPage;

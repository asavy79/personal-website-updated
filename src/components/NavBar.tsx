import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md font-light fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="flex items-center py-5 px-2 text-black">
              <span className="font-bold fancy-cursive text-2xl">
                Alex Savard
              </span>
            </a>
          </div>
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <div className="space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            </div>
          </div>
          <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="rounded-lg shadow-lg bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="flex flex-col items-center space-y-3">
                    <a
                      href="#about"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      About
                    </a>
                    <a
                      href="#education"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      Education
                    </a>
                    <a
                      href="#experience"
                      className="-m-3 p-3 flex items-center rounded-md Hover:bg-gray-50"
                    >
                      Experience
                    </a>
                    <a
                      href="#skills"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      Skills
                    </a>

                    <a
                      href="#projects"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      Projects
                    </a>
                    <a
                      href="#contact"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Primary Nav for desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#about"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#education"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              Education
            </a>
            <a
              href="#experience"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-5 px-3 text-gray-700 hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

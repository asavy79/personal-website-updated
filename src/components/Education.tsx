import React from "react";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div
      className={
        "py-10 px-5 md:px-20 flex flex-col items-center mt-10 mb-10" +
        `transition-opacity duration-500 ${inView ? "fade-in" : "fade-out"}`
      }
      id="education"
      ref={ref}
    >
      <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2 mb-5 mt-10">
        Education
      </h2>
      <div className="w-full max-w-4xl">
        <div className="education-item bg-white rounded-lg shadow-xl p-5 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold text-gray-800">
            Bachelor of Arts in Computer Science
          </h3>
          <p className="text-md text-gray-600">
            University of Colorado Boulder - 2024-2026
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Currently seeking opportunities to get hands on experience through
              student led groups
            </li>
          </ul>
        </div>
        <div className="mt-5 education-item bg-white rounded-lg shadow-xl p-5 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold text-gray-800">
            Bachelor of Science in Software Engineering
          </h3>
          <p className="text-md text-gray-600">
            University of Guelph - 2022-2024
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Led an Agile team to develop an application that analyzed
              occupation data in Canada
            </li>
            <li>
              Gained comprehensive knowledge of the C language and implemented
              basic data structures and algorithms
            </li>
            <li>Member of the Google Student Developers Club</li>
            <li>
              Excelled in various mathematics courses such as Discrete
              Structures, Linear Algebra, and Calculus 2
            </li>
            <li>Thrived in courses such as micro and macro economics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;

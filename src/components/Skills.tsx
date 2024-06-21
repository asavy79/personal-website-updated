import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div
      className={
        "flex flex-col items-center w-full py-10 mt-20 " +
        `transition-opacity duration-500 ${inView ? "fade-in" : "fade-out"}`
      }
      id="skills"
      ref={ref}
    >
      <h3 className="text-5xl font-bold text-gray-800 mb-5 border-b-2 border-blue-600 pb-2 mt-10">
        My Skills
      </h3>
      <div className="grid grid-cols-3 gap-12 text-center mt-20">
        {[
          { icon: faReact, name: "React JS", color: "#61DAFB" },
          { icon: faPython, name: "Python", color: "#3776AB" },
          {
            icon: faGit,
            name: "Git",
            color: "#F05032",
            opacity: "opacity-50",
          }, // No specific icon for C
          { icon: faJsSquare, name: "JavaScript", color: "#F7DF1E" },
          { icon: faHtml5, name: "HTML", color: "#E34F26" },
          { icon: faCss3Alt, name: "CSS", color: "#1572B6" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 shadow-lg p-3"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              size="5x"
              style={{ color: skill.color }}
              className={
                skill.opacity +
                " transition duration-300 ease-in-out hover:scale-110"
              }
            />
            <div className="text-gray-800 font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

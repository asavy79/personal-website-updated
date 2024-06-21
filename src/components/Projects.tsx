import { useState } from "react";
import { useInView } from "react-intersection-observer";

type Project = {
  title: string;
  description: string;
  imageName: string;
};

const projects: Project[] = [
  {
    title: "Stock Graph Analysis",
    description:
      "A simple interface built using TaiPy allowing users to view data on a certain stock during a given period of time.",
    imageName: "taipy.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "Using React and Tailwind, designed and implemented a personal website showcasing projects and professional skills.",
    imageName: "personalsite.png",
  },
  {
    title: "Canada Labor Data Project",
    description:
      "Analyzed and visualized Canada labor market data using Python to extract meaningful patterns and trends.",
    imageName: "swdp.png",
  },
  {
    title: "Moving Average Cross Analysis",
    description:
      "Used Python, Pandas, NumPy, and the Yahoo Finance API to analyze average percentage increases in stocks after certain moving average crosses.",
    imageName: "movingaverages.png",
  },
];

export const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div
      id="projects"
      className={
        "flex flex-col items-center mt-30" +
        `transition-opacity duration-500 ${inView ? "fade-in" : "fade-out"}`
      }
    >
      <h1 className="text-5xl text-blue-800 mt-20 font-light">Projects</h1>
      <div id="projects" className="flex justify-center flex-col" ref={ref}>
        <div className="flex flex-row space-x-10 max-w-4xl w-full mb-20 mt-10">
          <div className="flex flex-col space-y-3 w-1/3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-2 ${
                  selectedProject.title === project.title
                    ? "bg-blue-200"
                    : "bg-white hover:bg-gray-100"
                } rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-md p-3`}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-left w-full font-semibold text-gray-700"
                >
                  {project.title}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-2/3 bg-white p-5 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {selectedProject.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {selectedProject.description}
            </p>
            <img
              className="mt-5"
              src={selectedProject.imageName}
              alt="Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

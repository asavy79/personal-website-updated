import { useState } from "react";
import { useInView } from "react-intersection-observer";

type Project = {
  title: string;
  description: string;
  imageName: string;
};

const projects: Project[] = [
  {
    title: "Interactive Stock Data Viewer",
    description:
      "This project features a user-friendly interface built with TaiPy, designed to provide users with the ability to explore and visualize stock market data. I utilized the Yahoo Finance module to fetch real-time and historical data for a specific stock over a user-selected time period.",
    imageName: "taipy.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "Using React and Tailwind CSS, I implemented my own personal website, hosted on an AWS EC2 instance. It provides a clean and concise portfolio of my skills, experience, and projects.",
    imageName: "personalsite.png",
  },
  {
    title: "Canada Labor Data Project",
    description:
      "I analyzed an extensive dataset containing over 2 million records of Canadian labor market data to explore the relationship between experience levels and their effects on average wages and job vacancies across Canada. Using Python, specifically the NumPy and Matplotlib libraries, I performed a statistical analysis to uncover trends and patterns. The results are displayed through clear and intuitive visualizations to effectively illustrate the findings.",
    imageName: "swdp.png",
  },
  {
    title: "Moving Average Cross Analysis",
    description:
      "Using the Yahoo Finance module, Pandas, and NumPy libraries, I implemented a tool allowing users to search for specific simple moving average crosses of various stocks throughout the S&P 500. Users are able to see historical stock performance after specific crosses, such as the 50 day crossing the 200, allowing them to make informed investment decisions.",
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

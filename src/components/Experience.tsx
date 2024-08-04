import { useInView } from "react-intersection-observer";

type ExperienceType = {
  title: string;
  description: string[];
  dateRange: {
    start: string;
    end: string;
  };
  company: string;
  logo: string; // Assuming you will pass a URL to the company logo image
};

const experiences: ExperienceType[] = [
  {
    title: "Software Engineer",
    description: [
      "Developed a full-stack expense tracker using Next.js, enhancing user tracking and budgeting efficiency",
      "Implemented secure user authentication using Auth.js, increasing application security",
      "Utilized a PostgreSQL database with Prisma ORM, optimizing query performance and ensuring efficient data handling",
      "Reduced database load by 30% through optimization of database queries, significantly enhancing system performance",
    ],
    dateRange: {
      start: "June 2024",
      end: "August 2024",
    },
    company: "Astra Entertainment",
    logo: "astraLogo.webp",
  },
];

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className={`flex flex-col items-center w-full py-10 px-5 md:px-20 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="experience"
      ref={ref}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="w-full max-w-4xl mb-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-5 text-black">
              <div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-sm">
                  {experience.dateRange.start} to {experience.dateRange.end}
                </p>
              </div>
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="w-40"
              />
            </div>
            <div className="p-6 space-y-2">
              <h4 className="font-medium text-gray-800">
                {experience.company}
              </h4>
              <ul className="list-disc pl-5 text-gray-700">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

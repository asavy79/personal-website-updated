export const AboutMe = () => {
  return (
    <div
      className="flex justify-center items-center space-x-10 mt-20 mx-auto max-w-4xl p-10 sm:flex-row flex-col mb-10"
      id="about"
    >
      <div>
        <img
          className="lg:w-100 object-cover rounded-full shadow-lg"
          src="mugshot.jpeg"
          alt="Profile"
        />
      </div>

      <div className="flex flex-col space-y-10 p-6 bg-white rounded-xl shadow-2xl mt-5 md:mt-0">
        <h1 className="text-2xl font-semibold text-gray-900">About Me</h1>
        <p className="text-gray-700 text-lg">
          I am a passionate Computer Science student at the University of
          Colorado Boulder, interested in mathematics, full stack development,
          and data science. I am mostly self-taught, and enjoy learning new
          skills that enhance my software engineering capabilities.
        </p>
        <a
          href="#education"
          className="rounded-full bg-blue-600 w-40 p-3 text-white hover:bg-blue-500 text-center cursor-pointer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

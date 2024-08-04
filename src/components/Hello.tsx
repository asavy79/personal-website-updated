import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Hello = () => {
  return (
    <div className="mt-20">
      <div className="hidden md:block font-bold text-9xl text-center mt-10 gradient-text">
        Hi I'm Alex
      </div>
      <div>
        <div className="mt-20 flex flex-row space-x-5 justify-center">
          <a
            href="https://www.linkedin.com/in/alex-savard-690924229/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
          <a
            href="https://github.com/asavy79"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
          <a
            href="mailto:alex.savard20@icloud.com"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
        </div>
      </div>
    </div>
  );
};

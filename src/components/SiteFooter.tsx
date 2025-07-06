import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SiteFooter() {
  return (
    <div className="font-heading flex flex-col items-center justify-center gap-4 p-4 text-gray-800 lg:p-8">
      <div className="flex flex-row items-center gap-4">
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://www.linkedin.com/in/weakbox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://github.com/weakbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://soundcloud.com/weakbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="mailto:connor@weakbox.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className="text-center text-xs">
        Built from scratch with React and Tailwind. © 2025 Connor McLeod
      </p>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

export default function SiteFooter() {
  return (
    <footer className="col-span-full flex w-full flex-col items-center justify-center gap-2 bg-gray-200 p-4 sm:p-8 dark:bg-gray-950">
      <nav className="flex flex-row items-center gap-4">
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
      </nav>
      <p className="text-center text-xs">
        Built from scratch with React & Tailwind.
      </p>
      <p className="text-center text-xs">© 2025 Connor McLeod</p>
    </footer>
  );
}

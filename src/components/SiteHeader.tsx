import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="col-span-full flex w-full flex-col justify-between gap-4 bg-gray-200 p-4 font-bold sm:flex-row sm:p-8 dark:bg-gray-950">
      <div className="flex w-full items-center justify-between">
        <a
          className="flex items-center gap-2 transition-colors duration-100 hover:text-gray-400"
          href="https://www.weakbox.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBoxOpen} className="text-2xl" />
          <span className="text-2xl font-extrabold tracking-tight">
            weakbox
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 sm:flex">
          <a
            className="transition-colors duration-100 hover:text-gray-400"
            href="https://www.linkedin.com/in/weakbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition-colors duration-100 hover:text-gray-400"
            href="https://soundcloud.com/weakbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a>
          <a
            className="w-fit rounded-full bg-gray-800 px-8 py-2 font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-400 dark:bg-gray-100 dark:text-gray-950"
            href="mailto:connor@weakbox.com"
          >
            Contact
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center sm:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              className="text-2xl"
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>
      </div>

      {/* The styling on this could be improved. It is basically exactly like the desktop navbar, so it's possible they could be extracted and combined. */}
      {isOpen && (
        <nav className="flex w-full items-center justify-between gap-8 px-4 sm:hidden">
          <a
            className="transition-colors duration-100 hover:text-gray-400"
            href="https://www.linkedin.com/in/weakbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition-colors duration-100 hover:text-gray-400"
            href="https://soundcloud.com/weakbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a>
          <a
            className="w-fit rounded-full bg-gray-800 px-8 py-2 font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-400 dark:bg-gray-100 dark:text-gray-950"
            href="mailto:connor@weakbox.com"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

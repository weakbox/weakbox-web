import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="col-span-full flex w-full justify-between bg-gray-200 p-4 font-bold sm:p-8">
        <a
          className="flex items-center gap-2"
          href="https://www.weakbox.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBoxOpen} className="text-2xl" />
          <span className="text-2xl font-extrabold tracking-tight transition-colors duration-100 hover:text-gray-400">
            weakbox
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 sm:flex">
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
            className="w-fit rounded-full bg-gray-800 px-8 py-2 font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-600"
            href="mailto:connor@weakbox.com"
          >
            Contact
          </a>
        </div>

        {/* Mobile (Add burger menu functionality) */}
        <div className="flex items-center sm:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="font-heading flex items-center justify-between gap-8 px-4 pb-4 sm:hidden sm:px-8 sm:pb-8">
          <a
            className="transition-colors duration-100 hover:text-white"
            href="https://www.linkedin.com/in/weakbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition-colors duration-100 hover:text-white"
            href="https://soundcloud.com/weakbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a>
          <a
            className="transition-colors duration-100 hover:text-white"
            href="mailto:connor@weakbox.com"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}

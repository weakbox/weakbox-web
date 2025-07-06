import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="font-heading flex justify-between p-4 font-bold text-gray-800 lg:p-12">
        <a
          className="flex items-center gap-2"
          href="https://www.weakbox.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logo}
            alt="Weakbox Web Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tight transition-colors duration-100 hover:text-gray-400">
            weakbox
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
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
            className="w-fit rounded-full border-2 border-gray-800 bg-white px-8 py-2 font-extrabold transition-colors duration-100 hover:border-gray-400 hover:text-gray-400"
            href="mailto:connor@weakbox.com"
          >
            Contact
          </a>
        </div>

        {/* Mobile (Add burger menu functionality) */}
        <div className="flex items-center lg:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="font-heading flex items-center justify-between gap-8 px-4 pb-4 lg:hidden lg:px-8 lg:pb-8">
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

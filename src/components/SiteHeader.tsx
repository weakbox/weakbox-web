import { useState } from "react";
import logo from "../assets/logo.png";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="font-heading flex justify-between gap-16 bg-blue-200 p-4 md:p-8">
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
          <span className="text-xl font-extrabold">weakbox 2</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Mobile (Add burger menu functionality) */}
        <div className="flex items-center md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            ≡
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="font-heading flex items-center justify-between gap-8 bg-blue-200 px-4 pb-4 md:hidden md:px-8 md:pb-8">
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

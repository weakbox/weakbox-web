import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import SiteNavLinks from "./SiteNavLinks";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = "site-mobile-menu";

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

        <SiteNavLinks className="hidden items-center gap-8 sm:flex" />

        {/* Mobile */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="cursor-pointer rounded-md p-2"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FontAwesomeIcon
              className="text-2xl"
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <SiteNavLinks
          id={menuId}
          mobile
          className="flex w-full flex-col items-stretch gap-2 sm:hidden"
        />
      )}
    </header>
  );
}

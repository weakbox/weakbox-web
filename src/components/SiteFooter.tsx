import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "./ExternalLink";
import { socialLinks } from "../data/navigation";

export default function SiteFooter() {
  return (
    <footer className="col-span-full flex w-full flex-col items-center justify-center gap-2 bg-gray-200 p-4 sm:p-8 dark:bg-gray-950">
      <nav className="flex flex-row items-center gap-4" aria-label="Social links">
        {socialLinks.map((link) => (
          <ExternalLink
            key={link.href}
            href={link.href}
            newTab={link.newTab}
            aria-label={link.label}
            title={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
          </ExternalLink>
        ))}
      </nav>
      <p className="text-center text-xs">
        Built from scratch with React & Tailwind.
      </p>
      <p className="text-center text-xs">© 2026 Connor McLeod</p>
    </footer>
  );
}

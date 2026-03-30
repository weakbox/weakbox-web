import ExternalLink from "./ExternalLink";
import { contactEmail, navLinks } from "../data/navigation";

type SiteNavLinksProps = {
  className?: string;
  id?: string;
  mobile?: boolean;
};

export default function SiteNavLinks({
  className = "",
  id,
  mobile = false,
}: SiteNavLinksProps) {
  return (
    <nav id={id} className={className} aria-label="Primary navigation">
      {navLinks.map((link) => (
        <ExternalLink
          key={link.href}
          href={link.href}
          newTab
          className={mobile ? "rounded-lg px-3 py-2 text-center" : ""}
        >
          {link.label}
        </ExternalLink>
      ))}
      <ExternalLink
        href={`mailto:${contactEmail}`}
        variant="pill"
        className={mobile ? "w-full" : ""}
      >
        Contact
      </ExternalLink>
    </nav>
  );
}

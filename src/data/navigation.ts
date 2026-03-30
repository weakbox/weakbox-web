import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import type { NavLink, SocialLink } from "../types/navigation";

export const contactEmail = "connor@weakbox.com";

export const navLinks: readonly NavLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/weakbox/" },
  { label: "Soundcloud", href: "https://soundcloud.com/weakbox" },
];

export const socialLinks: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/weakbox/",
    icon: faLinkedin,
    newTab: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/weakbox",
    icon: faGithub,
    newTab: true,
  },
  {
    label: "Soundcloud",
    href: "https://soundcloud.com/weakbox",
    icon: faSoundcloud,
    newTab: true,
  },
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
    icon: faEnvelope,
    newTab: false,
  },
];

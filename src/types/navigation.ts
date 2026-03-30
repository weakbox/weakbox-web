import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconProp;
  newTab: boolean;
};

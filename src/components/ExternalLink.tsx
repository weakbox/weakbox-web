import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkVariant = "ghost" | "outline" | "pill";

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
  variant?: ExternalLinkVariant;
  newTab?: boolean;
  className?: string;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children" | "target" | "rel" | "className"
>;

const variantClasses: Record<ExternalLinkVariant, string> = {
  ghost:
    "transition-colors duration-100 hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:hover:text-gray-300 dark:focus-visible:outline-gray-300",
  outline:
    "inline-flex min-w-0 items-center gap-2 truncate rounded-full border-2 border-gray-800 px-3 py-1 font-bold transition-colors duration-100 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus-visible:outline-gray-300",
  pill: "inline-flex w-fit items-center justify-center rounded-full bg-gray-800 px-6 py-2 font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:px-8 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-300 dark:focus-visible:outline-gray-300",
};

export default function ExternalLink({
  children,
  href,
  variant = "ghost",
  newTab = false,
  className = "",
  ...rest
}: ExternalLinkProps) {
  const composedClassName = `${variantClasses[variant]} ${className}`.trim();

  return (
    <a
      href={href}
      className={composedClassName}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "./ExternalLink";
import TagBadge from "./TagBadge";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  website?: string;
  github?: string;
  thumbnail: string;
};
export default function ProjectCard({
  title,
  description,
  tags,
  website = "",
  github = "",
  thumbnail,
}: ProjectCardProps) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <img
        src={thumbnail}
        alt={`${title} project thumbnail`}
        loading="lazy"
        decoding="async"
        className="h-56 w-full object-cover object-top sm:h-64 lg:h-72"
      />
      <div className="flex min-h-72 flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <ul className="mb-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagBadge key={`${title}-${tag}`} tag={tag} />
            ))}
          </ul>
          <h2 className="w-fit border-b-2 border-gray-200 text-3xl font-black dark:border-gray-600">
            {title}
          </h2>
          <p className="line-clamp-6 leading-relaxed">{description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {website && (
            <ExternalLink
              href={website}
              variant="outline"
              newTab
              className="flex-1 justify-center sm:flex-none"
            >
              <FontAwesomeIcon icon={faGlobe} /> Website
            </ExternalLink>
          )}
          {github && (
            <ExternalLink
              href={github}
              variant="outline"
              newTab
              className="flex-1 justify-center sm:flex-none"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}

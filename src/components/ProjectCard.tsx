import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const tagColors = {
  ai: "bg-gradient-to-r from-pink-500 to-blue-500 text-gray-100",
  python: "bg-[#ffd43b] text-gray-800",
  javascript: "bg-[#f7df1e] text-gray-800",
  typescript: "bg-[#3178c6] text-gray-100",
  react: "bg-[#61dafb] text-gray-800",
  c: "bg-[#00599C] text-gray-100",
  assembly: "bg-gray-900 text-gray-100",
  default: "bg-gray-300 text-gray-800",
};

type ProfileCardProps = {
  title?: string;
  description?: string;
  tags?: string[];
  website?: string;
  github?: string;
  thumbnail?: string;
};

type ValidTag = keyof typeof tagColors;

const renderTags = (tags: string[]) => {
  return tags.map((tag, index) => {
    const lowerTag = tag.toLowerCase();
    const colorClass = tagColors[lowerTag as ValidTag] || tagColors.default;
    return (
      <li
        key={index}
        className={`rounded-full px-3 py-1 text-xs font-bold ${colorClass}`}
      >
        {tag}
      </li>
    );
  });
};

// Cards should have a minimum height of 144 to ensure consistent layout.

export default function ProfileCard({
  title = "Project",
  description = "An example project.",
  tags = [],
  website = "",
  github = "",
  thumbnail = "",
}: ProfileCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <img
        src={thumbnail}
        alt={`${title} project thumbnail.`}
        className="h-72 w-full object-cover object-top"
      />
      <div className="flex min-h-72 flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <ul className="mb-1 flex flex-wrap gap-2">
            {tags && renderTags(tags)}
          </ul>
          <h2 className="w-fit border-b-2 border-gray-200 text-3xl font-black dark:border-gray-600">
            {title}
          </h2>
          <p>{description}</p>
        </div>
        <div className="flex gap-4">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate rounded-full border-2 border-gray-800 px-3 py-1 font-bold transition-colors duration-100 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faGlobe} /> Website
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate rounded-full border-2 border-gray-800 px-3 py-1 font-bold transition-colors duration-100 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

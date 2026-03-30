type TagBadgeProps = {
  tag: string;
};

const tagColors = {
  ai: "bg-gradient-to-r from-pink-500 to-blue-500 text-gray-100",
  python: "bg-[#ffd43b] text-gray-800",
  javascript: "bg-[#f7df1e] text-gray-800",
  typescript: "bg-[#3178c6] text-gray-100",
  react: "bg-[#61dafb] text-gray-800",
  c: "bg-[#00599C] text-gray-100",
  assembly: "bg-gray-900 text-gray-100",
  default: "bg-gray-300 text-gray-800",
} as const;

type ValidTag = keyof typeof tagColors;

function getTagColor(tag: string) {
  const lowerTag = tag.toLowerCase();
  return tagColors[lowerTag as ValidTag] ?? tagColors.default;
}

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <li className={`rounded-full px-3 py-1 text-xs font-bold ${getTagColor(tag)}`}>
      {tag}
    </li>
  );
}

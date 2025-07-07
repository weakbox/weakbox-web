import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard({
  image = "",
  description = "",
  className = "",
}) {
  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-16">
      <div
        className={`flex w-full max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border-2 border-gray-200 bg-gray-50 p-4 text-gray-400 ${className}`}
      >
        <div className="flex w-full items-center justify-between">
          <FontAwesomeIcon icon={faImage} />
          <div className="font-extrabold tracking-tight">weakbox.com</div>
        </div>
        <img
          src={image}
          className="aspect-square max-w-48 rounded-full border-2 border-gray-200 object-cover"
        />
        <div className="text-xs font-normal">{description}</div>
      </div>
    </div>
  );
}

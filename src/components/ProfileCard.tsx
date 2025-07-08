import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard({ image = "", description = "" }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-between gap-4 rounded-sm bg-gray-50 p-4 text-gray-400`}
    >
      <div className="flex w-full items-center justify-between">
        <FontAwesomeIcon icon={faImage} />
        <div className="font-bold tracking-tight">weakbox.com</div>
      </div>
      <img src={image} className="max-h-64 w-full object-cover" />
      <div className="text-xs font-normal">{description}</div>
    </div>
  );
}

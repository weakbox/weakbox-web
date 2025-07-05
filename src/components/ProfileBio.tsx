import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

export default function ProfileBio() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-extrabold text-gray-400">Hi out there! It's me,</p>
      <p className="text-6xl font-black tracking-tight">Connor McLeod.</p>
      <p>
        I'm a Computer Engineer based in{" "}
        <FontAwesomeIcon icon={faCanadianMapleLeaf} /> Halifax, Nova Scotia,
        currently working as a Graduate Software Engineer at Kainos. Outside of
        work, I enjoy producing music and I'm a big fan of hockey and football.
      </p>
      <a
        className="w-fit rounded-full border-2 border-gray-800 bg-white px-8 py-2 font-extrabold transition-colors duration-100 hover:border-gray-400 hover:text-gray-400"
        href="mailto:connor@weakbox.com"
      >
        Contact
      </a>
    </div>
  );
}

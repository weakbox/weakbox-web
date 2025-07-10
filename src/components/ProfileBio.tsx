import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

export default function ProfileBio() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-extrabold text-gray-400">Hi out there! It's me,</p>
        <p className="text-6xl font-black tracking-tight">Connor McLeod.</p>
        <p className="">
          I'm a Computer Engineer based in{" "}
          <FontAwesomeIcon
            className="text-red-800 dark:text-red-400"
            icon={faCanadianMapleLeaf}
          />{" "}
          Halifax, Nova Scotia, currently working as a Graduate Software
          Engineer at Kainos. I graduated from Dalhousie University in 2024 with
          a Bachelor's in Electrical Engineering, where I fell in love with
          programming. Since then, I've been honing my skills as a full-stack
          developer. When I'm not coding, you'll usually find me producing EDM,
          hitting the gym, or cheering on the Edmonton Oilers.
        </p>
      </div>
      <a
        className="w-fit rounded-full bg-gray-800 px-8 py-4 text-2xl font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-400 dark:bg-gray-100 dark:text-gray-900"
        href="mailto:connor@weakbox.com"
      >
        Get in Touch!
      </a>
    </div>
  );
}

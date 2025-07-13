import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

export default function ProfileBio() {
  return (
    <div className="flex min-h-72 w-full flex-1 flex-col justify-between gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-gray-400">
          Hi out there! It's me,
          <span className="block text-6xl font-black tracking-tight text-gray-800 dark:text-gray-100">
            Connor McLeod.
          </span>
        </h1>
        <p>
          I'm a Computer Engineer based in{" "}
          <FontAwesomeIcon
            className="text-red-800 dark:text-red-400"
            icon={faCanadianMapleLeaf}
          />{" "}
          Halifax, Nova Scotia, currently working as a Graduate Software
          Engineer at Kainos. I earned my degree in Electrical Engineering from
          Dalhousie University in 2024, where I fell in love with programming.
          Since then, I've been developing my skills as a full-stack developer
          by getting hands-on and building the ideas I'm passionate about. When
          I'm not coding, you'll find me tinkering in FL Studio, lifting at the
          gym, playing Counter-Strike, or cheering on the Edmonton Oilers.
        </p>
      </div>
      <a
        className="w-fit rounded-full bg-gray-800 px-8 py-2 text-2xl font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-400 dark:bg-gray-100 dark:text-gray-950"
        href="mailto:connor@weakbox.com"
      >
        Contact
      </a>
    </div>
  );
}

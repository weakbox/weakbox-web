import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

export default function ProfileBio() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-8 p-4 sm:py-16 sm:pl-16">
      <div className="flex flex-col gap-2">
        <p className="font-extrabold text-gray-400">Hi out there! It's me,</p>
        <p className="text-6xl font-black tracking-tight">Connor McLeod.</p>
        <p className="">
          I'm a Computer Engineer based in{" "}
          <FontAwesomeIcon
            className="text-red-700"
            icon={faCanadianMapleLeaf}
          />{" "}
          Halifax, Nova Scotia, currently working as a Graduate Software
          Engineer at Kainos. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <a
        className="w-fit rounded-full bg-gray-800 px-8 py-2 text-2xl font-extrabold text-gray-100 transition-colors duration-100 hover:bg-gray-600"
        href="mailto:connor@weakbox.com"
      >
        Contact
      </a>
    </div>
  );
}

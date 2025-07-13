import ProfileBio from "./ProfileBio";

import ProfilePicture from "../assets/profile.jpg";

export default function ProfileWrapper() {
  return (
    <section className="col-span-full flex min-h-72 flex-col items-center gap-8 sm:flex-row">
      <ProfileBio />
      <figure className="max-h-72 max-w-72 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700">
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  );
}

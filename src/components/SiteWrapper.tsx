import ProfileBio from "./ProfileBio";
import ProfileCard from "./ProfileCard";
import ProjectWrapper from "./ProjectWrapper";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

import ProfilePicture from "../assets/profile.jpg";

export default function SiteWrapper() {
  return (
    <div className="font-main mx-auto flex max-w-screen-xl flex-col items-center justify-center bg-gray-100 text-gray-800">
      <SiteHeader />
      <div className="grid items-center justify-center justify-items-center gap-8 p-8 sm:p-16 lg:grid-cols-2">
        <ProfileBio />
        <ProfileCard
          image={ProfilePicture}
          description={"Hanging out in the Montréal Canadien's Press Room."}
        />
        <ProjectWrapper />
      </div>
      <SiteFooter />
    </div>
  );
}

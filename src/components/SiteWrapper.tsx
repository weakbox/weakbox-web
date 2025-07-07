import ProfileBio from "./ProfileBio";
import ProfileCard from "./ProfileCard";
import ProjectWrapper from "./ProjectWrapper";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

import ProfilePicture from "../assets/profile.jpg";

export default function SiteWrapper() {
  return (
    <div className="font-main mx-auto grid max-w-screen-xl justify-items-center gap-4 bg-gray-100 text-gray-800 sm:grid-cols-2">
      <SiteHeader />
      <ProfileBio />
      <ProfileCard
        image={ProfilePicture}
        description={"A simple test of what a card might look like."}
      />
      <ProjectWrapper />
      <SiteFooter />
    </div>
  );
}

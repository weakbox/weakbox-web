import ProfileBio from "./ProfileBio";
import ProfileImage from "./ProfileImage";

export default function ProfileWrapper() {
  return (
    <div className="font-heading flex flex-col gap-8 p-4 font-bold text-gray-800 lg:flex-row lg:p-12">
      <ProfileBio />
      <ProfileImage />
    </div>
  );
}

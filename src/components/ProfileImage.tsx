import ProfileCard from "./ProfileCard";
import profilePicture1 from "../assets/dummy.webp";
import profilePicture2 from "../assets/dummy.webp";

export default function ProfileImage() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <ProfileCard image={profilePicture1} description="Me!" className="" />
      <ProfileCard
        image={profilePicture2}
        description="Another example image."
        className=""
      />
    </div>
  );
}

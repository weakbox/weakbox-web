import ProfileWrapper from "./ProfileWrapper";
import ProjectWrapper from "./ProjectWrapper";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteWrapper() {
  return (
    <div className="m-2 overflow-hidden rounded-2xl md:m-8">
      <SiteHeader />
      <ProfileWrapper />
      <ProjectWrapper />
      <SiteFooter />
    </div>
  );
}

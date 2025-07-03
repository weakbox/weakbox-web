import ProfileWrapper from "./ProfileWrapper";
import ProjectWrapper from "./ProjectWrapper";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteWrapper() {
  return (
    <>
      <div>This website is currently under construction! Hang in there!</div>
      <SiteHeader />
      <ProfileWrapper />
      <ProjectWrapper />
      <SiteFooter />
    </>
  );
}

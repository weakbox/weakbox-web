import ProfileWrapper from "./ProfileWrapper";
import ProjectWrapper from "./ProjectWrapper";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteWrapper() {
  return (
    <div className="flex w-full justify-center">
      <div className="m-2 flex max-w-6xl flex-col gap-4 overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-50 lg:m-16">
        <SiteHeader />
        <ProfileWrapper />
        <ProjectWrapper />
        <SiteFooter />
      </div>
    </div>
  );
}

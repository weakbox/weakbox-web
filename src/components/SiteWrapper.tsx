import SiteHeader from "./SiteHeader";

import ProjectHeader from "./ProjectHeader";
import ProjectCard from "./ProjectCard";
import SiteFooter from "./SiteFooter";

import ProfileWrapper from "./ProfileWrapper";
import { projects } from "../data/projects";

export default function SiteWrapper() {
  return (
    <div className="dark:text-gray-xl mx-auto flex max-w-screen-xl flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SiteHeader />
      <main className="grid items-stretch justify-center justify-items-stretch gap-4 p-4 sm:gap-8 sm:p-8 md:grid-cols-2 md:p-12 lg:p-16">
        <ProfileWrapper />
        <ProjectHeader />
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

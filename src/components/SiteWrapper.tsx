import SiteHeader from "./SiteHeader";
import ProfileBio from "./ProfileBio";
import ProfileCard from "./ProfileCard";
import ProjectHeader from "./ProjectHeader";
import ProjectCard from "./ProjectCard";
import SiteFooter from "./SiteFooter";

import ProfilePicture from "../assets/profile.jpg";
import DailyFeudThumbnail from "../assets/dailyfeud-thumbnail.png";
import XM23EmulatorThumbnail from "../assets/xm23emulator-thumbnail.png";
import GuessTheYearXPThumbnail from "../assets/guesstheyearxp-thumbnail.png";

export default function SiteWrapper() {
  return (
    <div className="font-main mx-auto flex max-w-screen-xl flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <SiteHeader />
      <div className="grid items-center justify-center justify-items-center gap-8 p-8 sm:p-16 lg:grid-cols-2">
        <ProfileBio />
        <ProfileCard
          image={ProfilePicture}
          description={"Hanging out in the Montréal Canadien's Press Room."}
        />
        <ProjectHeader />
        <ProjectCard
          title="DailyFeud"
          description="A Family Feud-inspired web game where players guess top answers to daily prompts. Uses GPT-4 and TheFuzz for flexible answer matching, making inputs feel smart and forgiving. Built with FastAPI, React, and TailwindCSS."
          tags={["AI", "Python", "React", "TypeScript"]}
          website="https://dailyfeud.onrender.com/"
          github="https://github.com/weakbox/dailyfeud"
          thumbnail={DailyFeudThumbnail}
        />
        <ProjectCard
          title="XM-23 Emulator"
          description="A console emulator for a custom RISC architecture designed by Dalhousie faculty. Features full instruction cycle emulation, cache modes, interrupt handling, and step-through debugging. Built from a low-level spec to deepen systems understanding."
          tags={["C", "Assembly"]}
          github="https://github.com/weakbox/XM23-Emulator"
          thumbnail={XM23EmulatorThumbnail}
        />
        <ProjectCard
          title="Guess the Year XP"
          description="A retro year-guessing game styled after Windows XP. Built with React, Vite, and SCSS, featuring a pixel-perfect UI and a local JSON question bank designed for future API integration."
          tags={["React", "JavaScript"]}
          website="https://weakbox.github.io/guess-the-year-game/"
          github="https://github.com/weakbox/guess-the-year-game"
          thumbnail={GuessTheYearXPThumbnail}
        />
      </div>
      <SiteFooter />
    </div>
  );
}

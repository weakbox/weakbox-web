import DailyFeudThumbnail from "../assets/dailyfeud-thumbnail.png";
import XM23EmulatorThumbnail from "../assets/xm23emulator-thumbnail.png";
import GuessTheYearXPThumbnail from "../assets/guesstheyearxp-thumbnail.png";
import type { Project } from "../types/project";

export const projects: readonly Project[] = [
  {
    title: "DailyFeud",
    description:
      "A full-stack daily web game inspired by Family Feud, where players guess the most popular answers to crowd-sourced prompts. I built it from scratch using React and FastAPI, integrating GPT-4 to generate dynamic answer sets. Combined with fuzzy string matching, it accepts close guesses and typos - making it feel like you're really on the show.",
    tags: ["AI", "Python", "React", "TypeScript"],
    website: "https://dailyfeud.onrender.com/",
    github: "https://github.com/weakbox/dailyfeud",
    thumbnail: DailyFeudThumbnail,
  },
  {
    title: "XM-23 Emulator",
    description:
      "A console emulator for a custom RISC architecture that runs assembly code compiled into the .xme format. It fully simulates the instruction cycle, including cache modes, interrupt handling, and step-through debugging. I built it entirely in C over a semester, gaining a hands-on understanding of how CPUs actually execute code.",
    tags: ["C", "Assembly"],
    github: "https://github.com/weakbox/XM23-Emulator",
    thumbnail: XM23EmulatorThumbnail,
  },
  {
    title: "Guess the Year XP",
    description:
      "A retro year-guessing web game where players try to pinpoint the year different events took place. I designed and built the entire UI to mimic the classic Windows XP aesthetic. It was a fun challenge that pushed me to dive deeper into learning CSS.",
    tags: ["React", "JavaScript"],
    website: "https://weakbox.github.io/guess-the-year-game/",
    github: "https://github.com/weakbox/guess-the-year-game",
    thumbnail: GuessTheYearXPThumbnail,
  },
];

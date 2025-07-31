import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Python", level: 65, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 60, category: "database" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "PostgreSQL", level: 65, category: "database" },
  { name: "Unity", level: 80, category: "game development" },
  { name: "C#", level: 60, category: "game development" },
  { name: "VR/AR Development", level: 70, category: "game development" },
  { name: "Blender", level: 70, category: "game development" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "C++", level: 80, category: "backend" },
  { name: "Redux", level: 75, category: "frontend" },
  { name: "SASS/SCSS", level: 80, category: "frontend" },
  { name: "React Query", level: 90, category: "frontend" },
  { name: "RESTful APIs", level: 85, category: "backend" },
  { name: "Vite", level: 80, category: "tools" },
  { name: "Firebase", level: 70, category: "database" },
  { name: "Jest", level: 75, category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "tools",
  "game development",
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foregrround hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-1 text-muted-foreground text-sm text-right">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

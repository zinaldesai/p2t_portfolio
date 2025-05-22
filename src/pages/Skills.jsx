import React from "react";
import { FaReact, FaGitAlt, FaAws, FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiFlask,
  SiVite
} from "react-icons/si";

const skills = {
  "LANGUAGES & DATABASES": [
    { name: "JavaScript", icon: <SiJavascript size={60} color="#f7df1e" /> },
    { name: "Python", icon: <SiPython size={60} color="#306998" /> },
    { name: "HTML5", icon: <SiHtml5 size={60} color="#e34c26" /> },
    { name: "CSS3", icon: <SiCss3 size={60} color="#264de4" /> },
    { name: "MySQL", icon: <SiMysql size={60} color="#00758f" /> },
    { name: "MongoDB", icon: <SiMongodb size={60} color="#47A248" /> },
  ],
  "FRAMEWORKS & TECHNOLOGIES": [
    { name: "React", icon: <FaReact size={60} color="#61dafb" /> },
    { name: "Node.js", icon: <SiNodedotjs size={60} color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress size={60} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} color="#38bdf8" /> },
    { name: "AWS", icon: <FaAws size={60} color="#ff9900" /> },
    { name: "Flask", icon: <SiFlask size={60} /> },
  ],
  "TOOLS & PLATFORMS": [
    { name: "Git", icon: <FaGitAlt size={60} color="#f05032" /> },
    { name: "GitHub", icon: <FaGithub size={60} /> },
    { name: "Visual Studio Code", icon: <FaCode size={60} color="#007acc" /> },
    { name: "Postman", icon: <SiPostman size={60} color="#ff6c37" /> },
    { name: "Vite", icon: <SiVite size={60} color="#646cff" /> },
  ],
};

const SkillsSection = () => {
  return (
    <div className="skills-container py-10 px-6 md:px-20 h-auto pb-10">
      <h1 className="title text-5xl font-bold mb-6 font-roca text-center mt-36">skills</h1>
      <p className="text-center text-3xl uppercase font-decalotype tracking-widest mb-10">
        Languages, Technologies, Tools & Platforms
      </p>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-center font-decalotype tracking-widest mb-6">
            {category}
          </h2>
          <div className="flex flex-wrap justify-center gap-10 font-decalotype">
            {items.map(({ name, icon }) => (
              <div key={name} className="flex flex-col items-center text-center">
                {icon}
                <span className="mt-2 text-xl tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
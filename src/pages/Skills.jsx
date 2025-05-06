import React from "react";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaCode } from "react-icons/fa";
import {
  SiKotlin,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiAndroidstudio,
  SiIntellijidea,
  SiEclipseide,
  SiPostman,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiFlask,
  SiJupyter,
  SiPycharm,
  SiGithub,
  SiVite
} from "react-icons/si";

const skills = {
  "LANGUAGES & DATABASES": [
    { name: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
    { name: "Python", icon: <SiPython size={40} color="#306998" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} color="#e34c26" /> },
    { name: "CSS3", icon: <SiCss3 size={40} color="#264de4" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  ],
  "FRAMEWORKS & TECHNOLOGIES": [
    { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
    { name: "AWS", icon: <FaAws size={40} color="#ff9900" /> },
    { name: "Flask", icon: <SiFlask size={40} color="#000000" /> },
  ],
  "TOOLS & PLATFORMS": [
    { name: "Git", icon: <FaGitAlt size={40} color="#f05032" /> },
    { name: "GitHub", icon: <SiGithub size={40} color="#ffffff" /> },
    { name: "Visual Studio Code", icon: <FaCode size={40} color="#007acc" /> },
    { name: "Eclipse", icon: <SiEclipseide size={40} color="#2C2255" /> },
    { name: "Postman", icon: <SiPostman size={40} color="#ff6c37" /> },
    { name: "Vite", icon: <SiVite size={40} color="#646cff" /> },
  ],
};

const SkillsSection = () => {
  return (
    <div className="py-10 px-6 md:px-20 min-h-screen">
      <h1 className="title text-4xl font-bold mb-6 font-roca text-center mt-36">skills</h1>
      <p className="text-center uppercase font-decalotype tracking-widest mb-10">
        Languages, Technologies, Tools & Platforms
      </p>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-lg font-semibold text-center font-decalotype tracking-widest mb-6">
            {category}
          </h2>
          <div className="flex flex-wrap justify-center gap-10 font-decalotype">
            {items.map(({ name, icon }) => (
              <div key={name} className="flex flex-col items-center text-center">
                {icon}
                <span className="mt-2 text-xs tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
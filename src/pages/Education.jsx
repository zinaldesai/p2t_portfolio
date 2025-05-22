import React from "react";

const education = [
  {
    date: "October 2024 - April 2025",
    title: "Path2Tech: Full Stack Developer Program",
    company: "NPower",
  },
  {
    date: "August 2018 - May 2022",
    title: "Bachelor's of Science in Cognitive Science",
    company: "The University of Texas at Dallas",
    details: "Concentration in Psychology/Human-Computer Interactions"
  },
];

const certifications = [
  {
    date: "2025",
    title: "Responsive Web Design",
    company: "freeCodeCamp",
  },
  {
    date: "2024",
    title: "AI for All: From Basics to GenAI Practice",
    company: "NVIDIA",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="education-container h-auto px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto pb-16">
      <h1 className="page-title text-5xl font-bold mb-12 font-roca text-center mt-36">education</h1>

      <div className="space-y-16 pb-20">
        {education.map((edu, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start mb-16">
            
            {/* Date */}
            <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
              <span className="date bg-midnight text-whitesmoke px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap font-decalotype tracking-wide">
                {edu.date}
              </span>
            </div>

            {/* Vertical Line */}
            <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2 "></div>

            {/* Education Content */}
            <div className="flex-1 sm:pl-10">
              <h3 className="title text-lg sm:text-xl font-semibold font-decalotype tracking-wide">{edu.title}</h3>
              <p className="company text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{edu.company}</p>
              <p className="detail text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{edu.details}</p>
             
            </div>
          </div>
        ))}
      </div>

      <h1 className="page-title text-5xl font-bold mb-12 font-roca text-center ">certifications</h1>
      <div className="space-y-16">
        {certifications.map((cert, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start">

            {/* Date */}
            <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
              <span className="date bg-midnight text-whitesmoke px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap font-decalotype tracking-wide">
                {cert.date}
              </span>
            </div>

            {/* Vertical Line */}
            <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2 "></div>

            {/* Certifications Content */}
            <div className="flex-1 ml-25 sm:pl-10">
              <h3 className="title text-lg sm:text-xl font-semibold font-decalotype tracking-wide">{cert.title}</h3>
              <p className="company text-sm sm:text-base font-medium font-decalotype tracking-wide">{cert.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from "react";

const experiences = [
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

export default function ExperienceTimeline() {
  return (
    <div className="education-container min-h-screen px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto pb-10">
      <h1 className="page-title text-4xl font-bold mb-12 font-roca text-center mt-36">education</h1>

      <div className="space-y-16 pb-20">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start mb-16">
            
            {/* Date */}
            <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
              <span className="date bg-midnight text-whitesmoke px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap font-decalotype tracking-wide">
                {exp.date}
              </span>
            </div>

            {/* Vertical Line */}
            <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2 "></div>

            {/* Experience Content */}
            <div className="flex-1 sm:pl-10">
              <h3 className="title text-lg sm:text-xl font-semibold font-decalotype tracking-wide">{exp.title}</h3>
              <p className="company text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{exp.company}</p>
              <p className="detail text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{exp.details}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
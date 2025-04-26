import React from "react";

const experiences = [
  {
    date: "02/2023 – 08/2023",
    title: "Software Engineer Intern",
    company: "Capital One",
    details: [
      "Designed and implemented responsive, dynamic user interfaces for live front-end applications using React, Angular, HTML, CSS, and JavaScript, ensuring optimal user experiences across platforms and devices.",
      "Contributed to an Agile development environment by utilizing Git for version control, ensuring high-quality code, efficient collaboration, and supporting continuous integration and delivery."
    ]
  },
  {
    date: "12/2020 – Current",
    title: "Event Coordinator",
    company: "SB Events Co.",
    details: [
      "Recognized for maintaining composure under pressure, coordinating logistics for large-scale events with budgets exceeding $200K, managing multiple vendors and stakeholders, and ensuring seamless execution across 100+ domestic and international multicultural events.",
      "Proven expertise in managing all event phases from conception to completion, proactively implementing contingency plans, swiftly addressing last-minute changes, and delivering high-quality results while maintaining client trust and satisfaction."
    ]
  },
  {
    date: "04/2025 – 05/2025",
    title: "Instructor",
    company: "Code2College",
    details: [
      "Taught and mentored first-year students in the Elite 102 program, focusing on developing project management skills and technical expertise in Python and SQL over a 4-week curriculum",
      "Led students through a collaborative, hands-on database project, guiding them in applying Python and SQL to real-world scenarios while fostering teamwork, communication, and problem-solving skills"
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="experience-container min-h-screen px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto">
      <h1 className="page-title text-4xl font-bold mb-12 font-roca text-center mt-10">Experience</h1>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start mb-16">
            
            {/* Date */}
            <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
              <span className="date bg-midnight text-whitesmoke px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap">
                {exp.date}
              </span>
            </div>

            {/* Vertical Line */}
            <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2"></div>

            {/* Experience Content */}
            <div className="flex-1 sm:pl-10">
              <h3 className="title text-lg sm:text-xl font-semibold">{exp.title}</h3>
              <p className="company text-sm sm:text-base font-medium mb-3">{exp.company}</p>
              <ul className="detail list-disc list-inside space-y-2 text-sm sm:text-base">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
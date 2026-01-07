import React from "react";

const education = [
   {
    date: "Jan 2026 - May 2027",
    title: "Master's in Business Administration",
    company: "Texas A&M - Corpus Christi",
    details: "Concentration in Business Analytics"
  }, 
  {
    date: "Sept 2025 - Dec 2025",
    title: "RiseUp",
    company: "ServiceNow",
    details: "Agile project delivery and workflow implementation"
  },
  {
    date: "Oct 2024 - Apr 2025",
    title: "Path2Tech: Full Stack Developer Program",
    company: "NPower",
    details: "Team-based app development using Agile planning and collaboration"
  },
  {
    date: "Aug 2018 - May 2022",
    title: "Bachelor's of Science in Cognitive Science",
    company: "The University of Texas at Dallas",
    details: "Concentration in Psychology/Human-Computer Interactions"
  },
];

const certifications = [
    {
    date: "2026",
    title: "Certified System Administrator (CSA)",
    company: "ServiceNow",
  },
  {
    date: "2026",
    title: "Certified Application Developer (CAD)",
    company: "ServiceNow",
  },
  {
    date: "2025",
    title: "Flow Designer",
    company: "ServiceNow",
  },
  {
    date: "2025",
    title: "Workflow Specialist",
    company: "Asana",
  },
  {
    date: "2025",
    title: "Responsive Web Design",
    company: "freeCodeCamp",
  },
]

// export default function ExperienceTimeline() {
//   return (
//     <div className="education-container h-auto px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto pb-16">
//       <h1 className="page-title text-5xl font-bold mb-12 font-roca text-center mt-36">Education & Professional Training</h1>

//       <div className="space-y-8 pb-16">
//         {education.map((edu, index) => (
//           <div key={index} className="relative flex flex-col sm:flex-row items-start">
            
//             {/* Date */}
//             <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
//               <span className="date bg-midnight text-whitesmoke px-3 py-1 sm:text-sm rounded whitespace-nowrap font-decalotype tracking-wider">
//                 {edu.date}
//               </span>
//             </div>

//             {/* Vertical Line */}
//             <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2 "></div>

//             {/* Education Content */}
//             <div className="flex-1 sm:pl-10">
//               <h3 className="title text-lg sm:text-xl font-semibold font-decalotype tracking-wide">{edu.title}</h3>
//               <p className="company text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{edu.company}</p>
//               <p className="detail text-sm sm:text-base font-medium mb-3 font-decalotype tracking-wide">{edu.details}</p>
             
//             </div>
//           </div>
//         ))}
//       </div>

//       <h1 className="page-title text-5xl font-bold mb-12 font-roca text-center ">Certifications</h1>
//       <div className="space-y-8">
//         {certifications.map((cert, index) => (
//           <div key={index} className="relative flex flex-col sm:flex-row items-start">

//             {/* Date */}
//             <div className="relative w-full sm:w-40 flex sm:justify-end mb-2 sm:mb-0 pl-1 sm:pl-0">
//               <span className="date bg-midnight text-whitesmoke px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap font-decalotype tracking-wide">
//                 {cert.date}
//               </span>
//             </div>

//             {/* Vertical Line */}
//             <div className="line absolute hidden sm:block sm:left-44 top-0 h-full border-l-2 "></div>

//             {/* Certifications Content */}
//             <div className="flex-1 ml-25 sm:pl-10">
//               <h3 className="title text-lg sm:text-xl font-semibold font-decalotype tracking-wide">{cert.title}</h3>
//               <p className="company text-sm sm:text-base font-medium font-decalotype tracking-wide">{cert.company}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function ExperienceTimeline() {
  return (
    <div className="education-container h-auto px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto pb-16">
//       <h1 className="page-title text-5xl font-bold mb-12 font-roca text-center mt-36">Education & Professional Training</h1>

      {/* Timeline Wrapper */}
      <div className="relative">

        {/* Vertical Line (Desktop only) */}
        <div className="hidden sm:block absolute left-1/3 top-0 h-full border-l-2 border-gray-300"></div>

        {/* Education Entries */}
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row">

              {/* Date */}
              <div className="sm:w-1/3 sm:pr-8 text-left mb-2 sm:mb-0">
                <span className="date inline-block bg-midnight text-whitesmoke px-3 py-1 rounded whitespace-nowrap font-decalotype">
                  {edu.date}
                </span>
              </div>

              {/* Content */}
              <div className="sm:w-2/3 sm:pl-8">
                <h3 className="title font-semibold font-decalotype">{edu.title}</h3>
                <p className="company font-medium font-decalotype">{edu.company}</p>
                <p className="detail font-medium font-decalotype">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <h1 className="page-title text-5xl font-bold mt-24 mb-16 font-roca text-center">
        Certifications
      </h1>

      <div className="relative">

        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/3 top-0 h-full border-l-2 border-gray-300"></div>

        <div className="space-y-10">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col sm:flex-row">

              {/* Date */}
              <div className="sm:w-1/3 sm:pr-8 text-right mb-2 sm:mb-0">
                <span className="date inline-block bg-midnight text-whitesmoke px-3 py-1 rounded font-decalotype">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <div className="sm:w-2/3 sm:pl-8">
                <h3 className="title font-semibold font-decalotype">{cert.title}</h3>
                <p className="company font-medium font-decalotype">{cert.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

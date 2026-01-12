import React from "react";

const intro = "I approach project management as a balance of structure and adaptability. My experience spans high-complexity event delivery, Agile software environments, and team leadership, with a consistent focus on clarity, communication, and execution. I specialize in turning ambiguity into actionable plans, aligning diverse stakeholders, and building systems that help teams deliver reliably under changing conditions."

const introFrame = "Below are selected experiences that highlight how I manage complexity, support cross-functional teams, and drive delivery across different environments:"

const experiences = [
  {
    company: "SB Events Co.",
    title: "Project Management Across High-Complexity, Multi-Stakeholder Events",
    context: "SB Events delivers large-scale, multicultural events across the U.S. and internationally. Projects often run concurrently, involve multiple vendors, and operate under tight timelines with high visibility.",
    challenge: [
      "Managing 100+ overlapping projects with shifting scopes",
      "Coordinating 20+ external vendors per event",
      "Ensuring timeline, budget, and quality expectations were consistently met",
      "Maintaining visibility and accountability across stakeholders"
    ],
    role: "As a Project Manager, I owned end-to-end delivery from planning to execution. I focused on creating lightweight systems that made progress, risks, and dependencies visible to everyone involved.",
    approach: [
      "Designing milestone and dependency tracking systems to monitor progress across concurrent projects",
      "Establishing communication rhythms with vendors and internal teams to surface issues early",
      "Proactively managing change requests, resolving conflicts, and enforcing financial accountability",
      "Preparing executive-level reports and post-project analyses to inform future improvements"
    ],
    skills: [
      "Custom project trackers and milestone dashboards",
      "Vendor coordination workflows",
      "Risk identification and contingency planning",
      "Stakeholder reporting and retrospectives"
    ],
    impact: [
      "Delivered 100+ projects on time despite overlapping timelines",
      "Reduced operational conflicts by 25% through improved tracking and communication",
      "Increased vendor accountability and internal alignment"
    ],
    summary: [
      "I thrive in complex, fast-moving environments",
      "I prioritize proactive risk management over reactive problem-solving",
      "I build systems that scale as project volume increases"
    ]
  },
  {
    company: "Capital One",
    title: "Supporting Agile Delivery in a Technical Environment",
    context: "As part of Capital One Developer Academy, I supported Agile delivery for enterprise-level applications within cross-functional engineering teams.",
    challenge: [
      "Coordinating delivery across multiple teams and technical dependecies",
      "Translating technical progress into clear, actionable updates",
      "Supporting sprint planning while balancing scope, timelines, and risk",
    ],
    role: "While developing as a software engineer, I gravitated toward delivery enablement and coordination—bridging the gap between engineering execution and project oversight.",
    approach: [
      "Supported sprint planning, backlog refinement, and Agile ceremonies",
      "Partnered with engineers and product managers to track progress and delivery risks",
      "Documented technical workflows and issues to improve team visibility",
      "Assisted with automation and reporting initiatives to streamline delivery"
    ],
    skills: [
      "Agile / Scrum workflows",
      "Backlog and issue tracking tools",
      "Git-based collaboration",
      "Technical documentation"
    ],
    impact: [
      "Improved clarity around dependencies and delivery timelines",
      "Helped teams surface risks earlier in the sprint cycle",
      "Strengthened my ability to communicate effectively with technical stakeholders"
    ],
    summary: ["This role strengthened my ability to operate as a project manager in technical environments - understanding how engineering teams work while keeping delivery goals front and center."]
  },
  {
    company: "Code2College",
    title: "Leadership, Mentorship, and Delivery Through Teaching",
    context: "As a volunteer instructor, I taught Python and SQL using collaborative, project-based learning models.",
    approach: [
      "Helping students break down projects into manageble tasks",
      "Reinforcing milestone planning and deadline ownership",
      "Encouraging clear communication and teamwork"
    ],
    skills: [
      "Mentorship and leadership",
      "Task prioritization and time management",
      "Facilitating progress with fixed timelines"
    ],
    summary: "This experience reinforced my belief that strong project management is rooted in clear expectations, continuous feedback, and support for team growth."
  }
];

export default function ExperienceTimeline() {
  return (
   <div className="experience-container min-h-screen px-4 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto pb-10">
      <h1 className="page-title text-5xl font-bold mb-10 font-roca text-center mt-36">Experience</h1>
      <p className="intro text-sm sm:text-base font-decalotype tracking-wide mb-6">{intro}</p>
      <p className="introForm text-sm sm:text-base font-decalotype tracking-wide mb-8">{introFrame}</p>

      <div className="space-y-16 pb-20">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row items-start mb-16">
            <div className="flex-1 sm:pl-10 space-y-4">
              <h3 className="company text-sm sm:text-base font-semibold font-medium font-decalotype tracking-wide">{exp.company}</h3>

              <p className="title text-lg sm:text-xl font-decalotype tracking-wide mb-3">{exp.title}</p>

              <section>
                <strong>Context</strong>
                <p>{exp.context}</p>
              </section>

              {exp.challenge && (
                <section>
                  <strong>The Challenge</strong>
                  <ul className="list-disc pl-5">
                    {exp.challenge.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {exp.role && (
                <section>
                  <strong>My Role</strong>
                  <p>{exp.role}</p>
                </section>
              )}

              {exp.approach && (
                <section>
                  <strong>Approach</strong>
                  <ul className="list-disc pl-5">
                    {exp.approach.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {exp.skills && (
                <section>
                  <strong>Tools & Practices</strong>
                  <ul className="list-disc pl-5">
                    {exp.skills.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {exp.impact && (
                <section>
                  <strong>Impact</strong>
                  <ul className="list-disc pl-5">
                    {exp.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <strong>Summary</strong>
                {Array.isArray(exp.summary) ? (
                  <ul className="list-disc pl-5">
                    {exp.summary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.summary}</p>
                )}
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

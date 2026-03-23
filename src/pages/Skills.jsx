import { motion } from "framer-motion"

const sections = [
  {
    title: "Project Management & Delivery",
    items: [
      "Agile & Scrum methodologies (Sprint Planning, Retrospectives)",
      "End-to-end project lifecycle management",
      "Software Development Lifecycle (SDLC) coordination",
      "Risk identification, dependency tracking, and issue resolution",
      "Resource coordination and delivery prioritization",
      "Change management and continuous improvement",
    ],
  },
  {
    title: "Stakeholder & Vendor Management",
    items: [
      "Cross-functional collaboration across technical and business teams",
      "Stakeholder communication and alignment",
      "Vendor coordination and performance management",
      "Executive-level reporting and project updates",
      "Issue escalation, resolution, and accountability tracking",
      "Post-project reviews and operational analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Jira \u2014 sprint tracking, backlog management, reporting",
      "Asana \u2014 project planning, milestones, task coordination",
      "ServiceNow (ITSM / IRM) \u2014 workflow automation fundamentals",
      "Microsoft Office (Excel, PowerPoint, Access) \u2014 budgeting, presentations and data management",
      "Git \u2014 version control awareness and technical collaboration",
    ],
  },
  {
    title: "Technical & Analytical Literacy",
    items: [
      "SQL \u2014 data validation, reporting, and analysis",
      "Python & JavaScript \u2014 technical fluency and automation awareness",
      "Business analytics and metrics-driven decision making",
      "Human-Computer Interaction (HCI) principles",
      "Technical documentation and workflow mapping",
    ],
  },
  {
    title: "How I Deliver Projects",
    ordered: true,
    items: [
      "Define scope, objectives, constraints, and success metrics",
      "Align stakeholders, teams, and vendors",
      "Plan milestones, sprints, and dependencies",
      "Track progress, risks, and delivery performance",
      "Communicate clearly and adapt execution",
      "Deliver outcomes, document results, and improve processes",
    ],
  },
]

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
}

export default function Skills() {
  return (
    <>
      <header className="mb-14 text-center md:mb-16">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Project Management
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary md:text-xl">
          I manage projects by aligning people, processes, and tools to deliver
          high-quality outcomes across operational and technical environments.
        </p>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-text-muted md:text-sm">
          Agile &middot; Scrum &middot; SDLC &middot; Jira &middot; Asana &middot; Stakeholder Management &middot; Risk Mitigation
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((section, sIdx) => (
          <motion.article
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: sIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="shimmer-border rounded-2xl border border-border bg-bg-card/90 p-6 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-glow md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className="h-8 w-1 shrink-0 rounded-full bg-gradient-accent animate-pulse-glow"
                aria-hidden
              />
              <h2 className="font-heading text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                {section.title}
              </h2>
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid gap-3 text-text-secondary md:gap-4 ${
                section.items.length > 4 ? "md:grid-cols-2" : ""
              }`}
            >
              {section.items.map((line, i) => (
                <motion.li
                  key={i}
                  variants={rowVariants}
                  className="flex gap-3 text-base leading-relaxed md:text-lg"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>
                    {section.ordered ? `${i + 1}. ` : ""}
                    {line}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </div>
    </>
  )
}

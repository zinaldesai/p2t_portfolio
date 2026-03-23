import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheck } from "react-icons/fa6"
import { IoChevronDown } from "react-icons/io5"

const intro =
  "I approach project management as a balance of structure and adaptability. My experience spans high-complexity event delivery, Agile software environments, and team leadership, with a consistent focus on clarity, communication, and execution. I specialize in turning ambiguity into actionable plans, aligning diverse stakeholders, and building systems that help teams deliver reliably under changing conditions."

const introFrame =
  "Below are selected experiences that highlight how I manage complexity, support cross-functional teams, and drive delivery across different environments:"

const experiences = [
  {
    company: "SB Events Co.",
    title: "Project Management Across High-Complexity, Multi-Stakeholder Events",
    context:
      "SB Events Co. delivers large-scale, multicultural events across the U.S. and internationally. Projects often run concurrently, involve multiple vendors, and operate under tight timelines with high visibility.",
    challenge: [
      "Managing 100+ overlapping projects with shifting scopes",
      "Coordinating 20+ external vendors per event",
      "Ensuring timeline, budget, and quality expectations were consistently met",
      "Maintaining visibility and accountability across stakeholders",
    ],
    role: "As a Project Coordinator, I owned end-to-end delivery from planning to execution. I focused on creating lightweight systems that made progress, risks, and dependencies visible to everyone involved.",
    approach: [
      "Designing milestone and dependency tracking systems to monitor progress across concurrent projects",
      "Establishing communication rhythms with vendors and internal teams to surface issues early",
      "Proactively managing change requests, resolving conflicts, and enforcing financial accountability",
      "Preparing executive-level reports and post-project analyses to inform future improvements",
    ],
    skills: [
      "Custom project trackers and milestone dashboards",
      "Vendor coordination workflows",
      "Risk identification and contingency planning",
      "Stakeholder reporting and retrospectives",
    ],
    impact: [
      "Delivered 100+ projects on time despite overlapping timelines",
      "Reduced operational conflicts by 25% through improved tracking and communication",
      "Increased vendor accountability and internal alignment",
    ],
    summary: [
      "I thrive in complex, fast-moving environments",
      "I prioritize proactive risk management over reactive problem-solving",
      "I build systems that scale as project volume increases",
    ],
  },
  {
    company: "Capital One",
    title: "Supporting Agile Delivery in a Technical Environment",
    context:
      "As part of Capital One Developer Academy, I supported Agile delivery for enterprise-level applications within cross-functional engineering teams.",
    challenge: [
      "Coordinating delivery across multiple teams and technical dependencies",
      "Translating technical progress into clear, actionable updates",
      "Supporting sprint planning while balancing scope, timelines, and risk",
    ],
    role: "While developing as a software engineer, I gravitated toward delivery enablement and coordination\u2014bridging the gap between engineering execution and project oversight.",
    approach: [
      "Supported sprint planning, backlog refinement, and Agile ceremonies",
      "Partnered with engineers and product managers to track progress and delivery risks",
      "Documented technical workflows and issues to improve team visibility",
      "Assisted with automation and reporting initiatives to streamline delivery",
    ],
    skills: [
      "Agile / Scrum workflows",
      "Backlog and issue tracking tools",
      "Git-based collaboration",
      "Technical documentation",
    ],
    impact: [
      "Improved clarity around dependencies and delivery timelines",
      "Helped teams surface risks earlier in the sprint cycle",
      "Strengthened my ability to communicate effectively with technical stakeholders",
    ],
    summary: [
      "This role strengthened my ability to operate as a project manager in technical environments \u2014 understanding how engineering teams work while keeping delivery goals front and center.",
    ],
  },
  {
    company: "Code2College",
    title: "Leadership, Mentorship, and Delivery Through Teaching",
    context:
      "As a volunteer instructor, I taught Python and SQL using collaborative, project-based learning models.",
    approach: [
      "Helping students break down projects into manageable tasks",
      "Reinforcing milestone planning and deadline ownership",
      "Encouraging clear communication and teamwork",
    ],
    skills: [
      "Mentorship and leadership",
      "Task prioritization and time management",
      "Facilitating progress with fixed timelines",
    ],
    summary:
      "This experience reinforced my belief that strong project management is rooted in clear expectations, continuous feedback, and support for team growth.",
  },
]

function SectionDetails({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <details
      className="group rounded-xl border border-border/80 bg-bg-secondary/40 open:bg-bg-card/60"
      open={open}
      onToggle={(e) => setOpen(e.target.open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 font-medium text-text-primary transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
        {title}
        <IoChevronDown
          className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-border/60 px-4 pb-4 pt-2 text-text-secondary">
        {children}
      </div>
    </details>
  )
}

export default function Experience() {
  // All experience cards expanded on first load so details are visible at a glance
  const [expandedIds, setExpandedIds] = useState(
    () => new Set(experiences.map((_, i) => i)),
  )

  const toggleCard = (index) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <>
      <header className="mb-12 text-center md:mb-14">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Experience
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-left text-base leading-relaxed text-text-secondary md:text-center md:text-lg">
          {intro}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-left text-sm text-text-muted md:text-center md:text-base">
          {introFrame}
        </p>
      </header>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="shimmer-border overflow-hidden rounded-2xl border border-border bg-bg-card/90 shadow-card backdrop-blur-md"
          >
            <div className="group border-b border-border/80 bg-bg-secondary/30 px-5 py-5 transition-colors duration-300 hover:bg-bg-secondary/50 md:px-8 md:py-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                {exp.company}
              </p>
              <h2 className="mt-2 font-heading text-xl font-semibold text-text-primary md:text-2xl">
                {exp.title}
              </h2>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                onClick={() => toggleCard(index)}
                aria-expanded={expandedIds.has(index)}
                aria-controls={`exp-panel-${index}`}
                id={`exp-trigger-${index}`}
              >
                {expandedIds.has(index) ? "Hide details" : "Show details"}
                <IoChevronDown
                  className={`h-4 w-4 transition-transform ${expandedIds.has(index) ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {expandedIds.has(index) && (
                <motion.div
                  id={`exp-panel-${index}`}
                  role="region"
                  aria-labelledby={`exp-trigger-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 px-5 py-5 md:px-8 md:py-6">
                    <SectionDetails title="Context">
                      <p className="leading-relaxed">{exp.context}</p>
                    </SectionDetails>

                    {exp.challenge && (
                      <SectionDetails title="The challenge">
                        <ul className="list-disc space-y-2 pl-5">
                          {exp.challenge.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </SectionDetails>
                    )}

                    {exp.role && (
                      <SectionDetails title="My role">
                        <p className="leading-relaxed">{exp.role}</p>
                      </SectionDetails>
                    )}

                    {exp.approach && (
                      <SectionDetails title="Approach">
                        <ul className="list-disc space-y-2 pl-5">
                          {exp.approach.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </SectionDetails>
                    )}

                    {exp.skills && (
                      <div className="rounded-xl border border-border/60 bg-bg-secondary/30 px-4 py-4">
                        <p className="mb-3 text-sm font-semibold text-text-primary">
                          Tools &amp; practices
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <li key={i}>
                              <span className="inline-block rounded-full border border-border bg-bg-card px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-accent">
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.impact && (
                      <div className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-4">
                        <p className="mb-3 text-sm font-semibold text-text-primary">
                          Impact
                        </p>
                        <ul className="space-y-2">
                          {exp.impact.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex gap-3 text-text-secondary"
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.08 }}
                            >
                              <FaCheck
                                className="mt-1 h-4 w-4 shrink-0 text-accent"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="rounded-xl border border-border/60 bg-bg-secondary/20 px-4 py-4">
                      <p className="mb-2 text-sm font-semibold text-text-primary">
                        Summary
                      </p>
                      {Array.isArray(exp.summary) ? (
                        <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                          {exp.summary.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-text-secondary">{exp.summary}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </>
  )
}

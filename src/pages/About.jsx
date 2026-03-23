import { motion } from "framer-motion"
import Image from "../assets/pic.png"

const firstName = "Zinal"
const jobTitle = "project manager"
const jobLocation = "Dallas, TX"
const careerObjective =
  "I'm a Project Manager and Coordinator with a technical background in Software Engineering and Business Analytics. I specialize in bringing structure, clarity, and momentum to complex, multi-stakeholder work by aligning people, processes, and technology."
const experience =
  "My experience spans end-to-end delivery of high-volume, high-stakes programs - managing $250K+ budgets, coordinating 20+ vendors simultaneously, and driving on-time delivery across concurrent workstreams. I've built project tracking systems from scratch, developed SOPs, and implemented single sources of truth that improve team-wide visibility and reduce operational friction."
const goals =
  "I've supported Agile software delivery in enterprise environments at companies like Capital One, serving as both a Scrum Master and cross-functional coordinator. My technical literacy in tools like Jira, Asana, Confluence, and ServiceNow - alongside a background in full-stack development - allows me to collaborate effectively with engineering and product teams while keeping delivery goals, timelines, and business outcomes front and center."
const background =
  "With a foundation in Cognitive Science and Human-Computer Interaction, and an MBA in Business Analytics in progress, I approach project management with a user-first, data-informed mindset. I'm driven by a desire to build processes and tools that don't just function - but genuinely improve how people work."
const freeTime =
  "Outside of work, you'll usually find me baking or cooking something new, playing pickleball, or spending time with friends and family."

const paragraphs = [careerObjective, experience, goals, background, freeTime]

const blurFade = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <>
      <header className="mb-12 text-center md:mb-16">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          About
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary md:text-lg">
          People, process, and delivery — with a technical lens.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind image */}
          <div
            className="absolute -inset-6 rounded-full bg-accent/10 blur-[60px]"
            aria-hidden
          />
          <div className="relative rounded-3xl bg-gradient-accent p-[3px] shadow-card">
            <div className="overflow-hidden rounded-[22px] bg-bg-secondary">
              <img
                className="h-auto w-full object-top"
                src={Image}
                alt="Zinal Desai"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 font-body text-text-secondary">
          <motion.h2
            className="text-xl font-semibold text-text-primary md:text-2xl"
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            Hi there! I&apos;m {firstName}, a {jobTitle} based in {jobLocation}.
          </motion.h2>
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={blurFade}
              initial="hidden"
              animate="show"
              className="leading-relaxed md:text-lg"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </>
  )
}

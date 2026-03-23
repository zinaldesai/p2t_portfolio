import { motion } from "framer-motion"

const education = [
  {
    date: "Jan 2026 - May 2027",
    title: "MBA in Business Analytics",
    company: "Texas A&M - Corpus Christi",
  },
  {
    date: "Sept 2025 - Dec 2025",
    title: "RiseUp with ServiceNow - Apprenticeship",
    company: "ServiceNow",
    details: "Agile project delivery and workflow implementation",
  },
  {
    date: "Oct 2024 - Apr 2025",
    title: "Path2Tech: Full Stack Developer Program",
    company: "NPower",
    details: "Team-based app development using Agile planning and collaboration",
  },
  {
    date: "Aug 2018 - May 2022",
    title: "Bachelor\u2019s of Science in Cognitive Science",
    company: "University of Texas at Dallas",
    details: "Concentration in Psychology/Human-Computer Interactions",
  },
]

const certifications = [
  { date: "2025", title: "Flow Designer", company: "ServiceNow" },
  { date: "2025", title: "Workflow Specialist", company: "Asana" },
  { date: "2025", title: "Responsive Web Design", company: "freeCodeCamp" },
]

export default function Education() {
  return (
    <>
      <header className="mb-14 text-center md:mb-16">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Education &amp; Training
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary md:text-lg">
          Degrees, programs, and certifications that shape how I deliver.
        </p>
      </header>

      <section aria-labelledby="edu-heading" className="mb-20">
        <h2 id="edu-heading" className="sr-only">
          Education timeline
        </h2>
        <div className="relative">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ul className="space-y-10">
            {education.map((edu, index) => (
              <motion.li
                key={edu.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative flex flex-col gap-4 pl-10 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:pl-0"
              >
                {/* Pulsing timeline dot */}
                <span
                  className="absolute left-0 top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-bg-primary shadow-[0_0_0_4px_var(--color-bg-primary)] animate-pulse-glow md:left-1/2 md:-translate-x-1/2"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <div className="md:text-right">
                  <span className="inline-block rounded-full bg-gradient-accent px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                    {edu.date}
                  </span>
                </div>

                <div className="hidden md:block" aria-hidden />

                <div className="rounded-2xl border border-border bg-bg-card/90 p-5 shadow-card backdrop-blur-md md:p-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">
                    {edu.title}
                  </h3>
                  <p className="mt-1 font-medium text-accent">{edu.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {edu.details}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cert-heading">
        <h2
          id="cert-heading"
          className="mb-8 text-center font-heading text-3xl font-bold text-text-primary md:text-4xl"
        >
          Certifications
        </h2>
        <p className="mb-10 text-center text-text-secondary">
          Credentials that validate platform and delivery skills.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
          {certifications.map((cert, i) => (
            <motion.li
              key={`${cert.title}-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="shimmer-border rounded-full border border-border bg-bg-card/80 px-5 py-3 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
            >
              <span className="block text-xs font-semibold text-accent">
                {cert.date}
              </span>
              <span className="block font-heading text-sm font-semibold text-text-primary">
                {cert.title}
              </span>
              <span className="block text-xs text-text-muted">{cert.company}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  )
}

import { FaLinkedinIn } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { motion } from "framer-motion"
import TypewriterEffect from "../components/Typewriter"

const fullName = "Zinal Desai"
const personalQuote =
  '"Whether you think you can or think you can\'t, either way you\'re right." \u2014 Henry Ford'

const RESUME_URL =
  "https://drive.google.com/file/d/1xJbom8gRsKgCb-3SwmjAEwX4smHXuByK/view?usp=drive_link"

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer")
}

const tags = ["Project Manager", "ServiceNow", "Agile", "SDLC"]

const social = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/zinaldesai/", external: true },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/zinaldesai", external: true },
  { label: "Email", icon: IoIosMail, href: "mailto:desaizinal15@gmail.com", external: false },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-1 flex-col">
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-[15%] h-[min(480px,50vh)] w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[18%] left-[8%] h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[12%] top-[40%] h-40 w-40 rounded-full bg-gradient-accent opacity-15 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="relative z-[1] flex flex-1 flex-col justify-center px-4 pb-12 pt-8 sm:px-8 md:px-12 lg:px-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Pill tag badges */}
          <motion.div variants={item} className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted"
              >
                | {tag} |
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {fullName}
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 w-full max-w-2xl">
            <TypewriterEffect />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base text-text-secondary md:text-lg"
          >
            Thanks for stopping by — enjoy exploring!
          </motion.p>

          {/* Social icons */}
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            aria-label="Social links"
          >
            {social.map(({ label, icon: Icon, href, external }) => {
              const cls =
                "group flex h-13 w-13 items-center justify-center rounded-2xl border border-border bg-bg-card/80 text-text-primary shadow-card backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent/40 hover:shadow-glow hover:animate-pulse-glow"
              return (
                <li key={label}>
                  {external ? (
                    <button
                      type="button"
                      onClick={() => openInNewTab(href)}
                      className={cls}
                      aria-label={`Open ${label} in a new tab`}
                    >
                      <Icon size={24} className="transition-transform group-hover:scale-110" aria-hidden />
                    </button>
                  ) : (
                    <a href={href} className={cls} aria-label="Send email to Zinal Desai">
                      <Icon size={24} className="transition-transform group-hover:scale-110" aria-hidden />
                    </a>
                  )}
                </li>
              )
            })}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openInNewTab(RESUME_URL)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:opacity-95"
            >
              View Resume
            </button>
            <a
              href="mailto:desaizinal15@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-border bg-bg-card/60 px-8 py-3 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <footer className="relative z-[1] border-t border-border px-4 py-8 sm:px-8">
        <p className="mx-auto max-w-3xl text-center font-body text-sm italic leading-relaxed text-text-muted md:text-base">
          {personalQuote}
        </p>
      </footer>
    </div>
  )
}

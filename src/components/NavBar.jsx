import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import Toggle from "../Toggle"

const sidebarVariants = {
  open: (h) => ({
    height: h,
    opacity: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
}

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
]

const RESUME_URL =
  "https://drive.google.com/file/d/1QvU3QImxi11R5Mg0PIvox1BcIOW130ag/view?usp=sharing"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [toggled, setToggled] = useState(() => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("theme") === "dark"
  })

  const menuRef = useRef(null)
  const [menuHeight, setMenuHeight] = useState(0)

  useEffect(() => {
    if (menuRef.current) {
      const id = requestAnimationFrame(() => {
        setMenuHeight(menuRef.current.scrollHeight)
      })
      return () => cancelAnimationFrame(id)
    }
  }, [open])

  useLayoutEffect(() => {
    document.body.classList.toggle("dark-mode", toggled)
    localStorage.setItem("theme", toggled ? "dark" : "light")
  }, [toggled])

  const handleLinkClick = () => setOpen(false)

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4">
      <div className="w-full max-w-4xl">
        {/* Pill nav */}
        <nav
          className="flex h-14 items-center justify-between gap-2 rounded-full border border-border bg-bg-secondary/75 px-2 shadow-card backdrop-blur-xl transition-all duration-300 sm:px-4"
          aria-label="Primary"
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex-shrink-0 pl-3 font-heading text-lg font-bold tracking-tight sm:text-xl"
            onClick={handleLinkClick}
          >
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              portfolio
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200"
              >
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "relative z-[1] text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute inset-0 -z-[1] rounded-full bg-bg-card/80"
                        aria-hidden
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Resume + Toggle + Mobile hamburger */}
          <div className="flex items-center gap-2 pr-1">
            <button
              type="button"
              onClick={() => openInNewTab(RESUME_URL)}
              className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary lg:block"
            >
              Resume
            </button>

            <div className="theme-toggle">
              <Toggle
                toggled={toggled}
                onClick={() => setToggled((s) => !s)}
                ariaLabel="Toggle dark mode"
              />
            </div>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-bg-card lg:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <IoClose size={20} /> : <GiHamburgerMenu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              custom={menuHeight}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="mt-2 overflow-hidden rounded-2xl border border-border bg-bg-secondary/95 shadow-card backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-3 pb-4 pt-2">
                {navLinks.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-bg-card/80 text-accent"
                          : "text-text-primary hover:bg-bg-card/60"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    openInNewTab(RESUME_URL)
                    handleLinkClick()
                  }}
                  className="rounded-xl px-4 py-3 text-left text-base font-medium text-text-primary transition-colors hover:bg-bg-card/60"
                >
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

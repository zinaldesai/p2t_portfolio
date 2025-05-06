import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Add Framer Motion
import Toggle from '../Toggle'

const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  }

  const handleClick = () => {
    setToggled((s) => !s);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    const mode = toggled ? "dark" : "light";
    document.body.classList.toggle("dark-mode", toggled);
    localStorage.setItem("theme", mode);
  }, [toggled]); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navigation px-4 py-2">
      <section>
        <h1 className="text-3xl font-bold font-roca">portfolio</h1>
      </section>

      <section className="lg-links flex">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <a onClick={() => openInNewTab("https://drive.google.com/file/d/172Avu6C_zNcbjJHD1jwqUkDvIClfBOYq/view?usp=drive_link")} download="Z.Desai-Resume.pdf">Resume</a>
        <div className="theme-toggle">
          <Toggle toggled={toggled} onClick={handleClick}/>
        </div>
      </section>

      <section className="sm-active">
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu size={25} className="cursor-pointer text-whitesmoke" />
        </div>
      </section>

      {/* ✅ AnimatePresence & motion.div for animation */}
      <AnimatePresence>
        {open && (
          <motion.div
          className="sm-links"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-whitesmoke"
          >
              <IoMdClose size={25} />
            </button>
            <section className="links flex flex-col items-center gap-4">
              <div className={`sm-links ${open ? "active" : ""}`}>
              <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
              <NavLink to="/experience" onClick={handleLinkClick}>Experience</NavLink>
              <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
              <a onClick={() => openInNewTab("https://drive.google.com/file/d/172Avu6C_zNcbjJHD1jwqUkDvIClfBOYq/view?usp=drive_link")} download="Z.Desai-Resume.pdf">Resume</a>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar;

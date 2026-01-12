import { useRef, useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from '../Toggle'
import Icon from '../assets/zd.png'

const sidebarVariants = {
  open: (customHeight) => ({
    height: customHeight,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);

  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setTimeout(() => {
        setMenuHeight(menuRef.current.scrollHeight);
      }, 0);
    }
  }, [open]);

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
      <NavLink to="/"
        className={({ isActive }) => "logo-link" + (isActive ? " not-active" : "")}>
        <h1 className="text-3xl font-bold font-roca cursor-pointer">portfolio</h1>
      </NavLink>
      </section>

      <section className="lg-links flex">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink>
        {/* <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink> */}
        <a onClick={() => openInNewTab("https://drive.google.com/file/d/1NmYyejrmvgePid7KZrOrtjqxtdVTkSHO/view?usp=drive_link")} download="Z.Desai-Resume.pdf">Resume</a>
        <div className="theme-toggle ml-2">
          <Toggle toggled={toggled} onClick={handleClick}/>
        </div>
      </section>

      <section className="sm-active">
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu size={25} className="cursor-pointer text-whitesmoke" />
        </div>
      </section>

      <AnimatePresence>
  {open && (
    <motion.div
    className="sm-links"
    ref={menuRef}
    custom={menuHeight}
    initial="closed"
    animate="open"
    exit="closed"
    variants={sidebarVariants}
    style={{ overflow: "hidden" }}
  >
      <div>
            <section className="links flex flex-col items-center gap-2">
              <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
              <NavLink to="/skills" onClick={handleLinkClick}>Skills</NavLink>
              <NavLink to="/education" onClick={handleLinkClick}>Education</NavLink>
              <NavLink to="/experience" onClick={handleLinkClick}>Experience</NavLink>
              {/* <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>      */}
              <a onClick={() => openInNewTab("https://drive.google.com/file/d/1NmYyejrmvgePid7KZrOrtjqxtdVTkSHO/view?usp=drive_link")} download="Z.Desai-Resume.pdf">Resume</a>
              <div className="theme-toggle">
                <Toggle toggled={toggled} onClick={handleClick}/>
              </div>
            </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar;

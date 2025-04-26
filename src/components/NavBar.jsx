import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Toggle from '../Toggle'

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const [toggled, setToggled] = useState(false);

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
        <button 
        type="button"
        onClick={() => setOpen(true)}
        className="border border-black border-2 p-2 rounded bg-white"
        >
          <GiHamburgerMenu size={25} color="black"/>
        </button>
      </section>
      <motion.aside 
      className="sm-active sm-links"
      variants={sidebarVariants}
      initial="closed"
      animate={open ? 'open' : 'closed'}
      >
        <section className="flex flex-row items-center justify-between border-b-2 border-black">
          <h2 className="text-2xl font-semibold mb-2">Navigation</h2>
          <button 
          type="button" 
          onClick={() => setOpen(false)}
          className="border border-black border-2 p-1 rounded mb-2 text-red-500"
          >
            <IoMdClose size={25} />
          </button>
        </section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/about">About</NavLink>
        <a onClick={() => openInNewTab("https://drive.google.com/file/d/172Avu6C_zNcbjJHD1jwqUkDvIClfBOYq/view?usp=drive_link")} download="Z.Desai-Resume.pdf">Resume</a>
      </motion.aside>
    </nav>
  )
}

export default NavBar;
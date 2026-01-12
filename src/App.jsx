import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Education from "./pages/Education"
import Skills from "./pages/Skills"

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container");
    if (navigationContainer) {
      navigationContainer.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App

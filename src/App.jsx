import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import NavBar from "./components/NavBar"
import PageWrapper from "./components/PageWrapper"
import AiChatWidget from "./components/AiChatWidget"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Education from "./pages/Education"
import Skills from "./pages/Skills"

function App() {
  const location = useLocation()

  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container")
    if (navigationContainer) {
      navigationContainer.scrollTop = 0
    }
  }, [location.pathname])

  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper fullBleed>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWrapper>
                <Skills />
              </PageWrapper>
            }
          />
          <Route
            path="/education"
            element={
              <PageWrapper>
                <Education />
              </PageWrapper>
            }
          />
          <Route
            path="/experience"
            element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper className="flex min-h-[70vh] flex-col justify-center">
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <AiChatWidget />
    </section>
  )
}

export default App

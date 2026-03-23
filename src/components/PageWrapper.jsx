import { motion } from "framer-motion"
import GridBackground from "./GridBackground"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export default function PageWrapper({
  children,
  className = "",
  fullBleed = false,
}) {
  return (
    <motion.main
      role="main"
      className={
        fullBleed
          ? `relative flex-1 w-full flex flex-col ${className}`
          : `relative flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20 ${className}`
      }
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <GridBackground />
      <div className="relative z-[1] flex flex-1 flex-col">
        {children}
      </div>
    </motion.main>
  )
}

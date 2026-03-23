import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p
        className="font-heading text-8xl font-bold leading-none tracking-tight md:text-9xl"
        aria-hidden
      >
        <span className="bg-gradient-accent bg-clip-text text-transparent">404</span>
      </p>
      <h1 className="mt-6 font-heading text-2xl font-semibold text-text-primary md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-accent px-8 py-3 font-medium text-white shadow-lg shadow-accent/25 transition-transform duration-300 hover:scale-[1.02] hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to home
      </Link>
    </motion.div>
  )
}

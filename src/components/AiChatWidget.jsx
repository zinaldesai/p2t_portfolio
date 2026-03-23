import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiSparkles } from "react-icons/hi2"
import { IoClose, IoSend } from "react-icons/io5"
import { getResponse } from "../data/knowledgeBase"

const STARTERS = [
  "What does Zinal do?",
  "What tools does she use?",
  "Tell me about her experience",
  "How can I contact her?",
]

const TYPING_DELAY = 600

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2 w-2 rounded-full bg-accent/60 animate-bounce-dot"
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  )
}

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey! I'm Zinal's AI assistant. Ask me anything about her experience, skills, or education.",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  const sendMessage = (text) => {
    const trimmed = (text || input).trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { role: "user", text: trimmed }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(trimmed)
      setMessages((prev) => [...prev, { role: "bot", text: response }])
      setIsTyping(false)
    }, TYPING_DELAY)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating action button */}
      <button
        type="button"
        onClick={() => setIsOpen((s) => !s)}
        className="fixed bottom-6 right-6 z-[1100] flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg-card/90 text-accent shadow-card backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-glow animate-fab-pulse sm:bottom-8 sm:right-8"
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <IoClose size={24} />
        ) : (
          <HiSparkles size={24} />
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[1100] flex w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary/95 shadow-card backdrop-blur-xl sm:bottom-28 sm:right-8"
            style={{ height: "min(520px, calc(100vh - 10rem))" }}
            role="dialog"
            aria-label="AI Chat Assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-bg-card/60 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent text-white">
                <HiSparkles size={16} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text-primary">
                  Ask about Zinal
                </p>
                <p className="text-xs text-text-muted">AI-powered assistant</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-bg-card hover:text-text-primary"
                aria-label="Close chat"
              >
                <IoClose size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-accent text-white"
                        : "border border-border bg-bg-card/80 text-text-primary"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-border bg-bg-card/80">
                    <TypingIndicator />
                  </div>
                </div>
              )}
            </div>

            {/* Starter chips */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 border-t border-border/50 px-4 py-3">
                {STARTERS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-border bg-bg-card/60 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-border bg-bg-card/40 px-3 py-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                className="flex-1 rounded-xl border border-border bg-bg-primary/60 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white transition-all duration-200 hover:opacity-90 disabled:opacity-40"
                aria-label="Send message"
              >
                <IoSend size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

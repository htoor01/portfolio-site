'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (isLight) {
      html.classList.add('light')
    } else {
      html.classList.remove('light')
    }
  }, [isLight])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + theme toggle */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium text-foreground">
            <span className="text-cyan">~/</span>haaris
          </span>
          <button
            onClick={() => setIsLight((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono transition-colors ${
              isLight
                ? 'border-cyan/60 text-cyan bg-cyan/10 hover:bg-cyan/20'
                : 'border-border text-muted-foreground hover:border-cyan/40 hover:text-foreground'
            }`}
            aria-label="Toggle light mode"
          >
            {isLight ? <Moon size={12} /> : <Sun size={12} />}
            {isLight ? 'dark' : 'light'}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

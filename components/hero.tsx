'use client'

import { useEffect, useState } from 'react'
// useState is still used inside TypingEffect
import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import Image from 'next/image'


const TYPING_STRINGS = [
  'Backend & Infra',
  'AI integration',
  'Cloud deployment',
  'Developer tooling',
  'Distributed systems',
]

function TypingEffect() {
  const [displayText, setDisplayText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(current.slice(0, charIndex + 1))
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1400)
          } else {
            setCharIndex((c) => c + 1)
          }
        } else {
          setDisplayText(current.slice(0, charIndex - 1))
          if (charIndex - 1 === 0) {
            setDeleting(false)
            setCharIndex(0)
            setStringIndex((s) => (s + 1) % TYPING_STRINGS.length)
          } else {
            setCharIndex((c) => c - 1)
          }
        }
      },
      deleting ? 40 : 70
    )
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, stringIndex])

  return (
    <span className="font-mono text-cyan">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg pt-16">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.72 0.18 200 / 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-cyan">Backend</span>
          <span className="text-foreground"> &amp; </span>
          <span className="text-cyan">Infrastructure</span>
          <br />
          <span className="text-foreground">Engineer</span>
        </motion.h1>

        {/* Terminal whoami card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left mb-4 w-full max-w-2xl px-5 py-4 rounded-lg border border-border bg-card font-mono text-xs sm:text-sm leading-relaxed"
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex items-start gap-6">
            {/* Left: text content */}
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <span className="text-muted-foreground">$ </span>
                <span className="text-cyan">whoami</span>
              </div>
              <div className="mb-3">
                <span className="text-muted-foreground">→ </span>
                <span className="text-foreground">open to SWE Backend and Infra roles for Summer 2027.</span>
              </div>
            </div>
            {/* Right: profile photo */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-cyan/30 ring-2 ring-border">
                <Image
                  src="/haaris-toor.jpg"
                  alt="Haaris Toor"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typing subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground mb-3 leading-relaxed"
        >
          <TypingEffect />
        </motion.p>

        {/* CTA buttons — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center mb-12"
        >
          <a
            href="https://blobs.vusercontent.net/blob/Haaris%20Intern%202026-cmpI3Fpld5xYh9KuztaxHkoEKonLdt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:border-cyan/50 hover:text-cyan transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => handleScroll('#about')}
          className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  )
}

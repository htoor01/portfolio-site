'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden grid-bg pt-28"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.72 0.18 200 / 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        {/* Terminal whoami card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-left w-full px-5 py-4 rounded-lg border border-border bg-card font-mono text-xs sm:text-sm leading-relaxed"
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
              <div className="border-t border-border pt-3 text-foreground leading-relaxed">
                Site currently down so QLC students can focus.
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
      </div>
    </section>
  )
}

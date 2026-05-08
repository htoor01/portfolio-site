'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            04 / Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance">
            Let&apos;s build scalable systems.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-md mx-auto">
            Whether you&apos;re building backend infrastructure, exploring AI systems, or looking
            for a collaborative engineer, I&apos;d love to talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:haaristoor1@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span className="font-mono">haaristoor1@gmail.com</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com/in/haaristoor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group"
            >
              <Linkedin size={16} className="flex-shrink-0" />
              <span className="font-mono">linkedin.com/in/haaristoor</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/htoor01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group"
            >
              <Github size={16} className="flex-shrink-0" />
              <span className="font-mono">github.com/htoor01</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight, Send } from 'lucide-react'

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
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const subject = String(form.get('subject') || '')
    const message = String(form.get('message') || '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}\n\nTag: from portfolio site`
    window.location.href = `mailto:haaristoor1@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio site message')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest text-center">
            04 / Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center text-balance">
            Want to reach out?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground leading-relaxed mb-10 text-center">
            I&apos;m always open to chat.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:haaristoor1@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group">
              <Mail size={16} />
              <span className="font-mono">haaristoor1@gmail.com</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://linkedin.com/in/haaristoor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group">
              <Linkedin size={16} />
              <span className="font-mono">LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://github.com/htoor01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan transition-colors group">
              <Github size={16} />
              <span className="font-mono">GitHub</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 sm:p-8 rounded-lg border border-border bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-2">
                <span className="text-xs font-mono text-muted-foreground">Name</span>
                <input name="name" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-cyan" />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-mono text-muted-foreground">Email</span>
                <input name="email" type="email" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-cyan" />
              </label>
            </div>
            <label className="block space-y-2 mt-4">
              <span className="text-xs font-mono text-muted-foreground">Subject</span>
              <input name="subject" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-cyan" />
            </label>
            <label className="block space-y-2 mt-4">
              <span className="text-xs font-mono text-muted-foreground">Message</span>
              <textarea name="message" required rows={6} className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-cyan" />
            </label>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity">
              <Send size={14} />
              {sent ? 'Opening email client' : 'Send message'}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

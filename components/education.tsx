'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const activities = [
  { label: 'Mobile App Development (RUMAD)', href: 'https://rumad.club' },
  { label: 'Muslim Tech Collaborative', href: 'https://mtcrutgers.com' },
]

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn><p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest text-center">01 / Education</p></FadeIn>
        <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance text-center">What I&apos;ve learned.</h2></FadeIn>
        <FadeIn delay={0.2}>
          <div className="p-6 rounded-lg border border-border bg-card flex flex-col items-stretch justify-between gap-8 sm:flex-row sm:items-center">
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground">Rutgers University, New Brunswick</h3>
              <p className="text-sm text-muted-foreground mt-0.5">B.S. in Computer Science · Minor in Economics</p>
              <div className="mt-6">
                <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-2">Activities</p>
                <div className="flex flex-wrap gap-2">
                  {activities.map((activity) => (
                    <a key={activity.label} href={activity.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-foreground hover:text-cyan hover:border-cyan/40 transition-colors">
                      <ExternalLink size={12} />{activity.label}
                    </a>
                  ))}
                  <details className="group w-full">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded border border-border px-3 py-1 font-mono text-xs text-foreground transition-colors hover:border-cyan/40 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50">
                      Blueprint Backend Fellow
                      <ChevronDown size={12} aria-hidden="true" className="transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 max-w-2xl rounded border border-border bg-background p-4 text-xs leading-relaxed text-muted-foreground">
                      <p><span className="font-medium text-foreground">Curriculum:</span> Python, SQL, FastAPI, Postman, Git, HTTP, and Client-Server models.</p>
                      <p className="mt-2"><span className="font-medium text-foreground">Capstone:</span> Built a CRUD project (a Chatroom) with a team of 5.</p>
                    </div>
                  </details>
                  <details className="group w-full">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded border border-border px-3 py-1 font-mono text-xs text-foreground transition-colors hover:border-cyan/40 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50">
                      Creation of Games Society (COGS)
                      <ChevronDown size={12} aria-hidden="true" className="transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 max-w-2xl rounded border border-border bg-background p-4 text-xs leading-relaxed text-muted-foreground">
                      <p><span className="font-medium text-foreground">Mini-Game:</span> Built a game with local multiplayer and a scoreboard feature for upload to the COGS official page.</p>
                      <p className="mt-2"><span className="font-medium text-foreground">GitHub:</span> The repository is private for now; a public link is coming soon.</p>
                      <p className="mt-2"><a href="https://cogs.club/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-cyan"><ExternalLink size={12} aria-hidden="true" />COGS official page</a></p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden border-2 border-cyan/30 ring-2 ring-border bg-white flex-shrink-0 flex items-center justify-center self-center sm:self-auto">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-24%20at%206.38.28%E2%80%AFPM-P9GXNhYcGXOcZbgND97KtOXbAs5S3I.png" alt="Rutgers University logo" className="h-full w-full object-contain" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

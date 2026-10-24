'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const activities = [
  { label: 'Blueprint Backend Fellow', href: 'https://rutgersblueprint.com' },
  { label: 'Mobile App Development (RUMAD)', href: 'https://rumad.club' },
  { label: 'Verizon Smart Campus Competition', href: 'https://soe.rutgers.edu/smart-campus' },
  { label: 'Creation of Games Society (COGS)', href: 'https://cogs.club/home' },
  { label: 'Muslim Tech Collaborative', href: 'https://mtcrutgers.com' },
]

const coursework = ['Data Structures and Algorithms', 'Discrete Mathematics', 'Computer Architecture', 'Data Science', 'Systems Programming', 'Internet Technology', 'Machine Learning Principles', 'Economic Data Analytics', 'Money, Banking, and the Financial System']

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn><p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">03 / Education</p></FadeIn>
        <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">What I&apos;ve learned.</h2></FadeIn>
        <FadeIn delay={0.2}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-base font-semibold text-foreground">Rutgers University, New Brunswick</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Expected Jan 2028 · B.S. in Computer Science · Minor in Economics</p>
            <div className="mt-6">
              <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-2">Activities</p>
              <div className="flex flex-wrap gap-2">
                {activities.map((activity) => <a key={activity.label} href={activity.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-foreground hover:text-cyan hover:border-cyan/40 transition-colors"><ExternalLink size={12} />{activity.label}</a>)}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1.5">{coursework.map((course) => <span key={course} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground">{course}</span>)}</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

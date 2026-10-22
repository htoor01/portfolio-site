'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Experience = {
  role: string
  company: string
  period: string
  location: string
  type: string
  description: string
  stack: string[]
  links: { label: string; href: string }[]
}

const EXPERIENCES: Experience[] = [
  {
    role: 'Founding Engineer',
    company: 'Lotari',
    period: '11/2025 – Present',
    location: 'Remote',
    type: 'Startup',
    description: 'Built and maintained backend services for three legal-tech products using Python and REST APIs, automated testing and deployment with GitHub Actions and AWS, owned a product end-to-end from PRD to deployment, and reduced monthly infrastructure costs by 10%.',
    stack: ['Python', 'REST APIs', 'GitHub Actions', 'AWS', 'Authentication', 'AI Document Processing'],
    links: [
      { label: 'Lotari', href: 'https://www.lotari.ai' },
    ],
  },
  {
    role: 'Open Source Developer',
    company: 'Public Invention',
    period: '09/2026 – Present',
    location: 'Remote',
    type: 'Open Source',
    description: 'Developing the Python and Flask backend for Librecorder, an open-source diagnostic platform built with the Kea Framework, collaborating with the machine learning team to integrate diagnostic models and meeting regularly with project mentors for technical direction.',
    stack: ['Python', 'Flask', 'Kea Framework', 'JavaScript', 'Machine Learning'],
    links: [],
  },
  {
    role: 'Lead Teaching Assistant',
    company: 'Quakerbridge Learning Center',
    period: '05/2026 – Aug 2026',
    location: 'Mercerville, NJ',
    type: 'Education',
    description: 'Taught core Java, Object-Oriented Programming (OOP), and basic Data Structures and Algorithms (DSA) to a summer cohort of 45+ students, leading to a 90%+ pass rate on the WWP Computer Programming district exam.',
    stack: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'AP CS A'],
    links: [
      {
        label: 'YouTube Lectures',
        href: 'https://youtube.com/playlist?list=PLgCHRLIJOoVP-1b6pCCB1T3BPJgvVKglc&si=W5ZZiiYg2XSJhXRZ',
      },
    ],
  },
  {
    role: 'AI Fellow',
    company: 'Handshake AI',
    period: '12/2025 – 08/2026',
    location: 'Remote',
    type: 'Fellowship',
    description: 'Contributed primarily to Natural Language Human Feedback (NLHF) workflows by evaluating model responses, identifying quality gaps, and producing structured feedback for AI system improvement under strict quality and confidentiality requirements.',
    stack: ['Multimodal AI', 'Prompt Engineering', 'Computer Vision', 'Data Labeling', 'Evaluation Pipelines'],
    links: [],
  },
  {
    role: 'Laboratory Technician',
    company: 'SGS EHS',
    period: '10/2025 – 06/2026',
    location: 'Dayton, NJ',
    type: 'Lab',
    description: 'Prepared sample batches for chemical analysis through preservation, spiking, reagent addition, digestion, and filtration, then documented sample preparation using Microsoft Excel scripts, LIMS (Laboratory Information Management Systems), and Clinisys software.',
    stack: ['LIMS', 'Clinisys', 'Microsoft Excel', 'Chemical Analysis', 'Lab Documentation'],
    links: [],
  },
]

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

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            02 / Experience
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-balance">
            Work I&apos;ve done.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={exp.role + exp.company} delay={0.1 + i * 0.1}>
                <div className="md:pl-10 relative group">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[calc(10px-1px)] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-cyan transition-colors" />

                  <div className="p-6 rounded-lg border border-border bg-card hover:border-cyan/25 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-cyan text-sm font-medium">{exp.company}</span>
                          <span className="text-muted-foreground text-xs">·</span>
                          <span className="text-muted-foreground text-xs">{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                        <span className="px-2 py-0.5 rounded-full border border-border text-xs font-mono text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-foreground hover:text-cyan hover:border-cyan/40 transition-colors"
                          >
                            <ExternalLink size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>

    <section id="education" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            03 / Education
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What I&apos;ve learned.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Rutgers University, New Brunswick
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Bachelor&apos;s in Computer Science · Minor in Economics
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6">
              <span className="w-full text-xs font-mono text-cyan uppercase tracking-wider mb-1">
                Activities
              </span>
                {[
                  { label: 'Blueprint Backend Fellow', href: 'https://rutgersblueprint.com' },
                  { label: 'Mobile App Development (RUMAD)', href: 'https://rumad.club' },
                  { label: 'Verizon Smart Campus Competition', href: 'https://soe.rutgers.edu/smart-campus' },
                  { label: 'Creation of Games Society (COGS)', href: 'https://cogs.club/home' },
                  { label: 'Muslim Tech Collaborative', href: 'https://mtcrutgers.com' },
                ].map((club) => (
                  <a key={club.label} href={club.href} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground hover:text-cyan transition-colors">
                    {club.label}
                  </a>
                ))}
              <span className="w-full text-xs font-mono text-cyan uppercase tracking-wider mt-3 mb-1">
                Relevant Coursework
              </span>
              {['Data Structures and Algorithms', 'Discrete Mathematics', 'Computer Architecture', 'Data Science', 'Systems Programming', 'Internet Technology', 'Machine Learning Principles', 'Economic Data Analytics', 'Money, Banking, and the Financial System'].map((course) => (
                <span key={course} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
    </>
  )
}

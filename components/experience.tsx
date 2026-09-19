'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const EXPERIENCES = [
  {
    role: 'Founding Engineer',
    company: 'Lotari',
    period: '11/2025 – Present',
    location: 'Remote',
    type: 'Startup',
    bullets: [
      'Built and maintained backend services for 3 legal-tech products using Python and REST APIs, implementing application logic and integrations to support customer-facing workflows and demos to major clients.',
      'Automated software testing and deployment with GitHub Actions and AWS, establishing repeatable build and deployment workflows that reduced manual steps required to ship backend or product changes.',
      'Built and owned a product end-to-end from PRD to AWS deployment, implementing the frontend, backend workflows, authentication, and AI-powered document processing to automate legal matter intake.',
      'Reduced monthly infrastructure costs by 10% by identifying and decommissioning an underutilized AWS service, eliminating unnecessary cloud resources while maintaining product-suite functionality.',
    ],
    stack: ['Python', 'REST APIs', 'GitHub Actions', 'AWS', 'Authentication', 'AI Document Processing'],
    links: [
      { label: 'Lotari', href: 'https://www.lotari.ai' },
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Quakerbridge Learning Center',
    period: '05/2026 – Aug 2026',
    location: 'Mercerville, NJ',
    type: 'Education',
    bullets: [
      'Taught core Java, Object-Oriented Programming (OOP), and basic Data Structures and Algorithms (DSA) to a summer cohort of 45+ students, leading to a 90%+ pass rate on the WWP Computer Programming district exam.',
    ],
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
    period: '12/2025 – Present',
    location: 'Remote',
    type: 'Fellowship',
    bullets: [
      'Contributed to Natural Language Human Feedback (NLHF) workflows by evaluating model responses, identifying quality gaps, and producing structured feedback for AI system improvement.',
      'Worked within strict quality, time, and confidentiality requirements to deliver consistent evaluations aligned with evolving model standards.',
    ],
    stack: ['Multimodal AI', 'Prompt Engineering', 'Computer Vision', 'Data Labeling', 'Evaluation Pipelines'],
  },
  {
    role: 'Laboratory Technician',
    company: 'SGS EHS',
    period: '10/2025 – 06/2026',
    location: 'Dayton, NJ',
    type: 'Lab',
    bullets: [
      'Prepared sample batches for chemical analysis through preservation, spiking, reagent addition, digestion, and filtration, following strict laboratory protocols.',
      'Documented sample preparation and processing using Microsoft Excel scripts, LIMS (Laboratory Information Management Systems), and Clinisys software.',
    ],
    stack: ['LIMS', 'Clinisys', 'Microsoft Excel', 'Chemical Analysis', 'Lab Documentation'],
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
    <section id="experience" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            02 / Experience
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-balance">
            Things I&apos;ve done.
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
                          {exp.company === 'Lotari' ? (
                            <a
                              href="https://www.lotari.ai"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan text-sm font-medium hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-cyan text-sm font-medium">{exp.company}</span>
                          )}
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

                    {'links' in exp && exp.links && exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors"
                          >
                            <ExternalLink size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-cyan mt-1 flex-shrink-0">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

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

        {/* Education callout */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="p-6 rounded-lg border border-border bg-card flex flex-wrap gap-4 items-center justify-between">
            <div>
              <p className="text-xs font-mono text-cyan mb-1 uppercase tracking-wider">Education</p>
              <h3 className="text-base font-semibold text-foreground">
                Rutgers University, New Brunswick
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Bachelor&apos;s in Computer Science · Minor in Economics · May 2027
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { label: 'MTC Rutgers', href: 'https://mtc.rutgers.edu/' },
                  { label: 'IEEE', href: 'https://ieee.rutgers.edu/' },
                  { label: 'RUMAD', href: 'https://rumad.rutgers.edu/' },
                  { label: 'USACS', href: 'https://usacs.org/' },
                ].map((club) => (
                  <a
                    key={club.label}
                    href={club.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-cyan transition-colors"
                  >
                    {club.label}
                  </a>
                ))}
              </div>
            </div>
              <div className="flex flex-wrap gap-1.5 max-w-sm">
                <span className="w-full text-xs font-mono text-cyan uppercase tracking-wider mb-1">
                  Activities
                </span>
                {[
                  { label: 'MTC Rutgers', href: 'https://mtc.rutgers.edu/' },
                  { label: 'IEEE', href: 'https://ieee.rutgers.edu/' },
                  { label: 'RUMAD', href: 'https://rumad.rutgers.edu/' },
                  { label: 'USACS', href: 'https://usacs.org/' },
                ].map((club) => (
                  <a
                    key={club.label}
                    href={club.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground hover:text-cyan transition-colors"
                  >
                    {club.label}
                  </a>
                ))}
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

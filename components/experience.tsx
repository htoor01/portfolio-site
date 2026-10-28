'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
    role: 'Founding Software Engineer',
    company: 'Lotari',
    period: 'NOV 2025 – JUN 2026',
    location: 'Remote',
    type: 'Startup',
    description: 'Built and maintained backend services for three legal-tech products using Python and REST APIs, automated testing and deployment with GitHub Actions and AWS, owned a product end-to-end from PRD to deployment, and reduced monthly infrastructure costs by 10%.',
    stack: ['TypeScript', 'AWS Lambda', 'AWS S3', 'AWS IAM', 'Textract', 'CDK', 'GitHub Actions'],
    links: [
      { label: 'Lotari', href: 'https://www.lotari.ai' },
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Public Invention',
    period: 'OCT 2026 – Present',
    location: 'Remote',
    type: 'Internship',
    description: 'Blocked failing pushes with GitHub Actions CI running 30 pytest tests across 16 Flask routes and ML classifier schemas, reduced setup from 144 packages to five dependencies, and split a 478-line Flask monolith into six modules.',
    stack: ['Python', 'Flask', 'pytest', 'GitHub Actions', 'AWS', 'Git'],
    links: [
      { label: 'Public Invention', href: 'https://github.com/pubinv' },
    ],
  },
  {
    role: 'Backend Software Engineer Fellow',
    company: 'Rutgers Blueprint',
    period: 'SEP 2026 – DEC 2026',
    location: 'New Brunswick, NJ',
    type: 'Fellowship',
    description: 'Building Python and SQLite CRUD applications and socket-based client/server login systems as part of a five-person team.',
    stack: ['Python', 'SQLite', 'Git'],
    links: [],
  },
  {
    role: 'Software Engineer (previously Java Tutor)',
    company: 'Quakerbridge Learning Center',
    period: 'MAY 2026 – Present',
    location: 'Mercerville, NJ',
    type: 'Software Engineering',
    description: 'Automated a grading bottleneck identified while tutoring by building and maintaining a Spring Boot autograder used across three classes (about 90 students), cutting grading time from roughly 3–6 hours to 20–30 minutes.',
    stack: ['Java', 'Spring Boot', 'JUnit', 'Docker', 'GitHub Actions', 'Google Classroom API'],
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
    period: 'DEC 2025 – MAY 2026',
    location: 'Remote',
    type: 'Fellowship',
    description: 'Contributed primarily to Reinforcement Learning via Human Feedback (RLHF) workflows by evaluating model responses, identifying quality gaps, and producing structured feedback for AI system improvement under strict quality and confidentiality requirements.',
    stack: ['Multimodal AI', 'Prompt Engineering', 'Computer Vision', 'Data Labeling', 'Evaluation Pipelines'],
    links: [],
  },
  {
    role: 'Laboratory Technician',
    company: 'SGS EHS',
    period: 'OCT 2025 – JUN 2026',
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
  const [showAll, setShowAll] = useState(false)
  const orderedExperiences = [
    'Software Engineer Intern',
    'Founding Software Engineer',
    'AI Fellow',
    'Backend Software Engineer Fellow',
    'Software Engineer (previously Java Tutor)',
    'Laboratory Technician',
  ].map((role) => EXPERIENCES.find((experience) => experience.role === role)!).filter(Boolean)
  const visibleExperiences = showAll ? orderedExperiences : orderedExperiences.slice(0, 2)

  return (
    <>
      <section id="experience" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest text-center">
            02 / Experience
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-balance text-center">
            Work I&apos;ve done.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {visibleExperiences.map((exp, i) => (
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

        {EXPERIENCES.length > 2 && (
          <button type="button" onClick={() => setShowAll((current) => !current)} className="mt-8 mx-auto flex items-center gap-2 text-sm font-mono text-foreground hover:text-cyan transition-colors">
            {showAll ? 'Show less' : 'Show more'}
            <span aria-hidden="true" className={`transition-transform ${showAll ? 'rotate-180' : ''}`}>⌄</span>
          </button>
        )}
      </div>
    </section>


    </>
  )
}

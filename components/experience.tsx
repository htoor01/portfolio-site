'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Youtube } from 'lucide-react'

const EXPERIENCES = [
  {
    role: 'Founding Engineer',
    company: 'Lotari',
    period: '11/2025 – Present',
    location: 'Remote',
    type: 'Startup',
    bullets: [
      'Built a license-based authentication and authorization system using JWT, TypeScript, Express.js, and FastAPI, reducing account provisioning time by 90% and improving firm-level onboarding for B2B SaaS customers.',
      'Implemented stateless authorization middleware in Express.js with custom license validation logic, eliminating third-party auth dependencies and enabling horizontal scalability.',
      'Migrated backend to AWS serverless architecture via Lambda, API Gateway, and DynamoDB using CDK with Bedrock-assisted code conversion, enabling scalable production deployment and reducing infrastructure complexity.',
    ],
    stack: ['TypeScript', 'Express.js', 'FastAPI', 'JWT', 'AWS Lambda', 'DynamoDB', 'CDK', 'Bedrock'],
  },
  {
    role: 'Teaching Assistant',
    company: 'Quakerbridge Learning Center',
    period: '05/2026 – Aug 2026',
    location: 'Mercerville, NJ',
    type: 'Education',
    bullets: [
      'Teaching 50+ students Java, object-oriented programming, and data structures & algorithms fundamentals in a structured classroom setting.',
      'Preparing students for the AP Computer Science A "Option 2" exam, reinforcing core concepts through hands-on exercises and targeted review sessions.',
      'Designing curriculum materials and practice problems that bridge foundational theory with practical programming skills.',
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
      'Design and execute real-world, image-based prompt evaluations for multimodal AI systems, systematically identifying model accuracy gaps and usability issues.',
      'Operate within a structured evaluation pipeline under strict quality, time, and confidentiality constraints, delivering production-ready outputs aligned with evolving model standards.',
      'Contribute to large-scale, high-quality image dataset development to enhance computer vision model performance and support responsible AI deployment.',
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
      'Prepared sample batches for chemical analysis through preservation, spiking, reagent addition, digestion, and filtration following strict protocol.',
      'Documented laboratory processes and results using Microsoft Excel scripts alongside specialized LIMS (Laboratory Information Management Systems) and Clinisys software.',
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
            Where I&apos;ve built.
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
                    {'links' in exp && exp.links && exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors"
                          >
                            <Youtube size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
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
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Data Structures & Algorithms',
                'Systems Programming',
                'Computer Architecture',
                'Discrete Mathematics',
                'Linear Algebra',
                'Economic Data Analytics',
              ].map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

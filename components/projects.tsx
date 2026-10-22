'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'AutoTA',
    description:
      'Deterministic automated grader that ingests 200+ Google Classroom submissions through the REST API, runs JUnit tests, and generates initial grades while detecting missing assignments.',
    challenge:
      'Containerizing JUnit execution and building CI checks that keep grading safe, repeatable, and reliable across every commit.',
    stack: ['Python', 'Google Classroom API', 'JUnit', 'Docker', 'GitHub Actions', 'Codex'],
    period: '2026',
    github: 'https://github.com/htoor01/AutoTA',
    featured: true,
    highlight: '200+ submissions · Dockerized tests · Automated CI/CD',
  },
  {
    title: 'RU Afloat',
    description:
      'Flood safety platform for Rutgers that combines an 18-hour machine-learning river forecast, live sensors and camera checks, flood-aware walking routes, voice guidance, student reports, and coordinator dispatch tools.',
    challenge:
      'Grounding AI guidance in live app data while combining seven river gauges, rainfall, mapping, routing, accessibility features, and emergency response workflows into one reliable system.',
    stack: ['TypeScript', 'Vite', 'MapLibre GL', 'Node.js', 'Python', 'scikit-learn', 'Gemini', 'ElevenLabs', 'ESP32'],
    period: 'HackRU 2026',
    github: 'https://github.com/hassan1brahim/RUAfloat',
    devpost: 'https://devpost.com/software/ru-afloat',
    featured: true,
    highlight: '18-hour forecast · Flood-aware routing · Voice accessibility',
  },
  {
    title: 'DermAI',
    description:
      'AI-powered skin condition analysis app built at the MTC Hackathon. Users upload a photo to receive instant analysis across 8 condition classes, with confidence scores, severity ratings, personalized advice, and a DeepSeek-powered diagnosis chat interface.',
    challenge:
      'Significant class imbalance in the SCIN dataset required careful augmentation and stratified splits. Calibrating the AI chat to be medically responsible without being overly restrictive was a real balancing act.',
    stack: ['Python', 'Flask', 'PyTorch', 'ONNX', 'EfficientNet-B0', 'React', 'Vite', 'Tailwind', 'JWT', 'DeepSeek'],
    period: 'MTC Hackathon',
    github: 'https://github.com/hassan1brahim/MTC-Hackathon',
    devpost: 'https://devpost.com/software/dermai-fsxq17',
    featured: true,
    highlight: 'EfficientNet-B0 · 8 condition classes · Full end-to-end pipeline',
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

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            04 / Projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Projects I&apos;ve built.
          </h2>
        </FadeIn>
        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {PROJECTS.filter((p) => p.featured).map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative p-6 rounded-lg border border-border bg-card hover:border-cyan/30 transition-colors group flex flex-col h-full"
              >
                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: 'inset 0 0 30px oklch(0.72 0.18 200 / 0.05)' }}
                />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan px-2 py-0.5 rounded border border-cyan/20 bg-cyan/5">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {'devpost' in project && project.devpost && (
                      <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Devpost
                      </a>
                    )}
                    {'isPortfolio' in project && project.isPortfolio ? (
                      <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors"
                      >
                        To Top
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {'challenge' in project && project.challenge && (
                  <div className="p-3 rounded border border-border bg-secondary/50 mb-4">
                    <p className="text-xs font-mono text-muted-foreground mb-1">
                      <span className="text-cyan">challenge</span>
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan/80">
                    <span>›</span>
                    <span>{project.highlight}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Other projects */}
        {PROJECTS.some((p) => !p.featured) && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.filter((p) => !p.featured).map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-lg border border-border bg-card hover:border-cyan/25 transition-colors group flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  {project.title === 'This Portfolio' ? (
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors flex-shrink-0"
                    >
                      To Top
                    </button>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-cyan/40 transition-colors flex-shrink-0"
                    >
                      <Github size={11} />
                      GitHub
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>}

        {/* GitHub CTA */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <a
            href="https://github.com/htoor01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors font-mono"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

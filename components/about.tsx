'use client'

import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'JavaScript'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'Express.js', 'Node.js', 'Flask', 'REST APIs', 'JWT Auth'],
  },
  {
    label: 'Cloud / Infra',
    skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CDK', 'Docker', 'Vercel'],
  },
  {
    label: 'AI Systems',
    skills: ['AWS Bedrock', 'Prompt Eval', 'RAG', 'LLM Tooling', 'pandas / NumPy'],
  },
  {
    label: 'Databases',
    skills: ['DynamoDB', 'PostgreSQL', 'Redis', 'SQL', 'Matplotlib', 'Plotly'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Git', 'CI/CD'],
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

export default function About() {
  return (
    <section id="about" className="py-28 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            01 / About
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Building systems that scale.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  I&apos;m a Computer Science student at{' '}
                  <span className="text-foreground font-medium">Rutgers University</span>, with a
                  minor in Economics. I&apos;m focused on backend systems, cloud infrastructure, and
                  applied AI.
                </p>
                <p>
                  As a <span className="text-foreground font-medium">Founding Engineer at Lotari</span>,
                  I architected license-based auth systems, stateless middleware, and migrated
                  production workloads to AWS serverless, cutting provisioning time by 90%.
                </p>
                <p>
                  As an <span className="text-foreground font-medium">AI Fellow at Handshake AI</span>,
                  I evaluate multimodal AI systems at scale, build image datasets for computer
                  vision models, and contribute to responsible AI deployment pipelines.
                </p>
                <p>
                  I build for{' '}
                  <span className="text-foreground font-medium">
                    performance, reliability, and horizontal scale
                  </span>
                  . I care deeply about clean abstractions, minimal dependencies, and systems that
                  hold up under pressure.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {['Rutgers University', 'CS + Economics', 'May 2027'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((group, i) => (
              <FadeIn key={group.label} delay={0.1 + i * 0.08}>
                <div className="p-4 rounded-lg border border-border bg-card hover:border-cyan/30 transition-colors group">
                  <p className="text-xs font-mono text-cyan mb-3 uppercase tracking-wider">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

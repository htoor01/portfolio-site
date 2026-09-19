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
    <section id="skills" className="py-28 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeIn>
          <p className="font-mono text-xs text-cyan mb-3 uppercase tracking-widest">
            01 / Skills
          </p>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-balance">
              Things I use.
            </h2>
          </FadeIn>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

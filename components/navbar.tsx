'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'To Top', href: '#top' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (isLight) {
      html.classList.add('light')
    } else {
      html.classList.remove('light')
    }
  }, [isLight])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo + theme toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-mono text-sm font-medium text-foreground hover:text-cyan transition-colors"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              <span className="text-cyan">~/</span>haaris
            </a>
            <button
              onClick={() => setIsLight((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono transition-colors ${
                isLight
                  ? 'border-cyan/60 text-cyan bg-cyan/10 hover:bg-cyan/20'
                  : 'border-border text-muted-foreground hover:border-cyan/40 hover:text-foreground'
              }`}
              aria-label="Toggle light mode"
            >
              {isLight ? <Moon size={12} /> : <Sun size={12} />}
              {isLight ? 'dark' : 'light'}
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/htoor01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/haaristoor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-border px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <a
                  href="https://github.com/htoor01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/haaristoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <button
                  onClick={() => setIsLight((v) => !v)}
                  className={`ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono transition-colors ${
                    isLight
                      ? 'border-cyan/60 text-cyan bg-cyan/10 hover:bg-cyan/20'
                      : 'border-border text-muted-foreground hover:border-cyan/40 hover:text-foreground'
                  }`}
                  aria-label="Toggle light mode"
                >
                  {isLight ? <Moon size={12} /> : <Sun size={12} />}
                  {isLight ? 'dark' : 'light'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

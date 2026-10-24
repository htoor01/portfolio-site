import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Education from '@/components/education'
import Experience from '@/components/experience'
import About from '@/components/about'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

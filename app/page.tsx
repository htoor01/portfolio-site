import Link from "next/link";
import ProjectCardFeatured from "@/components/ProjectCard/ProjectCardFeatured"; 

export default function HomePage(){
    return(
        <main>
                <section id="stats-box">
                    <h1>Hi, I'm Haaris Toor! 👋</h1>
                    <p>Resume! (most recent)</p>
                    <p>Complete Work Experience (everywhere I've ever worked, ever)</p>
                </section>
                
                <section id="skillset">

                    <h2>A basic rundown of the languages, frameworks, libraries and tools I've worked with!</h2>

                    <ul id="languages">
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>

                    <ul id="frameworks">
                        <li>Node.js</li>
                        <li>Next.js</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>PyGame</li>
                        
                    </ul>

                    <ul id="tools">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>

                    </ul>

                </section>

                <section id="featured-projects" className="mb-8">

                    <h2 className="text-2xl font-bold mb-6">Some of my most recent projects! See more: <Link href="/projects" className="text-blue-500 hover:text-blue-600">here</Link>!</h2>

                    <div className="flex flex-wrap gap-6">
                        <ProjectCardFeatured 
                        title="Portfolio Website"
                        description="A portfolio website built with Next.js and Tailwind CSS (the one you're in right now)."
                        githubLink="https://github.com/htoor01/portfolio-site"
                        imageUrl="/images/portfolio-website.png"
                        />
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <ProjectCardFeatured 
                        title="Budget Tracker"
                        description="A very basic HTML, CSS, and JavaScript budgeting application!"
                        githubLink="https://github.com/htoor01/budget-tracker"
                        imageUrl="/images/budget-tracker.png"
                        />
                    </div>

                </section>
            </main>
    );
}

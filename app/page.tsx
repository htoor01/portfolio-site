import Link from "next/link";
import ProjectCardFeatured from "@/components/ProjectCard/ProjectCardFeatured"; 

export default function HomePage(){
    return(
        <main className="flex flex-col items-center p-4 sm:p-8">
                <section id="stats-box" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 mb-8 max-w-2xl w-full">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <img src="/images/profile.png" alt="Haaris Toor" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover" />
                        <div className="flex-1 text-center">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I'm Haaris Toor! 👋</h1>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4">
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="As of 2025!"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Resume!
                                </a>
                                <a 
                                    href="/complete-work-history.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="Everywhere I've ever worked, ever!"
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Complete Work History!
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Link href="https://linkedin.com/in/haaristoor" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                                    <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                                    LinkedIn
                                </Link>
                                <Link href="https://github.com/htoor01" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                                    <img src="/images/github.png" alt="GitHub" className="w-5 h-5" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="skillset" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 mb-8 max-w-5xl w-full">

                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">A basic rundown of the languages, frameworks, libraries and tools I've worked with!</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Languages</h3>
                            <ul id="languages" className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>HTML/CSS</li>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>SQL</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Frameworks/Libraries</h3>
                            <ul id="frameworks" className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>Node.js</li>
                                <li>Next.js</li>
                                <li>Express.js</li>
                                <li>React</li>
                                <li>Spring Boot</li>
                                <li>NumPy</li>
                                <li>Pandas</li>
                                <li>PyGame</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Tools</h3>
                            <ul id="tools" className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>Git</li>
                                <li>Docker</li>
                                <li>AWS</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>

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

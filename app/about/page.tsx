export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-8 max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <img 
                        src="/images/profile.png" 
                        alt="Haaris Toor" 
                        className="w-48 h-48 rounded-lg object-cover mx-auto md:mx-0"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Hi there, I'm Haaris. 👋</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            I'm a Full-Stack Developer and Student at Rutgers University studying Computer Science (Major) and Economics (Minor). 
                            I have experience with Javascript, Typescript, Python, Java, SQL, MongoDB, Git, GitHub Actions (CI/CD), Docker, and AWS. 
                            Frameworks and libraries include Express.js, Next.js, Node.js, React, Spring Boot, NumPy, Pandas, PyGame.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Let's Connect!</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        I'm always interested in new opportunities and collaborations. Feel free to reach out 
                        through the <a href="/contact" className="text-blue-500 hover:text-blue-600">contact page</a> or 
                        connect with me on <a href="https://linkedin.com/in/haaristoor" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
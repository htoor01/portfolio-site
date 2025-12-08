import Link from "next/link";

export default function FooterGeneral(){
    return(
        <>
            <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Check out my socials!</h2>
                    <div className="flex justify-center gap-6 mb-4">
                        <Link href="https://linkedin.com/in/haaristoor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/htoor01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                            <img src="/images/github.png" alt="GitHub" className="w-5 h-5" />
                            GitHub
                        </Link>
                        <Link href="https://twitter.com/htoor01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                            <img src="/images/twitter.png" alt="Twitter" className="w-5 h-5" />
                            Twitter
                        </Link>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Interested in reaching out directly? Send me a <Link href="/contact" className="text-blue-500 hover:text-blue-600 transition-colors">message</Link>!</p>
                </div>
            </footer>
        
        </>
    );
}
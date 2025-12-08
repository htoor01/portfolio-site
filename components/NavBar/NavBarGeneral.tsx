import Link from "next/link";

export default function NavBarGeneral(){
    return(
        <>
            <header>

                <nav>
                    <ul id="nav-bar" className="flex gap-6 p-4 justify-center">
                        <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                        <li><Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
                        <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
                        <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Me!</Link></li>
                    </ul>
                </nav>

            </header>  
            
        </>
    );
}
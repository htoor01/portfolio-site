import Link from "next/link";

export default function NavBarGeneral(){
    return(
        <>
            <header>

                <nav>
                    <ul id="nav-bar">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact Me!</Link></li>
                    </ul>
                </nav>

            </header>  
            
        </>
    );
}
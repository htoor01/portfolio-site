import Link from "next/link";

export default function NavBarBlog(){
    return(
        <>
            <header>

                <nav>
                    <ul id="nav-bar">
                        <li><Link href="/">Website Home</Link></li>
                        <li><Link href="/blog">Blog Home</Link></li>
                        <li><Link href="/blog/about">About</Link></li>
                        <li><Link href="/contact">Contact Me!</Link></li>
                    </ul>
                </nav>

            </header>  
            
        </>
    );
}
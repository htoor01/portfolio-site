import Link from "next/link";

export default function FooterGeneral(){
    return(
        <>
            <footer>
                <h1>Check out my socials!</h1>
                <Link href="https://linkedin.com/in/haaristoor" target="_blank" rel="noopener noreferrer">LinkedIn</Link><br></br>
                <Link href="https://github.com/htoor01" target="_blank" rel="noopener noreferrer">Github</Link><br></br>
                <Link href="https://twitter.com/htoor01" target="_blank" rel="noopener noreferrer">Twitter</Link>
                <p>Interested in reaching out directly? Send me a <Link href="/contact">message</Link>!</p>

            </footer>
        
        </>
    );
}

export default function Footer(){

    return(
        <footer className="py-6">
            <div className="w-full max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm">© {new Date().getFullYear()} Dazeefa Creative. All rights reserved.</span>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/dazeefacreative/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity duration-300">LinkedIn</a>
                    <a href="https://github.com/dazeefacreative" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity duration-300">GitHub</a>
                    <a href="https://behance.net/dazeefacreative" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity duration-300">Twitter</a>
                </div>
            </div>
        </footer>
    )
}
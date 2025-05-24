import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {  // Fix: Add curly braces for destructuring

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    Ajay <span className="text-blue-500">Kumar</span>{" "}
                </a>
                
                <button 
                    className="md:hidden text-2xl text-white hover:text-blue-500 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="#home" 
                        className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home 
                    </a>
                    <a 
                        href="#about" 
                        className="text-gray-300 hover:text-white transition-colors"
                        >
                            About 
                    </a>
                    <a 
                        href="#projects" 
                        className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects 
                    </a>
                    <a 
                        href="#contacts" 
                        className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
}
import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {  // Fix: Add curly braces for destructuring

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[#112255]/80 backdrop-blur-lg border-b border-[#95B1C9]/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-[#F5E6EB]">
                    Ajay <span className="text-[#95B1C9]">Kumar</span>
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
                        className="text-[#E5E0DA] hover:text-[#F5E6EB] transition-colors"
                        >
                            Home 
                    </a>
                    <a 
                        href="#about" 
                        className="text-[#E5E0DA] hover:text-[#F5E6EB] transition-colors"
                        >
                            About 
                    </a>
                    <a 
                        href="#projects" 
                        className="text-[#E5E0DA] hover:text-[#F5E6EB] transition-colors"
                        >
                            Projects 
                    </a>
                    <a 
                        href="#blog" 
                        className="text-[#E5E0DA] hover:text-[#F5E6EB] transition-colors"
                        >
                            Blog
                    </a>
                    <a 
                        href="#contacts" 
                        className="text-[#E5E0DA] hover:text-[#F5E6EB] transition-colors"
                        >
                            Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
}
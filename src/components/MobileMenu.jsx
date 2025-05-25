export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return(
        <div 
            className={`fixed top-0 left-0 w-full min-h-screen bg-[#112255]/95 backdrop-blur-sm z-50 
                        flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        >
            <button 
                onClick={()=> setMenuOpen(false)} 
                className="absolute top-6 right-6 text-[#95B1C9] text-3xl focus:outline-none cursor-pointer
                          hover:text-[#F5E6EB] transition-colors duration-300"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a 
                href="#home"
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#95B1C9] my-4 
                           transform transition-all duration-300
                           hover:text-[#F5E6EB] hover:-translate-y-1
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Home 
            </a>
            <a 
                href="#about"
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#95B1C9] my-4 
                           transform transition-all duration-300
                           hover:text-[#F5E6EB] hover:-translate-y-1
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                About 
            </a>
            <a 
                href="#projects"
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#95B1C9] my-4 
                           transform transition-all duration-300
                           hover:text-[#F5E6EB] hover:-translate-y-1
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Projects 
            </a>
            <a 
                href="#contacts"
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#95B1C9] my-4 
                           transform transition-all duration-300
                           hover:text-[#F5E6EB] hover:-translate-y-1
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Contact
            </a>
        </div>
    )
};
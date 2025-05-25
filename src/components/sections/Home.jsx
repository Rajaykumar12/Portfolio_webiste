import { RevealOnScroll } from "../RevealOnScroll"



export const Home = () => {
    return <section 
                id="home" 
                className="h-screen flex items-center justify-center relative bg-[#112255]"
    >
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent leading-right">
                    Hi, I'm Ajay Kumar
                </h1>
                <p className="text-[#E5E0DA] text-lg mb-8 max-w-lg mx-auto">
                    Computer Science Student & Software Developer
                </p>
                <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects" 
                        className="bg-[#95B1C9] text-[#112255] py-3 px-8 rounded-lg font-semibold
                                transform transition-all duration-300 ease-in-out
                                hover:bg-[#F5E6EB] hover:scale-105
                                active:scale-95 
                                border-2 border-transparent hover:border-[#95B1C9]"
                    >
                        View Projects
                    </a>
                    <a 
                        href="#contact" 
                        className="bg-transparent text-[#95B1C9] py-3 px-8 rounded-lg font-semibold
                                transform transition-all duration-300 ease-in-out
                                hover:bg-[#95B1C9]/10 hover:scale-105
                                active:scale-95 
                                border-2 border-[#95B1C9] hover:border-[#F5E6EB]"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
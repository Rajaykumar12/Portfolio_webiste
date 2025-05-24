import { RevealOnScroll } from "../RevealOnScroll"



export const Home = () => {
    return <section 
                id="home" 
                className="h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Ajay Kumar
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a software enthusiast 
                </p>
                <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects" 
                        className="bg-blue-500 text-white py-3 px-8 rounded-lg font-semibold
                                transform transition-all duration-300 ease-in-out
                                hover:bg-blue-600 hover:scale-105
                                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                                active:scale-95 
                                border-2 border-transparent hover:border-blue-400"
                    >
                        View Projects
                    </a>
                    <a 
                        href="#contact" 
                        className="bg-transparent text-blue-500 py-3 px-8 rounded-lg font-semibold
                                transform transition-all duration-300 ease-in-out
                                hover:bg-blue-500/10 hover:scale-105
                                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                                active:scale-95 
                                border-2 border-blue-500 hover:border-blue-400"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
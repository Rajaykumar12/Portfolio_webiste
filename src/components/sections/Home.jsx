import { RevealOnScroll } from "../RevealOnScroll"
import profilePic from '/src/assets/images/6.jpeg';


export const Home = () => {
    return (
        <section 
            id="home" 
            className="relative h-screen flex items-center justify-center bg-transparent"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <div className="flex items-center justify-center gap-8 mb-6 flex-col md:flex-row">
                        <div className="order-2 md:order-1">
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent leading-right">
                                Hi, I'm Ajay Kumar
                            </h1>
                            <p className="text-[#E5E0DA] text-lg mt-4 max-w-lg">
                                Computer Science Student & Software Developer
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img 
                                src={profilePic}
                                alt="Ajay Kumar" 
                                className="w-48 h-48 object-cover object-top rounded-3xl border-4 border-[#95B1C9] shadow-lg
                                        hover:border-[#F5E6EB] transition-all duration-300"
                            />
                        </div>
                    </div>
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
                            href="#contacts" 
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
    );
};
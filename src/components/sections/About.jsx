import { RevealOnScroll } from "../RevealOnScroll"



export const About = () => {
    const frontendSkills = ['JavaScript', 'React', 'HTML', 'CSS', 'Laravel', 'Blade']
    const backendSkills = ['Node.js', 'Django', 'Flask', 'Python', 'Java', 'C++']
    const dataSkills = ['Python', 'Pandas', 'NumPy', 'spaCy', 'Matplotlib', 'NLTK', 'Scikit-learn', 'seaborn']

    return ( 
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20 bg-[#112255]"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                  hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                  hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                  transition-all">
                        <p className="text-[#E5E0DA] mb-6">
                            I'm a passionate full-stack developer and data enthusiast who enjoys building interactive websites, analyzing real-world data, and creating intelligent solutions for challenging problems. My expertise spans web development, data science, and machine learning.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                          hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                          hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                          transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#95B1C9]/10 text-[#95B1C9] py-1 px-3 rounded-full text-sm 
                                                    hover:bg-[#95B1C9]/20 hover:shadow-[0_2px_8px_rgba(149,177,201,0.2)] 
                                                    transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                          hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                          hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                          transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#95B1C9]/10 text-[#95B1C9] py-1 px-3 rounded-full text-sm 
                                                    hover:bg-[#95B1C9]/20 hover:shadow-[0_2px_8px_rgba(149,177,201,0.2)] 
                                                    transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                          hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                          hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                          transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Data Science & ML</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dataSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#95B1C9]/10 text-[#95B1C9] py-1 px-3 rounded-full text-sm 
                                                    hover:bg-[#95B1C9]/20 hover:shadow-[0_2px_8px_rgba(149,177,201,0.2)] 
                                                    transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                      hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                      hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                      transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Education</h3>
                            <ul className="list-disc list-inside text-[#E5E0DA] space-y-2">
                                <li><strong className="text-[#95B1C9]">B.E in Computer Science</strong> 
                                    <span className="text-[#E5E0DA]"> Sahyadri College of Engineering and Management (2023-27)</span>
                                </li>
                                <li>Relevant Coursework: Data Structure, Web Development, Data Science...</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                      hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                      hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                      transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Experience</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-[#95B1C9]">NLP Developer - Redactly AI</h4>
                                    <p className="text-[#E5E0DA]">Developed NLP models for automated text redaction system using Python and spaCy</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#95B1C9]">Frontend Developer - Earneasy</h4>
                                    <p className="text-[#E5E0DA]">Building responsive freelance platform interface using React and contributing to Node.js backend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
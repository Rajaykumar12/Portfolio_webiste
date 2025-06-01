import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = [
        'JavaScript', 'React', 'Next.js', 'Vue.js',
        'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material-UI',
        'Vite', 'Laravel Blade'
    ]
    
    const backendSkills = [
        'Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'Flask',
        'Java','C++', 'PHP', 'Laravel',
        'MySQL','REST APIs'
    ]
    
    const dataSkills = [
        'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
        'Scikit-learn','spaCy', 'NLTK',
        'Jupyter','SQL', 'Power BI', 'Tableau'
    ]

    const certificates = [
        {
            title: "Foundational C# with Microsoft",
            issuer: "freeCodeCamp",
            year: "2024",
            link: "https://www.freecodecamp.org/certification/RAJAYKUMAR/foundational-c-sharp-with-microsoft"
        },
        {
            title: "Postman API Fundamentals Student Expert",
            issuer: "Postman",
            year: "2024",
            link: "https://badgr.com/public/assertions/_YBw5m2WRSemQS3WFQxwjw"
        },
        {
            title: "Intermediate Machine Learning",
            issuer: "Kaggle",
            year: "2025",
            link: "https://www.kaggle.com/learn/certification/rajaykumar12/intermediate-machine-learning"
        },
        {
            title: "JavaScript",
            issuer: "Coursera",
            year: "2025",
            link: "https://www.coursera.org/account/accomplishments/verify/827U0LQKT2NR"
        },
    ]

    return (
        <>
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
                                {/* Education Section */}
                                <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                              hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                              hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                              transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Education</h3>
                                    <ul className="list-disc list-inside text-[#E5E0DA] space-y-3">
                                        <li>
                                            <strong className="text-[#95B1C9]">B.E in Computer Science</strong> 
                                            <span className="text-[#E5E0DA]"> - Sahyadri College of Engineering and Management (2023-27)</span>
                                            <br />
                                            <span className="text-sm text-[#95B1C9]/80">Current CGPA: 9.77/10</span>
                                        </li>
                                        <li>
                                            <strong className="text-[#95B1C9]">12th Grade (Science)</strong> 
                                            <span className="text-[#E5E0DA]"> - Canara PU College (2021-23)</span>
                                            <br />
                                            <span className="text-sm text-[#95B1C9]/80">Percentage: 92%</span>
                                        </li>
                                        <li>
                                            <strong className="text-[#95B1C9]">Relevant Coursework:</strong>
                                            <span className="text-[#E5E0DA]"> Data Structures & Algorithms, Database Management Systems, Computer Networks, Software Engineering, Machine Learning, Web Development</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Section */}
                                <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                              hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                              hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                              transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Experience</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-[#95B1C9]">NLP Developer - Redactly AI</h4>
                                            <p className="text-[#E5E0DA] text-sm">Developed NLP models for automated text redaction system using Python and spaCy</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#95B1C9]">Frontend Developer - Earneasy</h4>
                                            <p className="text-[#E5E0DA] text-sm">Building responsive freelance platform interface using React and contributing to Node.js backend</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Certifications Section with Links */}
                                <div className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                              hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                              hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                              transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-[#F5E6EB]">Certifications</h3>
                                    <div className="space-y-3">
                                        {certificates.map((cert, index) => (
                                            <div key={index} className="group">
                                                <a 
                                                    href={cert.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="block hover:bg-[#95B1C9]/10 rounded-lg p-2 transition-all duration-300 
                                                             hover:translate-x-1 hover:shadow-sm"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-[#95B1C9] text-sm group-hover:text-[#F5E6EB] transition-colors">
                                                                {cert.title}
                                                            </h4>
                                                            <p className="text-[#E5E0DA] text-xs">
                                                                {cert.issuer} • {cert.year}
                                                            </p>
                                                        </div>
                                                        <div className="ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                            <svg className="w-3 h-3 text-[#95B1C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Skills section remains the same */}
            <section 
                id="skills" 
                className="min-h-screen flex items-center justify-center py-20 bg-[#112255]"
            >
                <RevealOnScroll>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center">
                            Skills & Expertise
                        </h2>
                        
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
                </RevealOnScroll>
            </section>
        </>
    )
}
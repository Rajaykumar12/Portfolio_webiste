import { title } from "framer-motion/client";
import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = () => {
    const projects = [
        {
            title: "Redactly AI",
            description: "An intelligent text redaction tool that automatically detects and removes sensitive information from medical records using NLP and machine learning.",
            tech: ["Python","React", "Node.js", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Docker"],
            link: "https://github.com/Rajaykumar12/RedactlyAi"
        },
        {
            title: "EarnEasy",
            description: "A rental marketplace for students to rent out or rent products from others, making peer-to-peer rentals easy and secure.",
            tech: ["React", "Node.js","JavaScript", "Express.js", "RESTful APIs"],
            link: "https://github.com/Rajaykumar12/EarnEasy"
        },
        {
            title: "Twitter Sentiment Analysis",
            description: "Analyzed public sentiment on Twitter by classifying tweets as positive, negative, or neutral using machine learning and NLP techniques.",
            tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "NLTK", "Matplotlib"],
            link: "https://github.com/Rajaykumar12/Twitter_Sentimental_analysis"
        },
        {
            title: "Imbalanced Data Classification",
            description: "Worked on insurance dataset classification, applying advanced resampling techniques to improve model reliability.",
            tech: ["Python", "Pandas", "Scikit-learn", "Imbalanced-learn"],
            link: "https://github.com/Rajaykumar12/Imbalanced_data"
        },
        {
            title: "Movie Recommendation System",
            description: "Developed a movie recommendation engine using collaborative and content-based filtering with interactive Streamlit frontend.",
            tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
            link: "https://github.com/Rajaykumar12/Movie_Recommendation_System"
        },
        {
            title: "Weather App",
            description: "This Weather App leverages React and TailwindCSS to deliver real-time weather updates through a sleek, responsive interface. Designed for scalability and modern user experience, it provides accurate weather data for any location.",
            tech: ["React", "TailwindCss", "React", "OpenWeatherApi"],
            link: "https://github.com/Rajaykumar12/WeatherApp"
        },
        {
            title: "F1 Predictor",
            description: "F1 predictor uses machine learning and data analytics to forecast Formula 1 race outcomes. It empowers fans and analysts with data-driven insights for accurate race predictions.",
            tech: ["Python", "Jupyter", "Numpy", "Pandas", "MatplotLib", "Seaborn", "Sklearn", "Pickle"],
            link: "https://github.com/Rajaykumar12/F1_predictor"
        },
        {
            title: "Welfare Management System for Armed forces",
            description: "Digital platform designed to connect military personnel and their families with vital government policies, welfare schemes, and everyday updates. It aims to bridge communication gaps, ensuring military communities have streamlined access to support and information.",
            tech: ["React", "TaiwindCss", "JavaScript", "GoogleAuth", "FireBase"],
            link: "https://github.com/Rajaykumar12/quantum-skill-sangam25"
        },
        {
            title: "CMD Animal Database",
            description: "Created a command-line animal database application in C# for a pet store, allowing users to add, update, view, and manage information about animals and their availability.",
            tech: ["C#", "CLI", "OOP", ".NET"],
            link: "https://github.com/Rajaykumar12/c-projects/tree/main/animal%20databas"
        },
    ];

    return ( 
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20 bg-[#112255]" // Royal Blue background
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="p-6 rounded-xl bg-[#F5E6EB]/5 backdrop-blur-sm border border-[#95B1C9]/20 
                                                      hover:-translate-y-1 hover:border-[#95B1C9]/30 
                                                      hover:shadow-[0_2px_8px_rgba(149,177,201,0.1)] 
                                                      transition-all">
                                <h3 className="text-xl font-bold mb-2 text-[#F5E6EB]">{project.title}</h3>
                                <p className="text-[#E5E0DA] mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, key) => (
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
                                <a 
                                    href={project.link} 
                                    className="text-[#95B1C9] hover:text-[#F5E6EB] transition-colors"
                                >
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
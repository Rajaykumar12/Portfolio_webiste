import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'


export const Contacts = () => {

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        message: "",
    })



    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                e.target, 
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
            alert("Message sent alert");
            setFormData({name: "", email:"", message: ""})
        }).catch(()=> alert("Something went wrong. Try again"))
    }


    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-2xl mx-auto px-4"> {/* Changed from max-w-md to max-w-2xl */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">
                        Get in Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg 
                                          px-6 py-4 text-lg text-white 
                                          transition-all duration-300
                                          focus:outline-none focus:border-blue-500 
                                          focus:bg-blue-500/5 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                                          placeholder:text-gray-400"
                                placeholder="Name..."
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg 
                                          px-6 py-4 text-lg text-white 
                                          transition-all duration-300
                                          focus:outline-none focus:border-blue-500 
                                          focus:bg-blue-500/5 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                                          placeholder:text-gray-400"
                                placeholder="Email..."
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded-lg 
                                          px-6 py-4 text-lg text-white 
                                          transition-all duration-300
                                          focus:outline-none focus:border-blue-500 
                                          focus:bg-blue-500/5 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                                          placeholder:text-gray-400"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-transform-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'


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
                // Replace alert with styled toast
                toast.success('Message sent successfully!', {
                    style: {
                        background: '#112255',
                        color: '#F5E6EB',
                        border: '1px solid #95B1C9',
                        padding: '16px',
                    },
                    duration: 4000,
                });
                setFormData({name: "", email:"", message: ""})
            }).catch(() => {
                // Replace alert with styled toast
                toast.error('Something went wrong. Please try again.', {
                    style: {
                        background: '#112255',
                        color: '#F5E6EB',
                        border: '1px solid #FF6B6B',
                        padding: '16px',
                    },
                    duration: 4000,
                });
            })
    }

    return (
        <section 
            id="contacts" 
            className="min-h-screen flex items-center justify-center py-20 bg-[#112255]"
        >
            {/* Add the Toaster component */}
            <Toaster position="bottom-center" />
            
            <RevealOnScroll>
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center">
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
                                className="w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg 
                                          px-6 py-4 text-lg text-[#E5E0DA] 
                                          transition-all duration-300
                                          focus:outline-none focus:border-[#95B1C9] 
                                          focus:bg-[#F5E6EB]/10
                                          placeholder:text-[#95B1C9]/50"
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
                                className="w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg 
                                          px-6 py-4 text-lg text-[#E5E0DA] 
                                          transition-all duration-300
                                          focus:outline-none focus:border-[#95B1C9] 
                                          focus:bg-[#F5E6EB]/10
                                          placeholder:text-[#95B1C9]/50"
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
                                className="w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg 
                                          px-6 py-4 text-lg text-[#E5E0DA] 
                                          transition-all duration-300
                                          focus:outline-none focus:border-[#95B1C9] 
                                          focus:bg-[#F5E6EB]/10
                                          placeholder:text-[#95B1C9]/50"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full md:w-[200px] mx-auto block
                                      bg-[#95B1C9] text-[#112255]
                                      text-lg font-medium
                                      py-4 px-8 rounded-lg
                                      transition-all duration-300
                                      hover:bg-[#F5E6EB]
                                      hover:-translate-y-0.5 
                                      active:scale-[0.98]
                                      disabled:opacity-70 disabled:cursor-not-allowed
                                      focus:outline-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
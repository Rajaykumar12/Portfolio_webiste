import { motion } from "framer-motion"
import { RevealOnScroll } from "../RevealOnScroll"

export const BlogPost = ({ post, postCount, onClick }) => {
    const getPostClasses = (postCount) => {
        return "bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#95B1C9] hover:bg-[#F5E6EB]/10 cursor-pointer group"
    }

    const getImageClasses = (postCount) => {
        if (postCount === 1) {
            return "w-full h-64 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        } else {
            return "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        }
    }

    return (
        <RevealOnScroll>
            <motion.article
                className={getPostClasses(postCount)}
                whileHover={{ y: -5 }}
                onClick={() => onClick(post)}
            >
                <div className="relative overflow-hidden">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className={getImageClasses(postCount)}
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112255]/50 to-transparent"></div>
                </div>
                
                <div className={`p-6 ${postCount === 1 ? 'md:p-8' : ''}`}>
                    <h3 className={`font-bold text-[#F5E6EB] mb-3 group-hover:text-[#95B1C9] transition-colors ${
                        postCount === 1 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}>
                        {post.title}
                    </h3>
                    
                    <p className={`text-[#95B1C9] mb-4 ${
                        postCount === 1 ? 'text-lg line-clamp-4' : 'line-clamp-3'
                    }`}>
                        {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-[#95B1C9]/70">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                </div>
            </motion.article>
        </RevealOnScroll>
    )
}
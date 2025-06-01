import { motion } from "framer-motion"
import { BlogContentRenderer } from "./BlogContentRenderer"

export const BlogModal = ({ post, onClose }) => {
    if (!post) return null

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                className="bg-[#112255] border border-[#95B1C9]/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <div className="relative">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 md:h-80 object-cover"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"
                        }}
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-[#112255]/80 text-[#F5E6EB] p-2 rounded-full
                                  hover:bg-[#95B1C9] hover:text-[#112255] transition-colors"
                    >
                        ✕
                    </button>
                </div>
                
                <div className="p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5E6EB] mb-4">
                        {post.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-8 text-[#95B1C9]">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <BlogContentRenderer 
                        content={post.content} 
                        images={post.images}
                    />
                </div>
            </motion.div>
        </div>
    )
}
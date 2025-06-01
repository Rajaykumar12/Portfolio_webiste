import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import { motion } from "framer-motion"

// Import your local image
import csStudentLifeImage from "../../assets/images/blog/blog1.jpg"
import blog2 from "../../assets/images/blog/blog2.jpg"

const blogPosts = [
    {
        id: 1,
        title: "CS Student Life: Web Dev Meets Machine Learning",
        excerpt: "Quick thoughts on juggling React projects and ML experiments as a 2nd year CS student.",
        content: `## How I Got Here

Started as a typical CS student, then discovered web development. Building things people can actually see and interact with? Addictive.

Then came the hackathon. Built Redactly AI - a text redaction system with Python and spaCy. Didn't win, but suddenly I'm fascinated by making computers understand human language.

## Current Stack Chaos

**Web Dev:**
- React (hooks everywhere)
- Tailwind CSS (utility classes > everything)
- Node.js APIs
- That one PHP project we don't talk about

**Data Science/ML:**
- Python notebooks (messy but functional)
- spaCy from the hackathon
- Pandas (still confusing)
- scikit-learn experiments

**Academic Stuff:**
- Java assignments
- C++ that actually compiles
- Database schemas

## What I'm Learning

1. **React development** - This portfolio site
2. **Python & Data Science** - Pandas, NumPy, datasets
3. **Machine Learning basics** - Theory vs practice gap is real
4. **College coursework** - Algorithms, databases, networks

## Random Observations

**Web Dev:**
- CSS is amazing and terrible simultaneously
- React hooks make sense until they don't
- "Works on my machine" is real

**Machine Learning:**
- Data cleaning takes forever
- Getting good data > building models
- "It's just statistics" (very complicated statistics)

**Student Life:**
- Balancing theory and practice is an art
- Google and Stack Overflow = best friends
- Not winning hackathons is totally fine

## What's Next?

Honestly? No idea. Maybe deeper into transformers, maybe more web apps, maybe another hackathon.

Currently curious about:
- Combining web dev + ML
- TypeScript (everyone says I should learn it)
- Docker (containers are confusing)
- Finishing that side project from 3 months ago

## Quick Tech Questions

- How do you scale React apps?
- TensorFlow vs PyTorch - what's the deal?
- Is Next.js actually better than React?
- Why is deployment harder than development?

## Machine Learning Fascination

Started with linear regression, now reading about neural networks. The idea that computers can learn patterns from data just clicks with me.

**What makes sense:**
- Computers learning from data
- Different algorithms for different problems
- Data prep being 80% of the work

**Still confusing:**
- The math (working on it)
- When to use which algorithm
- Why models work in training but fail in real life

## Closing Thoughts

Being a CS student in 2025 is weird. So much to learn, so many choices. Web dev? ML? Full-stack? Data science?

For now, I'm just building stuff and seeing what sticks. The hackathon taught me that "working and learning" beats "perfect and theoretical."

Back to debugging why my React component re-renders and why my ML model thinks everything is the same class...

P.S. - If anyone knows how to make Pandas less confusing, let me know!`,
        image: csStudentLifeImage,
        date: "2025-06-01",
        author: "R Ajay Kumar"
    },
    {
        id: 2,
        title: "Quick Thoughts: Learning Data Science",
        excerpt: "Some random observations from a CS student diving into data science and machine learning.",
        content: `## The Data Science Journey

Started with basic Python, now I'm knee-deep in Pandas dataframes and scikit-learn models.

## What's Clicking

**Python Libraries:**
- Pandas for data manipulation (still learning)
- NumPy for numerical operations
- Matplotlib for basic visualizations

**Machine Learning Basics:**
- Linear regression makes sense
- Decision trees are intuitive
- Neural networks... working on it

## Reality Check

Data cleaning takes 80% of the time. Nobody warns you about this in tutorials.

Also, getting good training data is harder than building the model itself.

## Current Focus

- Understanding different ML algorithms
- Getting better at data visualization
- Figuring out when to use which approach

**Random Note:** Why do all the datasets in tutorials work perfectly? Real data is messy.

Still learning, still building projects. The journey continues.`,
        image: blog2,
        date: "2025-05-25",
        author: "R Ajay Kumar"
    }
]

export const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesSearch
    })

    const openPost = (post) => {
        setSelectedPost(post)
        document.body.style.overflow = 'hidden' 
    }

    const closePost = () => {
        setSelectedPost(null)
        document.body.style.overflow = 'unset'
    }

    // Function to get dynamic grid classes based on number of posts
    const getGridClasses = (postCount) => {
        if (postCount === 1) {
            return "grid grid-cols-1 gap-8 max-w-4xl mx-auto" // Single blog takes full width (but constrained)
        } else {
            return "grid grid-cols-1 md:grid-cols-2 gap-8" // 2 blogs per row on medium+ screens
        }
    }

    // Function to get individual post classes based on number of posts
    const getPostClasses = (postCount) => {
        if (postCount === 1) {
            return "bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#95B1C9] hover:bg-[#F5E6EB]/10 cursor-pointer group"
        } else {
            return "bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#95B1C9] hover:bg-[#F5E6EB]/10 cursor-pointer group"
        }
    }

    // Function to get image classes based on number of posts
    const getImageClasses = (postCount) => {
        if (postCount === 1) {
            return "w-full h-64 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105" // Larger image for single post
        } else {
            return "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" // Standard size for multiple posts
        }
    }

    // Function to render markdown-like content
    const renderContent = (content) => {
        const lines = content.split('\n')
        return lines.map((line, index) => {
            // Handle headers
            if (line.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-2xl font-bold text-[#95B1C9] mt-8 mb-4">
                        {line.replace('## ', '')}
                    </h2>
                )
            }
            
            // Handle bold text
            if (line.startsWith('**') && line.endsWith('**')) {
                return (
                    <h3 key={index} className="text-lg font-semibold text-[#F5E6EB] mt-6 mb-3">
                        {line.replace(/\*\*/g, '')}
                    </h3>
                )
            }
            
            // Handle list items
            if (line.startsWith('- ')) {
                return (
                    <li key={index} className="text-[#E5E0DA] mb-2 ml-4">
                        {line.replace('- ', '')}
                    </li>
                )
            }
            
            // Handle numbered lists
            if (/^\d+\./.test(line)) {
                return (
                    <li key={index} className="text-[#E5E0DA] mb-2 ml-4 list-decimal">
                        {line.replace(/^\d+\.\s*/, '')}
                    </li>
                )
            }
            
            // Handle empty lines
            if (line.trim() === '') {
                return <div key={index} className="mb-4"></div>
            }
            
            // Regular paragraphs
            return (
                <p key={index} className="text-[#E5E0DA] mb-4 leading-relaxed">
                    {line}
                </p>
            )
        })
    }

    return (
        <section 
            id="blog" 
            className="min-h-screen py-20 bg-[#112255]"
        >
            <div className="max-w-7xl mx-auto px-4">
                <RevealOnScroll>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center">
                        Blog & Insights
                    </h2>
                    <p className="text-[#95B1C9] text-center mb-12 text-lg">
                        Thoughts on web development, machine learning, and student life
                    </p>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div className="mb-12 flex justify-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-96 bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg 
                                          px-6 py-3 text-[#E5E0DA] 
                                          transition-all duration-300
                                          focus:outline-none focus:border-[#95B1C9] 
                                          focus:bg-[#F5E6EB]/10
                                          placeholder:text-[#95B1C9]/50"
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Dynamic grid based on number of posts */}
                <div className={getGridClasses(filteredPosts.length)}>
                    {filteredPosts.map((post, index) => (
                        <RevealOnScroll key={post.id}>
                            <motion.article
                                className={getPostClasses(filteredPosts.length)}
                                whileHover={{ y: -5 }}
                                onClick={() => openPost(post)}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className={getImageClasses(filteredPosts.length)}
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#112255]/50 to-transparent"></div>
                                </div>
                                
                                <div className={`p-6 ${filteredPosts.length === 1 ? 'md:p-8' : ''}`}>
                                    <h3 className={`font-bold text-[#F5E6EB] mb-3 group-hover:text-[#95B1C9] transition-colors ${
                                        filteredPosts.length === 1 ? 'text-2xl md:text-3xl' : 'text-xl'
                                    }`}>
                                        {post.title}
                                    </h3>
                                    
                                    <p className={`text-[#95B1C9] mb-4 ${
                                        filteredPosts.length === 1 ? 'text-lg line-clamp-4' : 'line-clamp-3'
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
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#95B1C9] text-lg">No posts found matching your search.</p>
                    </div>
                )}
            </div>

            {selectedPost && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={closePost}
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
                                src={selectedPost.image} 
                                alt={selectedPost.title}
                                className="w-full h-64 md:h-80 object-cover"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"
                                }}
                            />
                            <button
                                onClick={closePost}
                                className="absolute top-4 right-4 bg-[#112255]/80 text-[#F5E6EB] p-2 rounded-full
                                          hover:bg-[#95B1C9] hover:text-[#112255] transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#F5E6EB] mb-4">
                                {selectedPost.title}
                            </h1>
                            
                            <div className="flex items-center gap-4 mb-8 text-[#95B1C9]">
                                <span>By {selectedPost.author}</span>
                                <span>•</span>
                                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="prose prose-invert max-w-none">
                                {renderContent(selectedPost.content)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    )
}
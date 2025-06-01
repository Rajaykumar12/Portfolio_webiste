import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import { BlogGrid } from "../blog/BlogGrid"
import { BlogModal } from "../blog/BlogModal"
import { SearchBar } from "../blog/SearchBar"
import { blogPosts } from "../blog/BlogData"

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

                <SearchBar 
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                <BlogGrid 
                    posts={filteredPosts}
                    onPostClick={openPost}
                />

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#95B1C9] text-lg">No posts found matching your search.</p>
                    </div>
                )}
            </div>

            <BlogModal 
                post={selectedPost}
                onClose={closePost}
            />
        </section>
    )
}
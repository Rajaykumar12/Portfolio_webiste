import { BlogPost } from "./BlogPost"

export const BlogGrid = ({ posts, onPostClick }) => {
    const getGridClasses = (postCount) => {
        if (postCount === 1) {
            return "grid grid-cols-1 gap-8 max-w-4xl mx-auto"
        } else {
            return "grid grid-cols-1 md:grid-cols-2 gap-8"
        }
    }

    return (
        <div className={getGridClasses(posts.length)}>
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    post={post}
                    postCount={posts.length}
                    onClick={onPostClick}
                />
            ))}
        </div>
    )
}
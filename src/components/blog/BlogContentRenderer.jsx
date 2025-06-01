export const BlogContentRenderer = ({ content, images = [] }) => {
    const renderContent = (content) => {
        const lines = content.split('\n')
        
        return lines.map((line, index) => {
            // Handle images - ![alt text](image_url)
            const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/)
            if (imageMatch) {
                const [, altText, imageUrl] = imageMatch
                return (
                    <div key={index} className="my-8 text-center">
                        <img 
                            src={imageUrl}
                            alt={altText}
                            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-[#95B1C9]/20
                                      transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/600x300/95B1C9/F5E6EB?text=Image+Not+Found"
                            }}
                        />
                        {altText && (
                            <p className="text-[#95B1C9] text-sm mt-2 italic">
                                {altText}
                            </p>
                        )}
                    </div>
                )
            }

            // Handle image placeholders - {{image:id}}
            const imagePlaceholder = line.match(/^\{\{image:(\w+)\}\}$/)
            if (imagePlaceholder) {
                const imageId = imagePlaceholder[1]
                const image = images.find(img => img.id === imageId)
                
                if (image) {
                    return (
                        <div key={index} className="my-8 text-center">
                            <img 
                                src={image.url}
                                alt={image.alt}
                                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-[#95B1C9]/20
                                          transition-transform duration-300 hover:scale-105"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/600x300/95B1C9/F5E6EB?text=Image+Not+Found"
                                }}
                            />
                            {image.caption && (
                                <p className="text-[#95B1C9] text-sm mt-2 italic">
                                    {image.caption}
                                </p>
                            )}
                        </div>
                    )
                }
            }
            
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
        <div className="prose prose-invert max-w-none">
            {renderContent(content)}
        </div>
    )
}
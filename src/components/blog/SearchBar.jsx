import { RevealOnScroll } from "../RevealOnScroll"

export const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <RevealOnScroll>
            <div className="mb-12 flex justify-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
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
    )
}
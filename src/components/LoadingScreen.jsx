import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const mobileText = "git checkout\nportfolio...";
    const desktopText = "git checkout portfolio...";
    
    useEffect(() => {
        let index = 0;
        const fullText = window.innerWidth < 768 ? mobileText : desktopText;
        
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval)
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-[#112255] text-[#F5E6EB] flex flex-col items-center justify-center">
            <div className="mb-4 text-center">
                <span className="text-[#95B1C9] text-2xl mr-2">$</span>
                <span className="text-3xl font-mono font-bold md:whitespace-nowrap whitespace-pre-line">
                    {text}
                    <span className="animate-blink ml-1 text-[#95B1C9]">_</span>
                </span>
            </div>
            <p className="text-[#95B1C9]/80 text-sm font-mono mb-6">Switching to portfolio branch...</p>
            <div className="w-[300px] h-[10px] bg-[#F5E6EB]/10 rounded-lg relative overflow-hidden backdrop-blur-sm">
                <div className="w-[40%] h-full bg-[#95B1C9] shadow-[0_0_15px_#95B1C9] animate-loading-bar"></div>
            </div>
        </div>
    )
}
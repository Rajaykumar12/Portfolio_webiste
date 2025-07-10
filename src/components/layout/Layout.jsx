import Lottie from "lottie-react";
import backgroundAnimation from '/src/assets/animations/coding.json';

export const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#112255] overflow-hidden">
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <Lottie 
                    animationData={backgroundAnimation}
                    loop={true}
                    className="w-full h-full"
                />
            </div>
            {children}
        </div>
    );
};
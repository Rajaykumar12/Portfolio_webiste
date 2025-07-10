import { Layout } from './components/layout/Layout';
import { useState, lazy, Suspense } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { MobileMenu } from './components/MobileMenu';
import Footer from './components/Footer';
import PortfolioMatrixRain from './components/PortfolioMatrixRain';
import "./index.css";

// Lazy load heavy components
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Blog = lazy(() => import('./components/sections/Blog').then(module => ({ default: module.Blog })));
const Contacts = lazy(() => import('./components/sections/Contacts').then(module => ({ default: module.Contacts })));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#112255]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#95B1C9]"></div>
    </div>
);

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Layout>
            {isLoading ? (
                <LoadingScreen onComplete={() => setIsLoading(false)} />
            ) : (
                <div className={`min-h-screen transition-opacity duration-700 ${ isLoading ? "opacity-0" : "opacity-100"} bg-color-black text-gray-100`}>
                    {/* Matrix Rain Background */}
                    <div className="matrix-rain">
                        <PortfolioMatrixRain />
                    </div>
                    
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Home/>
                    <Suspense fallback={<SectionLoader />}>
                        <About/>
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Projects/>
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Blog />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Contacts/>
                    </Suspense>
                    <Footer />
                </div>
            )}
        </Layout>
    );
}

export default App;

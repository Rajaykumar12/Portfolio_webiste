import { lazy, Suspense, useState } from 'react';
import { Layout } from './components/layout/Layout';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import './index.css';

const Home = lazy(() => import('./components/sections/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Blog = lazy(() => import('./components/sections/Blog').then(module => ({ default: module.Blog })));
const Contacts = lazy(() => import('./components/sections/Contacts').then(module => ({ default: module.Contacts })));

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Layout>
            {isLoading ? (
                <LoadingScreen onComplete={() => setIsLoading(false)} />
            ) : (
                <Suspense fallback={<div>Loading...</div>}>
                    <div className={`min-h-screen transition-opacity duration-700 ${ isLoading ? "opacity-0" : "opacity-100"} bg-color-black text-gray-100`}>
                        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <Home />
                        <About />
                        <Projects />
                        <Blog />
                        <Contacts />
                    </div>
                </Suspense>
            )}
        </Layout>
    );
}

export default App;

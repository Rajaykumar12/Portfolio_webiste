import { Layout } from './components/layout/Layout';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contacts } from './components/sections/Contacts';
import { MobileMenu } from './components/MobileMenu';
import { Blog } from "./components/sections/Blog"
import Footer from './components/Footer';
import "./index.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Layout>
            {isLoading ? (
                <LoadingScreen onComplete={() => setIsLoading(false)} />
            ) : (
                <div className={`min-h-screen transition-opacity duration-700 ${ isLoading ? "opacity-0" : "opacity-100"} bg-color-black text-gray-100`}>
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Home/>
                    <About/>
                    <Projects/>
                    <Blog />
                    <Contacts/>
                    <Footer />
                </div>
            )}
        </Layout>
    );
}

export default App;

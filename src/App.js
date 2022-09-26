import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
    const [windowsize, setWindowsize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const hanldeSize = () => {
            setWindowsize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', hanldeSize);
        hanldeSize();
        return () => {
            window.removeEventListener('resize', hanldeSize);
        };
    }, []);
    useEffect(() => {
        if (windowsize.width < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowsize]);
    return (
        <div className="overflow-y-auto overflow-x-hidden h-screen w-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500  dark:text-white text-black">
            <NavBar isMobile={isMobile}/>
            <Slogan />
            <Content />
        </div>
    );
}

export default App;

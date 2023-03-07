import Header from '@/scenes/header';
import { useState, useEffect } from 'react';
import { SelectedPage } from './types/TSelectedPage';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits/';
import OurClasses from '@/scenes/ourClasses';
import JoinNow from '@/scenes/joinnow';

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            } else {
                setIsTopOfPage(false);
            }
        };
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    return (
        <div className='app bg-gray-20'>
            <Header
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <JoinNow setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;

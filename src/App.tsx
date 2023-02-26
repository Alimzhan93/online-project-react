import Header from '@/scenes/header';
import { useState } from 'react';
import { SelectedPage } from './types/TSelectedPage';
import './index.css';
function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    return (
        <div className='app'>
            <Header
                selectedPage={selectedPage}
                setSelectedPage={(page) => setSelectedPage(page)}
            />
        </div>
    );
}

export default App;

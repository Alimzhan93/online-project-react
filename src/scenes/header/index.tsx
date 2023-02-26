import React from 'react';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/types/TSelectedPage';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex itens-center justify-between';
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full bg-primary-500 py-6 drop-shadow`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side img */}
                        <img
                            src={Logo}
                            alt='logo'
                        />

                        {/* right side links */}
                        <div className={`${flexBetween} w-full`}>
                            {/* links */}
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link
                                    page='Home'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Benefits'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Our Classes'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page='Contact Us'
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>

                            <div className={`${flexBetween} gap-8`}>
                                <p>Sing In</p>
                                <p>Become a member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

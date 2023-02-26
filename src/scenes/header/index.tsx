import React from 'react';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/types/TSelectedPage';
import CusomButton from '@/UI/CusomButton';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex itens-center justify-between';
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                                <CusomButton setSelectedPage={setSelectedPage}>Become a member</CusomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

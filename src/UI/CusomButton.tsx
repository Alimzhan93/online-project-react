import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types/TSelectedPage';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

const CusomButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            className='hover: hover: cursor-pointer rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>
            {children}
        </AnchorLink>
    );
};

export default CusomButton;

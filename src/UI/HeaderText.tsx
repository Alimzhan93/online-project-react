import React from 'react';

type Props = {
    children: React.ReactNode;
};

const HeaderText = ({ children }: Props) => {
    return <h1 className='font-montserrat text-3xl font-bold uppercase'>{children}</h1>;
};

export default HeaderText;

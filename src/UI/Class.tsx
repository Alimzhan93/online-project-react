import React from 'react';

type Props = {
    title: string;
    description: string;
    image: string;
};

const Class = ({ title, description, image }: Props) => {
    return (
        <li className='relative mx-5 inline-block h-[300px] w-[480px]'>
            <div className='absolute z-20 flex h-[300px] w-[480px] cursor-default flex-col items-center justify-center whitespace-normal rounded-md bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <img
                className='rounded-md'
                src={image}
                alt='our class'
            />
        </li>
    );
};

export default Class;

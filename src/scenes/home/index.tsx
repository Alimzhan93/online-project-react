import React from 'react';
import HomePageText from '@/assets/HomePageText.png';
type Props = {};

const Home = (props: Props) => {
    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            <div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
                {/* main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* headings */}
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img
                                    src={HomePageText}
                                    alt='home page.text'
                                />
                            </div>
                        </div>
                    </div>

                    {/* action buttons */}
                </div>
                {/* image */}
                <div></div>
            </div>

            {/* sponsors */}
            <div></div>
        </section>
    );
};

export default Home;

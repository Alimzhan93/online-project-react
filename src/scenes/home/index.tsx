import React from 'react';
import HomePageText from '@/assets/HomePageText.png';
import CusomButton from '@/UI/CusomButton';
import { SelectedPage } from '@/types/TSelectedPage';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';

import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
                {/* main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* headings */}
                    <motion.div
                        initial='hedden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hedden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img
                                    src={HomePageText}
                                    alt='home page.text'
                                />
                            </div>
                        </div>
                        <p className='mt-8'>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios <br /> to get the Body Shapes that you Dream
                            of..Get Your Dream Body now
                        </p>
                    </motion.div>

                    {/* action buttons */}
                    <motion.div
                        initial='hedden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hedden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className='mt-8 flex items-center gap-8'>
                        <CusomButton setSelectedPage={setSelectedPage}>Join Now</CusomButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            href={`#${SelectedPage.ContactUs}`}
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
                            Learn more
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* image */}
                <div className='flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-end'>
                    <img
                        src={HomePageGraphic}
                        alt='home page graphic'
                    />
                </div>
            </motion.div>

            {/* sponsors */}

            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between gap-8'>
                            <img
                                src={SponsorRedBull}
                                alt='SponsorRedBull'
                            />
                            <img
                                src={SponsorForbes}
                                alt='SponsorForbes'
                            />
                            <img
                                src={SponsorFortune}
                                alt='SponsorFortune'
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;

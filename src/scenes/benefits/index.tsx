import React from 'react';
import { SelectedPage } from '@/types/TSelectedPage';
import HeaderText from '@/UI/HeaderText';

import { motion, Variants } from 'framer-motion';
import BenefitItem from '@/UI/BenefitItem';
import { IBenefits } from '@/types/benefits';
import { HomeIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import CusomButton from '@/UI/CusomButton';

const benefits: IBenefits[] = [
    {
        id: 1,
        picture: <HomeIcon className='h-6 w-6' />,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deserunt, deleniti officiis mollitia sapiente aperiam maiores consequatur aut, iste repellat recusandae aliquid sint, necessitatibus itaque animi voluptatum. Quos, quibusdam non?',
        title: 'State of Art Facilities',
    },
    {
        id: 2,
        picture: <UserGroupIcon className='h-6 w-6' />,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deserunt, deleniti officiis mollitia sapiente aperiam maiores consequatur aut, iste repellat recusandae aliquid sint, necessitatibus itaque animi voluptatum. Quos, quibusdam non?',
        title: 'Hundereds of deverse classes',
    },
    {
        id: 3,
        picture: <AcademicCapIcon className='h-6 w-6' />,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deserunt, deleniti officiis mollitia sapiente aperiam maiores consequatur aut, iste repellat recusandae aliquid sint, necessitatibus itaque animi voluptatum. Quos, quibusdam non?',
        title: 'Expert and Pro trainers',
    },
];

const motionContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='benefits'
            className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header */}
                <motion.div
                    className='md:my-5 md:w-3/5'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HeaderText>MORE THAN JUST A GYM</HeaderText>
                    <p className='my-5'>
                        We provide world class fitness equipment, traines and classes to get you to your fitness goals with ease. We provide true care
                        info each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className='mt-5 items-center justify-between gap-8 md:flex'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={motionContainer}>
                    {benefits.map((benefit) => (
                        <BenefitItem
                            key={benefit.id}
                            setSelectedPage={setSelectedPage}
                            picture={benefit.picture}
                            description={benefit.description}
                            title={benefit.title}
                        />
                    ))}
                </motion.div>
                {/* Graphics and description */}
                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    {/* Graphics */}
                    <img
                        className='mx-auto'
                        src={BenefitsPageGraphic}
                        alt='BenefitsPageGraphic'
                    />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className='relative'>
                            <div className='befor:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{
                                        once: true,
                                        amount: 0.5,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hedden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    <HeaderText>
                                        MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span>
                                    </HeaderText>
                                </motion.div>
                            </div>
                        </div>
                        {/* description */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hedden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className='my-5'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum porro quisquam numquam provident quo aliquam corporis
                                quis error nostrum velit. Minus quisquam magni, provident fugiat officia reprehenderit error obcaecati et porro
                                impedit maxime, voluptate hic veritatis aliquid? Eius natus, iure voluptatum veniam temporibus beatae distinctio iste
                                tempora? Id, molestias incidunt.
                            </p>
                            <p className='mb-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corrupti veritatis consequatur dicta laudantium eveniet
                                consequuntur veniam error perspiciatis, quis, eum qui eos numquam, nisi sit sunt consectetur natus? Repellendus
                                assumenda laudantium, praesentium perferendis, doloremque, voluptatibus quibusdam in explicabo non eos perspiciatis
                                consectetur porro quidem officia dolores quasi nihil enim!
                            </p>
                        </motion.div>
                        {/* button */}
                        <div className='relative mt-16'>
                            <div className='before:absolute before:right-40 before:-bottom-20 before:z-[-1] before:content-sparkles'></div>
                            <CusomButton setSelectedPage={setSelectedPage}>Join now</CusomButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;

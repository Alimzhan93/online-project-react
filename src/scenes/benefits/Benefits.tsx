import React from 'react';
import { SelectedPage } from '@/types/TSelectedPage';
import HeaderText from './../../UI/HeaderText';

import { motion } from 'framer-motion';
import BenefitItem from './../../UI/BenefitItem';
const benefits = [
    {
        id: 1,
        image: '',
        heading: '',
        content: '',
    },
];

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
                <div className='md:w3/5 md:my-5'>
                    <HeaderText>MORE THAN JUST A GYM</HeaderText>
                    <p className='my-5'>
                        We provide world class fitness equipment, traines and classes to get you to your fitness goals with ease. We provide true care
                        info each and every member.
                    </p>
                </div>

                {/* Benefits */}
                <div className='mt-5 items-center justify-between gap-8 md:flex'>
                    {benefits.map((benefit) => (
                        <BenefitItem
                            key={benefit.id}
                            setSelectedPage={setSelectedPage}
                            {...benefits}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;

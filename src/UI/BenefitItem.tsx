import React from 'react';
import { SelectedPage } from '@/types/TSelectedPage';
import { IBenefits } from '@/types/benefits';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
} & Partial<IBenefits>;

const BenefitItem = ({ description, picture, setSelectedPage, title }: Props) => {
    return (
        <motion.div
            className='mt-5 rounded-sm border-2 border-solid px-5 py-16 text-center'
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
            }}>
            {/* picture */}
            <div className='mb-4 flex justify-center'>
                <div className='rounded-full border-gray-100 bg-primary-100 p-4'>{picture}</div>
            </div>
            {/* title */}
            <h4 className='font-bold'>{title}</h4>
            {/* description */}
            <div className='my-3'>{description}</div>

            {/* link */}
            <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
                <p>Learn more</p>
            </AnchorLink>
        </motion.div>
    );
};

export default BenefitItem;

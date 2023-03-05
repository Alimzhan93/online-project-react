import React from 'react';
import { SelectedPage } from '@/types/TSelectedPage';
import { motion } from 'framer-motion';
import HeaderText from '@/UI/HeaderText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='ourclasses'
            className='w-full bg-primary-100 py-20'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className='mx-auto w-5/6'
                    initial='hedden'
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
                    <div className='w-3/5'>
                        <HeaderText>OUR CLASSES</HeaderText>
                        <p className='py-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut iure aperiam, veritatis minus, ratione voluptatum quo
                            distinctio deleniti itaque impedit sint voluptate eligendi consequatur quidem repellat ipsam cupiditate at! Numquam,
                            provident aut veniam, tempora voluptatibus ducimus, voluptatum nisi reiciendis et repellendus perferendis nesciunt iusto
                            nobis nihil assumenda aliquid voluptate!
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default index;

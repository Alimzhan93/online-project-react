import React from 'react';
import { SelectedPage } from '@/types/TSelectedPage';
import { motion } from 'framer-motion';
import HeaderText from '@/UI/HeaderText';
import Class from '@/UI/Class';
import { IOurClasses } from '@/types/ourClasses';
import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import Image3 from '@/assets/image3.png';
import Image4 from '@/assets/image4.png';
import Image5 from '@/assets/image5.png';
import Image6 from '@/assets/image6.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ourClasse: IOurClasses[] = [
    {
        id: 1,
        title: 'Weight training classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image1,
    },
    {
        id: 2,
        title: 'Ab core classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image2,
    },
    {
        id: 3,
        title: 'Adventure classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image3,
    },
    {
        id: 4,
        title: 'Yoga classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image4,
    },
    {
        id: 5,
        title: 'Leg training classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image5,
    },
    {
        id: 6,
        title: 'Swimming classes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non consectetur eveniet expedita mollitia nostrum!',
        image: Image6,
    },
];
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
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {ourClasse.map((ourclass) => (
                            <Class
                                key={ourclass.id}
                                title={ourclass.title}
                                description={ourclass.description}
                                image={ourclass.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default index;

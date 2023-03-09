import { SelectedPage } from '@/types/TSelectedPage';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import HeaderText from '@/UI/HeaderText';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
type Inputs = {
    name: string;
    email: string;
    message: string;
};
const index = ({ setSelectedPage }: Props) => {
    const inputClasses = 'mt-5 w-full rounded-lg bg-primary-300 py-300 py-3 px-5 placeholder-white';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSumbit: SubmitHandler<Inputs> = () => {};

    return (
        <section
            id='contactus'
            className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div
                    className='md:w-3/5'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HeaderText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HeaderText>
                    <p className='my-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto corrupti minus dolorum? Tempora ex, aliquid ducimus suscipit
                        qui perspiciatis nostrum? Error hic consequuntur neque totam impedit modi quisquam doloremque voluptatem.
                    </p>
                </motion.div>

                {/* form and image */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    {/* form */}
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <form onSubmit={handleSubmit(onSumbit)}>
                            <input
                                type='text'
                                placeholder='Name'
                                className={inputClasses}
                                {...register('name', { required: true, maxLength: 100 })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && 'This field is required'}
                                    {errors.name.type === 'maxLength' && 'Max length is 100 characters'}
                                </p>
                            )}
                            <input
                                type='text'
                                placeholder='EMAIL'
                                className={inputClasses}
                                {...register('email', { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && 'This field is required'}
                                    {errors.email.type === 'pattern' && 'Enter valid email address'}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                cols={50}
                                placeholder='MESSAGE'
                                className={inputClasses}
                                {...register('message', { maxLength: 2000 })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>{errors.message.type === 'maxLength' && 'Max length is 2000 characters'}</p>
                            )}
                            <button
                                type='submit'
                                className='text mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300 hover:text-white'>
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    {/* image */}
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-5'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <div className='before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
                            <img
                                src={ContactUsPageGraphic}
                                alt='Girl is shape'
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default index;

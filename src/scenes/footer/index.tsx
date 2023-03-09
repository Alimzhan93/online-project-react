import React from 'react';
import Logo from '@/assets/Logo.png';

type Props = {};

const index = (props: Props) => {
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='mx-auto w-5/6 justify-between gap-10 md:flex'>
                <div className='mt-16 basis-[50%] md:mt-0'>
                    <img
                        src={Logo}
                        alt='Logo'
                    />
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, optio maiores. Soluta aliquid ab exercitationem maiores
                        voluptas quia asperiores deserunt facilis porro excepturi? Earum, quae repudiandae natus, beatae ab excepturi nobis inventore
                        sed iusto, nam asperiores voluptatibus illum minima assumenda.
                    </p>
                    <p>© All right reserved</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Instagram</p>
                    <p className='my-5'>Facebook</p>
                    <p className='my-5'>Telegram</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='my-5'>Contact me by number:</p>
                    <p className='my-5'>(666)-777-88-89</p>
                </div>
            </div>
        </footer>
    );
};

export default index;

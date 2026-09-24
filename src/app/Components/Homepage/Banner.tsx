import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/hero_img.jpg'


const Banner = () => {
    return (
        <section className=' py-12'>

        <div className='grid bg-slate-100 container mx-auto grid-cols-2 gap-4 items-center p-20 rounded-4xl'>
            <div className='pl-12'>
                 <h2 className='font-bold text-5xl pb-8'>Books to freshen up <br /> your bookshelf</h2>
                 <button className='btn btn-success font-bold'>View the Task</button>
            </div>
            <div>
               <Image src={bannerImage} alt='Banner' />
            </div>
        </div>
        </section>
    );
};

export default Banner;
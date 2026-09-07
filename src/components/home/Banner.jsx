import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন একটি <br className='hidden lg:block'/> <span className="text-primary">সুন্দর ভবিষ্যৎ।</span></h2>
                <p className=''>Buy Every Toy with Up To 15% Discount!</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className="flex-1">
                <Image alt='Buy Every Toy with Up To 15% Discount!' src={"/assets/hero.png"} width={500} height={400}></Image>
            </div>
        </div>
    );
};

export default Banner;
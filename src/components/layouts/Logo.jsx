import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-2'>
            <Image alt='logo-hero-kidz' src={"/public/assets/logo.png"} width={50} height={40}/>
            <h2 className="text-xl font-bold">Hero <span className="text-primary">Kidz</span></h2>
        </Link>
    );
};

export default Logo;
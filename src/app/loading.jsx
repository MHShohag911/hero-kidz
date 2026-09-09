import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-5'>
            <h2 className="text-5xl font-bold animate-pulse">Loading..</h2>
            <div className='animate-ping'>
                <Logo></Logo>
            </div>
        </div>
    );
};

export default loading;
"use client"
import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';

const error = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-5'>
            <BiSolidErrorAlt size={100} className='text-primary'></BiSolidErrorAlt>
            <h2 className="text-4xl font-bold">Something Went Wrong...</h2>
            <Link href={'/'} className="btn btn-primary">Go to Home</Link>
        </div>
    );
};

export default error;
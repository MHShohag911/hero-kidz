"use client"
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialButton = () => {
    const handleGoogleLogin = async () => {
    // Add Google authentication here
    const result = await signIn("google", {redirect: false});
    console.log("Google login", result);
    if(result.ok){
        Swal.fire("success", "Welcome", "success");
    } else {
        Swal.fire("Error", "Sorry", "error");
    }
  };
    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
                <FaGoogle className='text-primary'></FaGoogle>

                Continue with Google
            </button>
        </div>
    );
};

export default SocialButton;
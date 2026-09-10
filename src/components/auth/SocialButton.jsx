"use client"
import React from 'react';

const SocialButton = () => {
    const handleGoogleLogin = () => {
    // Add Google authentication here
    console.log("Google login");
  };
    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M21.805 10.023h-.847V10H12v4h5.651a6.003 6.003 0 01-10.88 2.26l-3.157 2.44A10.99 10.99 0 0012 23c6.075 0 11-4.925 11-11 0-.67-.069-1.323-.195-1.977z"
                        fill="#34A853"
                    />
                    <path
                        d="M2.815 7.297l3.29 2.412A6.597 6.597 0 0112 5.4c1.656 0 3.163.588 4.345 1.555l2.828-2.828C17.45 2.433 14.892 1.4 12 1.4A11 11 0 002.815 7.297z"
                        fill="#EA4335"
                    />
                    <path
                        d="M12 23c2.743 0 5.04-.905 6.72-2.445l-3.1-2.405c-.86.58-1.96.925-3.62.925a6.597 6.597 0 01-6.18-4.263l-3.27 2.52A11 11 0 0012 23z"
                        fill="#4285F4"
                    />
                    <path
                        d="M2.815 7.297A10.99 10.99 0 001 12c0 1.65.37 3.215 1.03 4.615l3.27-2.52A6.6 6.6 0 015.4 12c0-.73.125-1.435.36-2.09l-2.945-2.613z"
                        fill="#FBBC05"
                    />
                </svg>

                Continue with Google
            </button>
        </div>
    );
};

export default SocialButton;
"use client"

import { postUser } from '@/actions/server/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = await e.target;
        const name = await form.name.value;
        const email = await form.email.value;
        const password = await form.password.value;
        const user =  {
            name: name,
            email: email,
            password: password,
        }

        const result = await postUser(user);
        if(result.acknowledged){
            alert("Successful. Please Login");
            console.log(result)
            router.push('/login')
        }

        // Add your registration logic here
        console.log("Register submitted", user);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-gray-400 active:scale-[0.99]"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
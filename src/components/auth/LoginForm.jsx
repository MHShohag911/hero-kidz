"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = await e.target;
        const email = await form.email.value;
        const password = await form.password.value;
        console.log("Login submitted", email, password);

        const result = await signIn("credentials", {email, password, redirect:false})

        // Add your login logic here
        console.log("Login submitted", result, email, password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                    <div className="mb-2 flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            Forgot password?
                        </Link>
                    </div>

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

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-gray-400 active:scale-[0.99]"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
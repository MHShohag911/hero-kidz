"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your registration logic here
    console.log("Register submitted");
  };

  const handleGoogleLogin = () => {
    // Add Google authentication here
    console.log("Google login");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account to get started
          </p>
        </div>

        {/* Register Form */}
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

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-medium text-gray-700 transition hover:bg-gray-50"
        >
          {/* Google Icon */}
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

        {/* Login Toggle */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

import RegisterForm from "@/components/auth/RegisterForm";
import SocialButton from "@/components/auth/SocialButton";
import Link from "next/link";

export default function Register() {

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
        <RegisterForm></RegisterForm>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google */}
        <SocialButton></SocialButton>

        
      </div>
    </main>
  );
}
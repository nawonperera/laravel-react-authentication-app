import React from "react";
import type { ISingInFormProps } from "../../utilities/types/signIn/SignIn";

const SignInForm: React.FC<ISingInFormProps> = ({
    handleInputFieldChange,
    handleSubmit,
}) => {
    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Sign in to your account
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleInputFieldChange}
                            placeholder="name@company.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleInputFieldChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignInForm;

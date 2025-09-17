import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortalLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // You can add dummy validation here if needed
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            {/* Container */}
            <div className="w-full max-w-md space-y-3">
                {/* Title */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl font-semibold text-emerald-700">
                        Login to DevXcript Portal
                    </h2>
                    <p className="text-gray-400">
                        Enter dummy email password to access dashboard
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="info@gmail.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Options Row */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            Keep me logged in
                        </label>
                        <a href="#" className="text-sm text-emerald-700 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-emerald-700 text-white py-2 rounded-md hover:bg-emerald-800 transition text-center font-semibold"
                    >
                        Sign in
                    </button>

                    {/* Microsoft Sign In */}
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition mt-3"
                    >
                        <span className="mr-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="2" y="2" width="9" height="9" fill="#F25022" />
                                <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
                                <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
                                <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
                            </svg>
                        </span>
                        Sign in with Microsoft
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PortalLogin;

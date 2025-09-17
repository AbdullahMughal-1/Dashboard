// DashboardHeader.jsx
import React from 'react';

const DashboardHeader = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
            {/* Left: Menu + Title */}
            <div className="flex items-center gap-4">
                <button className="xl:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-700"
                    >
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                    </svg>
                </button>
                <h2 className="text-lg font-bold text-emerald-700">Dashboard</h2>
            </div>

            {/* Right: Notifications + Profile */}
            <div className="flex items-center gap-3">
                <div className="relative">
                    <button className="relative p-2 text-emerald-700 hover:bg-gray-100 rounded-md transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bell"
                        >
                            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                        </svg>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-700 rounded-full"></span>
                    </button>
                </div>
                <div className="relative">
                    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                        <div className="w-7 h-7 bg-emerald-700 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-white">BA</span>
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-medium text-gray-800 truncate max-w-[120px]">Babar Azam</p>
                            <p className="text-xs text-gray-500 truncate max-w-[120px]">babar@devxcript.com</p>
                        </div>
                        <div className="sm:hidden">
                            <p className="text-sm font-medium text-gray-800">Babar</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

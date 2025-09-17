import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const navItems = [
        { name: 'Dashboard', icon: 'home', path: '/dashboard' },
        { name: 'Courses', icon: 'book', path: '/courses' },
        { name: 'Results', icon: 'chart', path: '/results' },
        { name: 'Date Sheet', icon: 'calendar', path: '/datesheet' },
        { name: 'Invoices', icon: 'receipt', path: '/invoices' },
        { name: 'Attendance', icon: 'user-check', path: '/attendance' },
    ];

    // Automatically update active item based on current route
    useEffect(() => {
        const current = navItems.find(item => location.pathname.startsWith(item.path));
        if (current) {
            setActiveItem(current.name);
        }
    }, [location.pathname]);

    const icons = {
        home: <path d="M3 10.5L12 3l9 7.5" />,
        book: (
            <>
                <path d="M4 5a3 3 0 0 1 3-3h11v18H7a3 3 0 0 0-3 3V5z" />
                <path d="M7 2v18" />
            </>
        ),
        chart: (
            <>
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
            </>
        ),
        calendar: (
            <>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </>
        ),
        receipt: (
            <>
                <path d="M7 2h10l3 3v17l-3-2-2 2-2-2-2 2-2-2-3 2V2z" />
                <path d="M8 7h8M8 11h8M8 15h6" />
            </>
        ),
        'user-check': (
            <>
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M16 11l2 2 4-4" />
            </>
        ),
    };

    return (
        <div className="relative ">
            {/* Hamburger Button */}
            <button
                className="p-3 m-3 rounded-md bg-emerald-600 text-white z-50 fixed top-4 left-4 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`w-64 h-screen bg-white border-r border-gray-200 text-gray-800 flex flex-col fixed top-0 left-0 z-40 transition-transform duration-300  space-y-2 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:static`}
            >
                {/* Brand */}
                <div className="px-5 py-6 text-2xl font-semibold tracking-tight text-emerald-700">
                    DevXcript
                    <p className="text-sm text-gray-400">Student Portal</p>
                </div>
                <hr className="border-[1px] border-gray-200" />

                {/* Nav */}
                <nav className="px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = activeItem === item.name;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 rounded-md w-full text-left cursor-pointer py-5 ${isActive
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <svg
                                    className={`h-5 w-5 ${isActive ? 'text-emerald-600' : 'text-gray-500'
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {icons[item.icon]}
                                </svg>
                                <span className="text-sm font-medium">{item.name}</span>
                                {isActive && (
                                    <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="mt-auto px-5 py-4 text-xs text-gray-500">
                    Developed By DevXcript.
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;

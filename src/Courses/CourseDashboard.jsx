import React from 'react';

const CourseDashboard = () => {
    const courses = [
        {
            title: 'Web Application Development',
            code: 'CSSE3143',
            teacher: 'Asad Kamal',
            credits: '3.0',
            attendance: '86.0%',
        },
        {
            title: 'Operating Systems - Lab',
            code: 'CSCS3551',
            teacher: 'Qaisar Aslam',
            credits: '1.0',
            attendance: '90.0%',
        },
        {
            title: 'Introduction to Software Engineering',
            code: 'CSSE3113',
            teacher: 'Muhammad Basit Ali Gillani',
            credits: '3.0',
            attendance: '79.0%',
        },
        {
            title: 'Operating Systems',
            code: 'CSCS3553',
            teacher: 'Dr Adnan Ghafoor',
            credits: '3.0',
            attendance: '81.0%',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-xl font-bold text-gray-800 mb-1">All Courses</h1>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                            <path d="M22 10v6" />
                                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                        </svg>
                                        BS Computer Science
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <path d="M3 10h18" />
                                        </svg>
                                        Spring 2025
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                            <Stat label="Total Courses" value="4" />
                            <Stat label="Active" value="4" color="text-emerald-600" />
                            <Stat label="Withdraw" value="0" color="text-red-600" />
                            <Stat label="Current Credits" value="10" color="text-blue-600" />
                            <Stat label="Total Credits" value="10" color="text-purple-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800">Course List</h2>
                        <div className="flex items-center gap-2 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
                            <div className="flex items-center gap-2 min-w-max">
                                <FilterButton active>All Courses</FilterButton>
                                <FilterButton>Active Only</FilterButton>
                                <FilterButton>Withdraw</FilterButton>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                        {courses.map((course, idx) => (
                            <CourseCard key={idx} {...course} />
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <Legend color="bg-emerald-500" label="Active Classes (4)" />
                                <Legend color="bg-red-500" label="Withdraw (0)" />
                            </div>
                            <div className="text-sm text-gray-500">Showing 4 of 4 courses</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const Stat = ({ label, value, color = 'text-gray-800' }) => (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
);

const FilterButton = ({ children, active }) => (
    <button className={`px-3 sm:px-4 py-2 border rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${active
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
        }`}>
        {children}
    </button>
);

const Legend = ({ color, label }) => (
    <div className="flex items-center gap-2">
        <div className={`w-3 h-3 ${color} rounded-full`}></div>
        <span>{label}</span>
    </div>
);

const CourseCard = ({ title, code, teacher, credits, attendance }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className="bg-emerald-50 p-3 text-emerald-700">
            <h4 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[2rem]">{title}</h4>
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-90">{code}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">Active</span>
            </div>
        </div>
        <div className="p-3 space-y-3">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 line-clamp-1">{teacher}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Credits: </span>
                <span className="text-sm font-semibold text-emerald-600">{credits}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Grade: </span>
                <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium hover:underline">view progress</button>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Attendance: </span>
                <span className="text-xs px-2 py-1 rounded-full font-medium border text-green-600 bg-green-50 border-green-200">{attendance}</span>
            </div>
        </div>
    </div>
);


const InfoRow = ({ icon, text, action }) => {
    const icons = {
        user: (
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
        'credit-card': (
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
        ),
        'chart-column': (
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
            </svg>
        ),
        calendar: (
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
            </svg>
        ),
    };

    return (
        <div className="flex items-center gap-2">
            {icons[icon]}
            <span className="text-sm text-gray-600">{text}</span>
            {action && (
                <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium hover:underline ml-auto">
                    {action}
                </button>
            )}
        </div>
    );
};

export default CourseDashboard;

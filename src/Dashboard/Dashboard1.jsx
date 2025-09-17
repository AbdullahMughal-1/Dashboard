import React from 'react';

const Header = ({ title, subtitle }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#444f58"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M0 0h64v64H0z" />
                <path d="M53.199 18.567a1.88 1.88 0 0 0-1.512-2.185l-28.924-5.266a1.88 1.88 0 0 0-2.185 1.513l-6.849 37.623a1.88 1.88 0 0 0 1.512 2.185l28.924 5.266a1.88 1.88 0 0 0 2.185-1.513l6.849-37.623z" />
                <path d="M40.555 23.564a5.035 5.035 0 0 0-4.051-5.855 5.035 5.035 0 0 0-5.854 4.051l-.167.918 9.905 1.803.167-.917z" />
                <path d="M29.105 30.246l9.906 1.803" />
                <path d="M29.697 26.992l.963-.665a1.169 1.169 0 0 1 1.626.297 1.168 1.168 0 0 0 1.625.296l.045-.031a1.221 1.221 0 0 1 1.729.354c.367.53 1.094.663 1.625.296a1.166 1.166 0 0 1 1.625.296l.666.963" />
                <path d="M39.096 46.669l-15.223-2.771-.99 5.437 15.224 2.771.989-5.437z" />
                <path d="M14.302 47.101l-3.827-35.949a1.88 1.88 0 0 1 1.669-2.068l29.234-3.113a1.88 1.88 0 0 1 2.068 1.67l.295 2.769" />
            </svg>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
    </div>
);

const ProgressCircle = ({ percentage, stats, label }) => (
    <div className="flex justify-center items-center h-56">
        <div className="w-48 h-48 bg-gray-100 rounded-full flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-gray-800">{percentage}</p>
            <p className="text-sm font-medium text-gray-600">{stats}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    </div>
);

const ProgressBreakdown = ({ items }) => (
    <div className="space-y-2 mt-4">
        {items.map(({ label, value, color }, idx) => (
            <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${color} rounded-full`}></div>
                    <span className="text-sm text-gray-600">{label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">{value}</span>
            </div>
        ))}
    </div>
);

const InfoRow = ({ text, action }) => (
    <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{text}</span>
        {action && (
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium hover:underline ml-auto">
                {action}
            </button>
        )}
    </div>
);

const ClassCard = ({ title, code, type, teacher, time, location }) => (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3">
                <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{title}</h4>
                    <p className="text-xs text-gray-500">{code}</p>
                </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full font-medium border bg-blue-100 text-blue-700 border-blue-200">
                {type}
            </span>
        </div>
        <div className="grid grid-cols-1 gap-2">
            {teacher && <InfoRow text={teacher} />}
            {time && <InfoRow text={time} />}
            {location && <InfoRow text={location} />}
        </div>
    </div>
);

const CourseCard = ({ title, code, teacher, credits, attendance }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className="bg-emerald-50 p-3 text-emerald-700">
            <h4 className="font-semibold text-sm mb-2 min-h-[2rem]">{title}</h4>
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-90">{code}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                    Active
                </span>
            </div>
        </div>
        <div className="p-3 space-y-3">
            <InfoRow text={teacher} />
            <InfoRow text={`Credits: ${credits}`} />
            <InfoRow text="Grade:" action="view progress" />
            <InfoRow text={`Attendance: ${attendance}`} />
        </div>
    </div>
);

const Dashboard1 = () => {
    return (
        <main className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* 🧑 Profile + Academic Summary */}
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex items-start gap-4">

                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" xml:space="preserve"><path fill="white" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z" /></svg>
                            </div>

                            <div className="flex-1">

                                <h1 className="text-xl font-bold text-gray-800 mb-1">BABAR AZAM</h1>

                                <p className="text-sm text-gray-600 mb-2">L1PCBCS56</p>
                                <p className="text-sm text-gray-700 mb-3">
                                    Faculty of Information Technology and Computer Science
                                </p>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                                    BS Computer Science
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { label: 'CGPA', value: '3.23' },
                                { label: 'Earned Credits', value: '69', color: 'text-emerald-600' },
                                { label: 'Total Credits', value: '133' },
                                { label: 'In Progress', value: '10', color: 'text-orange-600' },
                            ].map(({ label, value, color = 'text-gray-800' }) => (
                                <div key={label} className="text-center p-3 bg-gray-50 rounded-lg">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</p>
                                    <p className={`text-xl font-bold ${color}`}>{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 📊 Progress Cards */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <Header title="Credit Hours" subtitle="Academic Progress" />
                        <ProgressCircle percentage="52%" stats="69 | 133" label="Credits" />
                        <ProgressBreakdown
                            items={[
                                { label: 'Completed', value: '69 hrs', color: 'bg-emerald-500' },
                                { label: 'Remaining', value: '64 hrs', color: 'bg-gray-300' },
                            ]}
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <Header title="GPA" subtitle="Academic Performance" />
                        <ProgressCircle percentage="84%" stats="3.37 | 4" label="GPA" />
                        <ProgressBreakdown
                            items={[
                                { label: 'Current GPA', value: '3.37', color: 'bg-emerald-500' },
                                { label: 'Letter Grade', value: 'B+', color: 'bg-blue-50 text-blue-600' },
                            ]}
                        />
                    </div>
                </section>

                {/* 📅 Today's Classes */}
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <Header title="Today's Classes" subtitle="Wednesday, Sep 17" />
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                        {[
                            {
                                title: 'Web Application Development',
                                code: 'CSSE3143',
                                type: 'Lab',
                                teacher: 'Asad Kamal',
                                time: '09:00 AM - 10:30 AM',
                                location: 'Lab 1',
                            },
                            {
                                title: 'Operating Systems',
                                code: 'CSCS3553',
                                type: 'Lecture',
                                teacher: 'Dr Adnan Ghafoor',
                                time: '11:00 AM - 12:30 PM',
                                location: 'Room 301',
                            },
                            {
                                title: 'Software Engineering',
                                code: 'CSSE3113',
                                type: 'Lecture',
                                teacher: 'Muhammad Basit',
                                time: '02:00 PM - 03:30 PM',
                                location: 'Room 205',
                            },
                        ].map((cls, idx) => (
                            <ClassCard key={idx} {...cls} />
                        ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-xs text-gray-500">4 classes scheduled</p>
                        <button className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                            View Full Schedule
                        </button>
                    </div>
                </section>

                {/* 📚 Current Courses */}
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <Header title="Current Courses" subtitle="Spring 2025 • 4 Enrolled Courses" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                        {[
                            {
                                title: 'Web Application Development',
                                code: 'CSSE3143',
                                teacher: 'Asad Kamal',
                                credits: 3,
                                attendance: '86.0%',
                            },
                            {
                                title: 'Operating Systems - Lab',
                                code: 'CSCS3551',
                                teacher: 'Qaisar Aslam',
                                credits: 1,
                                attendance: '90.0%',
                            },
                            {
                                title: 'Introduction to Software Engineering',
                                code: 'CSSE3113',
                                teacher: 'Muhammad Basit Ali Gillani',
                                credits: 3,
                                attendance: '79.0%',
                            },
                            {
                                title: 'Operating Systems',
                                code: 'CSCS3553',
                                teacher: 'Dr Adnan Ghafoor',
                                credits: 3,
                                attendance: '81.0%',
                            },
                        ].map((course, idx) => (
                            <CourseCard key={idx} {...course} />
                        ))}
                    </div>
                </section>
            </div>
        </main>

    );
};

export default Dashboard1;

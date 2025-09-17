import React from 'react';

const attendanceData = [
    {
        course: 'Web Development',
        total: 42,
        present: 36,
        absent: 6,
        percentage: 85.7,
        status: '✓ Good Standing',
        statusColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
        course: 'Object Oriented Programming',
        total: 38,
        present: 32,
        absent: 6,
        percentage: 84.2,
        status: '✓ Good Standing',
        statusColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
        course: 'Data Structures',
        total: 45,
        present: 41,
        absent: 4,
        percentage: 91.1,
        status: '✓ Good Standing',
        statusColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
        course: 'Database Systems',
        total: 40,
        present: 35,
        absent: 5,
        percentage: 87.5,
        status: '✓ Good Standing',
        statusColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
        course: 'Computer Networks',
        total: 35,
        present: 28,
        absent: 7,
        percentage: 80.0,
        status: '⚠ Below Average',
        statusColor: 'text-yellow-600',
        badgeColor: 'bg-yellow-100 text-yellow-700',
    },
    {
        course: 'Software Engineering',
        total: 48,
        present: 30,
        absent: 18,
        percentage: 62.5,
        status: '✗ Poor Attendance',
        statusColor: 'text-red-600',
        badgeColor: 'bg-red-100 text-red-700',
    },
];

const AttendanceOverview = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-start">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Attendance Overview</h1>
                <p className="text-gray-600">Your attendance record across all courses</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {attendanceData.map((course, idx) => (
                    <div
                        key={idx}
                        className="bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{course.course}</h3>
                                <span className={`px-3 py-1 rounded-full text-sm font-bold ${course.badgeColor}`}>
                                    {course.percentage}%
                                </span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-gray-800">{course.total}</div>
                                    <div className="text-xs text-gray-500">Total</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-emerald-600">{course.present}</div>
                                    <div className="text-xs text-gray-500">Present</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-red-600">{course.absent}</div>
                                    <div className="text-xs text-gray-500">Absent</div>
                                </div>
                            </div>

                            <div className="mt-3 text-center">
                                <span className={`text-sm font-medium ${course.statusColor}`}>{course.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttendanceOverview;

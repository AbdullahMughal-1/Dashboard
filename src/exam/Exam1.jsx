import React from 'react';

const exams = [
    {
        id: 1,
        subject: 'OOP',
        instructor: 'Babar Azam',
        date: '2024-07-13',
        time: '12:00 - 14:00',
        venue: 'A-008',
    },
    {
        id: 2,
        subject: 'COAL',
        instructor: 'Virat Kohli',
        date: '2024-07-14',
        time: '12:00 - 14:00',
        venue: 'A-010',
    },
    {
        id: 3,
        subject: 'MVC',
        instructor: 'Haris Rauf',
        date: '2024-07-15',
        time: '10:00 - 12:00',
        venue: 'B-108',
    },
    {
        id: 4,
        subject: 'ISL',
        instructor: 'Rizwan',
        date: '2024-07-16',
        time: '15:00 - 17:00',
        venue: 'A-008',
    },
    {
        id: 5,
        subject: 'DS',
        instructor: 'Starc',
        date: '2024-07-17',
        time: '12:00 - 14:00',
        venue: 'Cl-112',
    },
];

const Exam1 = () => {
    return (
        <div className="p-1  min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-start">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">DateSheet</h1>
                    <p className="text-gray-600">Datesheet for upcoming Spring 2025 exams</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {exams.map((exam) => (
                        <div
                            key={exam.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-emerald-50 text-emerald-700">
                                        {exam.subject}
                                    </span>
                                    <span className="text-2xl font-bold text-gray-300">#{exam.id}</span>
                                </div>

                                <InfoRow label="Instructor" value={exam.instructor} />
                                <InfoRow label="Date" value={exam.date} />
                                <InfoRow label="Time" value={exam.time} />
                                <InfoRow label="Venue" value={exam.venue} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div className="flex items-start">
        <div className="p-2 rounded-lg mr-3 bg-emerald-50"></div>
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="font-semibold text-gray-800">{value}</p>
        </div>
    </div>
);

export default Exam1;

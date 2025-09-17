import React, { useState } from 'react';

const ResultsTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('all');

    const results = [
        { id: 1, term: 'Spring 2023', gp: 63.34, cgp: 63.34, cr: 19, totalCr: 19, sgpa: 3.33, cgpa: 3.33 },
        { id: 2, term: 'Fall 2023', gp: 52.32, cgp: 115.6, cr: 17, totalCr: 36, sgpa: 3.08, cgpa: 3.21 },
        { id: 3, term: 'Spring 2024', gp: 59.33, cgp: 174.9, cr: 16, totalCr: 52, sgpa: 3.71, cgpa: 3.37 },
        { id: 4, term: 'Fall 2024', gp: 61.25, cgp: 236.15, cr: 18, totalCr: 70, sgpa: 3.4, cgpa: 3.37 },
        { id: 5, term: 'Spring 2025', gp: 67.8, cgp: 303.95, cr: 20, totalCr: 90, sgpa: 3.39, cgpa: 3.38 },
    ];

    const filteredResults = results.filter((row) => {
        const termMatch = selectedTerm === 'all' || row.term.toLowerCase().includes(selectedTerm);
        const searchMatch = Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
        return termMatch && searchMatch;
    });

    return (
        <div className="max-w-7xl mx-auto mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Results</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by term, ID, SGPA, or CGPA..."
                            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            value={selectedTerm}
                            onChange={(e) => setSelectedTerm(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-700 outline-none"
                        >
                            <option value="all">All Terms</option>
                            <option value="spring">Spring</option>
                            <option value="fall">Fall</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-emerald-50 text-emerald-700">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Term</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Grading Points</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Cumulative GP</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">CR</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Total CR</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">SGPA</th>
                                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">CGPA</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredResults.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{row.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-semibold text-emerald-600">{row.term}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-medium text-gray-900">{row.gp}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-medium text-gray-900">{row.cgp}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-medium text-gray-900">{row.cr}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-medium text-gray-900">{row.totalCr}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-semibold text-green-600">{row.sgpa}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className="text-sm font-semibold text-blue-600">{row.cgpa}</span>
                                    </td>
                                </tr>
                            ))}
                            {filteredResults.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No results found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ResultsTable;

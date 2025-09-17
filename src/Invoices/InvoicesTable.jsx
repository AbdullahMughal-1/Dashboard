import React, { useState } from 'react';

const invoiceData = [
    {
        term: 'Spring 2024',
        semester: '4th',
        challanId: 'CH-001',
        scholarship: '50%',
        fee: '50,000 PKR',
        fine: '0 PKR',
        status: 'Unpaid',
    },
    {
        term: 'Fall 2023',
        semester: '3rd',
        challanId: 'CH-002',
        scholarship: '30%',
        fee: '70,000 PKR',
        fine: '500 PKR',
        status: 'Paid',
    },
    {
        term: 'Spring 2023',
        semester: '2nd',
        challanId: 'CH-003',
        scholarship: '20%',
        fee: '80,000 PKR',
        fine: '1,000 PKR',
        status: 'Paid',
    },
    {
        term: 'Fall 2022',
        semester: '1st',
        challanId: 'CH-004',
        scholarship: '10%',
        fee: '90,000 PKR',
        fine: '0 PKR',
        status: 'Paid',
    },
    {
        term: 'Spring 2022',
        semester: 'Foundation',
        challanId: 'CH-005',
        scholarship: '0%',
        fee: '100,000 PKR',
        fine: '2,000 PKR',
        status: 'Paid',
    },
];

const InvoicesTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredInvoices = invoiceData.filter((invoice) => {
        const matchesSearch = [invoice.term, invoice.semester, invoice.challanId]
            .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'all' || invoice.status.toLowerCase() === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-2 bg-gray-50 min-h-screen mt-9">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Invoices</h1>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by term, semester, or challan ID..."
                                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-700 outline-none"
                            >
                                <option value="all">All Status</option>
                                <option value="paid">Paid</option>
                                <option value="unpaid">Unpaid</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-emerald-50 text-emerald-700">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">Term</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Semester</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Challan ID</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Scholarship</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Fee</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Fine</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredInvoices.map((invoice, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{invoice.term}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className="text-sm font-semibold text-emerald-600">{invoice.semester}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className="text-sm text-gray-600">{invoice.challanId}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className="text-sm font-medium text-green-600">{invoice.scholarship}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className="text-sm font-medium text-gray-900">{invoice.fee}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className="text-sm font-medium text-red-600">{invoice.fine}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className={`inline-block px-3 py-1 rounded-lg text-sm font-medium text-white ${invoice.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                                                }`}>
                                                {invoice.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {filteredInvoices.length === 0 && (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No invoices found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicesTable;
